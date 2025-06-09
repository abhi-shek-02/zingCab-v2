import {
  eliminateNonNumericFromString,
  isNetworkConnected,
  log,
  logr,
} from "@utils/Utility";
import apiConfig from "@utils/ApiConfig";
import Root from "@utils/Root";
import i18next from "i18next";
import _ from "lodash";
import { firebaseEvent } from "@config/Firebase";
import deviceInfo from "react-native-device-info";
import { Alert, Platform } from "react-native";
import { Storage } from "@utils/Storage";
import { CONSTANTS } from "@config/Storage";
import RNRestart from "react-native-restart";
import { CONVERT_URL_PDF, env, QA, SUPPORT_TICKET } from "@utils/URLs";
import { clearRedux, setAppState } from "@redux/app/Action";
import store from "@redux/Store";
import { APP_FLOW } from "@config/index";
import perf from "@react-native-firebase/perf";
import { LogOut } from "@redux/auth/Action";

const TIME_OUT_VALUE = 30000;
// Number each API request (used for debugging)

export const defaultConfig = {
  type: "POST",
  isCancelable: false,
  // will terminate api on back press or timeout
  timeoutValue: TIME_OUT_VALUE,
  // timeout value
  enableToast: true,
  // will show toast error msg if any,
  enableLoader: true,
  cancelableLoader: false,
  // if true loader will be managed here
  isGoBackOnError: true,
  akamaiEnable: false,
  header: {},
  resType: "json",
};
export const paramsToUrlQueryParams = (params) => {
  const esc = encodeURIComponent;
  let query = "";
  if (params && Object.keys(params).length > 0) {
    query += "?";
    query += Object.keys(params)
      .map((k) => `${esc(k)}=${esc(params[k])}`)
      .join("&");
  }
  return query;
};

export const getHeaders = (akamaiEnable = false) => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-PB-Source": "PBPAPP",
    "X-PB-App-Version": deviceInfo.getVersion(),
    // 'X-PB-ADVID': ,
    "X-PB-Device-Id": deviceInfo.getDeviceId(),
    // 'X-PB-Device-Resolution': ,
    "X-PB-OSVersion": Platform.Version,
    "X-PB-Platform": Platform.OS,
  };
  return header;
};

export function* request(url, params = {}, configParam = {}) {
  log(url);
  const config = {
    ...defaultConfig,
    ...(_.isObject(configParam) ? configParam : {}),
  };
  //    checking internet
  const isConnected = yield isNetworkConnected();
  if (!isConnected) {
    return;
  }

  //  getting header
  const headers = getHeaders(config?.akamaiEnable);
  headers["x-access-token"] = yield Storage.getAuthToken();
  const info = {
    method: "POST",
    headers: { ...headers, ...(config?.header ?? {}) },
  };

  if (config?.enableLoader) {
    Root.showLoader(config?.cancelableLoader ?? false);
  }
  let completeURL = url;

  // const partnerCode = eliminateNonNumericFromString(
  //   userData[CONSTANTS.USER_PARTNER_CODE],
  // );
  let res;
  try {
    let query = "";
    if (config?.type === "POST") {
      info.body = JSON.stringify(params);
    } else if (config?.type === "GET") {
      info.method = "GET";
      query = paramsToUrlQueryParams(params);
    } else if (config?.type === "GET_FORM") {
      info.method = "GET";
      query = paramsToUrlQueryParams(params);
      info.headers["Content-Type"] = "multipart/form-data";
    } else if (config?.type === "POST_FORM") {
      info.method = "POST";
      info.body = params;
      info.headers["Content-Type"] = "multipart/form-data";
    } else if (config?.type === "DELETE") {
      info.method = "DELETE";
      query = paramsToUrlQueryParams(params);
    }
    completeURL = url + query;
    log("api final url", url + query);
    log("api info", completeURL, info);
    let metric = null;
    try {
      metric = perf().newHttpMetric(completeURL, config?.type);
      yield metric.start();
    } catch (error) {}
    const response = yield fetch(url + query, info);
    try {
      metric.setHttpResponseCode(parseInt(response?.status, 10));
      yield metric.stop();
    } catch (error) {}

    log("api test", `${JSON.stringify(response)}`);
    log("api status", url, response?.status);

    if (config?.resType === "text") res = yield response.text();
    else res = yield response?.json();
    log("api res", url, res);
    console.groupEnd();
    apiConfig.clear();
    if (config?.enableLoader) {
      Root.hideLoader();
    }
    const stringifiedUserData = JSON.stringify(yield Storage.getUserData());
    const stringifiedInfoBody = info.body;
    const stringifiedResponse = JSON.stringify(res);

    if (parseInt(response?.status, 10) === 401) {
      // firebase
      firebaseEvent("Invalid_logout", {
        stringifiedUserData,
        completeURL,
        stringifiedInfoBody,
        stringifiedResponse,
      });
      // yield Storage.deleteAllData();
      // //RNRestart.Restart();

      // yield store.dispatch(setAppState({ appFlow: APP_FLOW.SPLASH }));
      // yield store.dispatch(clearRedux());
      log("point deeplink", store?.home?.pathThroughDeeplink);
      yield store.dispatch(
        LogOut({ deeplinkPath: store?.home?.pathThroughDeeplink })
      );
      Root.hideLoader();

      // yield Root.dispatch(clearRedux());
      // Root.popAll();
    }
    if (parseInt(response?.status, 10) === 500) {
      // firebase
      firebaseEvent("server_error", {
        stringifiedUserData,
        completeURL,
        stringifiedInfoBody,
        stringifiedResponse,
      });
    }

    return res;
  } catch (error) {
    log("api error", completeURL, error, isConnected);
    const stringifiedResponse = JSON.stringify(res);
    firebaseEvent("rvp_api_failure", {
      url: completeURL,
      error_value: JSON.stringify(error),
      stringifiedResponse,
    });
    console.groupEnd();
    if (config?.enableToast && isConnected) {
      Root.showToast(i18next.t("error.somethingWentWrong"));
    }
    apiConfig.clear();
    if (config?.enableLoader) {
      Root.hideLoader();
    }
  }
}

