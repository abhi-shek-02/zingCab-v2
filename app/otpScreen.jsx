import LottieView from "lottie-react-native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
const OTPScreen = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      {/* <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity> */}

      {/* Banner */}
      {/* <View style={styles.banner}> */}
      {/* <Text style={styles.greenText}>ECO FRIENDLY</Text>
              <Text style={styles.blackText}>RIDES</Text> */}

      {/* </View> */}
      <LottieView
        source={require("../assets/A3.json")} // Replace with your JSON file path
        autoPlay
        loop
        style={{
          width: "100%", // Increase width
          height: "50%", // Increase height
          // alignSelf: "center", // Center alignment
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor:'red'
        }}
      />

      {/* OTP Card */}
      <View style={styles.otpCard}>
        <Text style={styles.otpTitle}>Enter OTP</Text>
        <View style={styles.phoneNumberRow}>
          <Text style={styles.phoneText}>Sent to +91-7003840501</Text>
          <TouchableOpacity onPress={() => navigation.navigate("loginScreen")}>
            <Text style={styles.editIcon}>✎</Text>
          </TouchableOpacity>
        </View>

        {/* OTP Input */}
        <OTPTextInput
          inputCount={6}
          handleTextChange={(text) => setOtp(text)}
          tintColor="#6AAEFD"
          offTintColor="#ddd"
          textInputStyle={styles.otpInput}
        />

        {/* Verify Button */}
        <TouchableOpacity
          style={styles.verifyButton}
          disabled={false}
          onPress={() => {
            try {
              //   navigation.navigate("(tabs)/index");
              router.navigate({
                pathname: "/",
                params: { userVerified: true },
              });
            } catch (e) {
              console.log("E", e);
            }
          }}
        >
          <Text style={styles.verifyButtonText}>Verify OTP</Text>
        </TouchableOpacity>

        {/* Timer */}
        <Text style={styles.timer}>00:{timer < 10 ? `0${timer}` : timer}s</Text>
      </View>
    </ScrollView>
  );
};
export default OTPScreen;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
    // justifyContent:'center'
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backText: {
    fontSize: 24,
  },
  banner: {
    // flexDirection: "colo",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    height: 200,
    width: 100,
  },
  greenText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00A86B",
  },
  blackText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  carImage: {
    width: 150,
    height: 80,
    resizeMode: "contain",
  },
  otpCard: {
    // backgroundColor: "#EAF6FF",
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // elevation: 5,
    height: "100%",
  },
  otpTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  phoneNumberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  phoneText: {
    color: "#555",
  },
  editIcon: {
    color: "#6AAEFD",
    marginLeft: 5,
  },
  otpInput: {
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 18,
    textAlign: "center",
    height: 50,
    width: 40,
    marginHorizontal: 5,
    // backgroundColor:'red'
    // ✅ Remove shadow on iOS
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,

    // ✅ Remove elevation on Android
    elevation: 0,
  },
  verifyButton: {
    backgroundColor: "#ccc",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },
  verifyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  timer: {
    textAlign: "right",
    marginTop: 10,
    color: "#555",
  },
});