export async function uploadFile(
  url,
  fileName,
  fileUri,
  fileType,
  onSuccess,
  onFailure
) {
  // log('fileResponse', fileResponse);
  const QA = 0;
  const PROD = 1;
  const formData = new FormData();
  formData.append("file", { type: fileType, name: fileName, uri: fileUri });

  const userData = JSON.parse(await Storage.getUserData());
  const partnerCode = eliminateNonNumericFromString(
    userData[CONSTANTS.USER_PARTNER_CODE]
  );
  const authToken = await Storage.getAuthToken();
  const finalUrl = `${url}?payloadJSON=%7B%22partnersId%22%3A${partnerCode}%2C%22docTypeId%22%3A805%2C%22src%22%3A%22affiliate%22%7D`;
  fetch(finalUrl, {
    headers: {
      "x-access-token": authToken,
      "Content-Type": "multipart/form-data",
      ClientKey: env === QA ? "JfgY6Sgim7nm" : "AqeOFPf3i57Z",
      authKey:
        env === QA
          ? "kRwg125jWlOhi7zkLCFzZkUgdQhP1gtxNnpvs8Vd"
          : "3ZD0PxIb9MVbDEAKSWaM9V3vxJSIOEKLdre5Gxog",
    },
    body: formData,
    method: "POST",
  })
    .then(async (response) => {
      const responseJson = await response.json();
      // You put some checks here

      // const res = {};
      // res.ttlDocUrl = responseJson?.ttlDocUrl;
      // res.DocId = responseJson?.docId;
      onSuccess(responseJson);
    })
    .catch((error) => {
      onFailure(error);
    });
}

// eslint prekshit

export async function makeRequest(url, body, onSuccess, onFailure) {
  const authToken = await Storage.getAuthToken();
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": authToken,
      ClientKey: env === QA ? "JfgY6Sgim7nm" : "AqeOFPf3i57Z",
      authKey:
        env === QA
          ? "kRwg125jWlOhi7zkLCFzZkUgdQhP1gtxNnpvs8Vd"
          : "3ZD0PxIb9MVbDEAKSWaM9V3vxJSIOEKLdre5Gxog",
    },
    body: JSON.stringify(body),
    method: "POST",
  })
    .then(async (response) => {
      const responseJson = await response.json();
      onSuccess(responseJson);
    })
    .catch((error) => {
      onFailure(error);
    });
}

export const getGoalPlannerURL = async (onSuccess, onFailure) => {
  const authToken = await Storage.getAuthToken();
  const userData = JSON.parse(await Storage.getUserData());
  const AgentID = userData[CONSTANTS.USER_PARTNER_CODE];
  const type = "buy-now-financial-goal";

  try {
    const response = await fetch(SUPPORT_TICKET?.SUPPORT_TICKET_URl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": authToken,
      },
      body: JSON.stringify({
        type,
        AgentID,
      }),
    });
    const data = await response.json();
    onSuccess(data.data);
  } catch (error) {
    onFailure(error);
  }
};
