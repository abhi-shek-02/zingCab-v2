import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Linking,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { useRouter } from "expo-router";
const BookingConfirmationScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const route = useRoute();
  const { width, height } = Dimensions.get("window"); // or "screen"
  const [modalVisible, setModalVisible] = useState(false);
  // Get data from navigation route
  const { date, time, pickup, drop, fare } = route.params;

  return (
    <View style={styles.container}>
      {/* Close Button */}
      {/* <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
       
      </TouchableOpacity> */}
      {/* Booking Confirmed Header */}
      <TouchableOpacity
        style={{
          marginTop: 50,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between", // Pushes items apart
          paddingRight: 15,
        }}
        onPress={() => {
          try {
            router.push("(tabs)");
          } catch (e) {
            console.log("E", e);
          }
        }}
      >
        <View style={{ flex: 1 }} />
        <Ionicons name="close" size={24} color="#677483" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 15,
          // fontWeight: "bold",
          fontFamily: "Poppins_Medium",
          textAlign: "center",
          // backgroundColor: "blue",

          marginTop: 10,
          paddingHorizontal: 20,
          color: "#677483",
        }}
      >
        Thank you for choosing ZingCab! We're excited to serve you!
      </Text>
      <Text
        style={{
          fontSize: 22,
          // fontWeight: "bold",
          fontFamily: "Poppins_Medium",
          textAlign: "center",
          // backgroundColor: "blue",
          // marginTop: 40,
          // marginTop: 40,
          // paddingTop: 20,
          color: "#2C66E3",
        }}
      >
        Booking Confirmed
      </Text>
      <LottieView
        source={require("../assets/V4.json")}
        autoPlay
        loop
        speed={0.5}
        style={{
          width: "100%",
          height: 150,
          alignSelf: "center",
        }}
      />
      {/* <Image
        source={require("../assets/images")} // Add a checkmark image to assets
        style={styles.checkmark}
      /> */}
      {/* Ride Scheduled Box */}
      <View
        style={{
          backgroundColor: "#F9FAFF",
          padding: 15,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
          // paddingHorizontal:
          marginHorizontal: 10,
          padding: 15,
        }}
      >
        <View style={styles.dateBox}>
          <Text
            style={{
              fontSize: 14,
              // fontWeight: "bold",
              color: "#2d78ff",
              fontFamily: "Poppins_Medium",
            }}
          >
            {date}
          </Text>
          <Ionicons name="calendar" size={20} color="#2d78ff" />
        </View>
        <View style={styles.rideInfo}>
          <Text style={styles.rideTime}>
            Ride scheduled at {time}{" "}
            {/* <MaterialIcons name="edit" size={16} color="#2d78ff" /> */}
          </Text>
          <Text style={styles.driverInfo}>
            Driver details will be shared shortly.
          </Text>
        </View>
      </View>

      {/* Locations */}
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
          height: 160, // Adjusted height to fit all the details
          // paddingVertical: 20,
          borderWidth: 2,
          borderColor: "#eee",
          borderRadius: 10,
          flex: 1,
        }}
      >
        {/* Booking ID Section */}
        <Text
          style={{
            // backgroundColor: "#2d78ff",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            color: "#2d78ff",
            paddingVertical: 5,
            textAlign: "center",
            // marginBottom: 10,
            // fontWeight: "bold",
            width: "100%",
            fontFamily: "Poppins_Medium",
          }}
        >
          Booking ID: ABC12345
        </Text>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: "#eee",
            // width: width * 0.8,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        {/* Grid Layout: First Row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between", // Space out Pickup and Drop
            marginBottom: 8,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#677483",
              // marginBottom: 5,
              fontFamily: "Poppins_Regular",
              paddingVertical: 3,
            }}
          >
            Pickup: New York
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#677483",
              // marginBottom: 5,
              fontFamily: "Poppins_Regular",
              paddingVertical: 3,
            }}
          >
            {" "}
            Drop: Los Angeles
          </Text>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: "#eee",
            // width: width * 0.8,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        {/* Grid Layout: Second Row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between", // Space out Pickup and Drop
            marginBottom: 8,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,

              // marginBottom: 5,
              fontFamily: "Poppins_Regular",
              textAlign: "center",
              color: "#677483",
              paddingVertical: 3,
            }}
          >
            SUV
          </Text>
          <Text
            style={{
              fontSize: 14,

              // marginBottom: 5,
              fontFamily: "Poppins_Regular",
              textAlign: "left",
              color: "#677483",
              paddingVertical: 3,
            }}
          >
            {" "}
            Round trip
          </Text>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: "#eee",
            // width: width * 0.8,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        {/* Price Section */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            // fontWeight: "bold",
            fontFamily: "Poppins_Medium",
            // backgroundColor: "#2d78ff",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            color: "#505672",
            paddingVertical: 5,
            textAlign: "center",
            marginBottom: 10,
            // fontWeight: "bold",
            width: "100%",
            // height: "100%",
            fontFamily: "Poppins_Medium",
            justifyContent: "center",
            alignItems: "center",
            top: 1,
            paddingVertical: 3,
          }}
        >
          Booking Amount: ₹150
        </Text>
      </View>

      {/* Cancellation Policy */}
      <TouchableOpacity
        onPress={() => {
          try {
            // navigation.navigate("policyScreen");
            navigation.navigate("policyScreen", { type: "cancellation" });
          } catch (e) {
            console.log("E", e);
          }
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#2d78ff",
            textDecorationLine: "underline",
            marginBottom: 15,
            marginHorizontal: 20,
            fontFamily: "Poppins_Medium",
          }}
        >
          Cancellation & waiting policy
        </Text>
      </TouchableOpacity>

      {/* Payment Summary */}
      {/* <View style={styles.paymentBox}>
        <Text style={styles.walletText}>💳 Zing Wallet</Text>
        <Text style={styles.fareText}>₹{fare}</Text>
      </View> */}
      <View
        style={{
          borderWidth: 0.5,
          borderColor: "#eee",
          // width: width * 0.8,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: "#f5f5f5",
          padding: 10,
          borderRadius: 10,
          // marginBottom: 15,
          // paddingHorizontal: 20,
          marginHorizontal: 10,
        }}
        onPress={() => setModalVisible(true)}
      >
        {/* <Ionicons name="location" size={20} color="#666" /> */}
        <Text
          style={{
            flex: 1,
            fontSize: 14,
            color: "#333",
            marginLeft: 5,
            fontFamily: "Poppins_Regular",
          }}
        >
          Cancel Ride
        </Text>
        <MaterialIcons name="double-arrow" size={18} color="silver" />
      </TouchableOpacity>
      {/* Payment Summary */}
      {/* <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel Ride</Text>
      </TouchableOpacity> */}
      <View
        style={{
          height: 100,
          // backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: width,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          borderColor: "#2C66E3",
          marginTop: 10,
          shadowColor: "#2C66E3",
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,

          shadowColor: "black",
          shadowOffset: { width: 0, height: -4 }, // Moves shadow to the top
          shadowOpacity: 0.5, // Increase opacity for a darker effect
          shadowRadius: 10, // Increase radius for a more defined shadow

          // For Android
          elevation: 10, // Higher elevation for a darker shadow
          overflow: "visible", // Prevents shadow clipping
          backgroundColor: "white", // Ensure shadow is visible on iOS
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              // backgroundColor: "#E9F4FF",
              paddingVertical: 12,
              borderRadius: 5,
              alignItems: "center",
              flex: 1,
              marginRight: 10,
              borderColor: "#2C66E3",
              borderWidth: 1,
            }}
            onPress={() => Linking.openURL("tel:+917003371343")}
          >
            <Text
              style={{
                color: "#2C66E3",
                fontSize: 16,
                fontFamily: "Poppins_Medium",
              }}
            >
              Need any help?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#2d78ff",
              paddingVertical: 12,
              borderRadius: 5,
              alignItems: "center",
              flex: 1,
            }}
            onPress={() => navigation.navigate("bookingScreen")}
            // onPress={() => {
            //   setModalVisible(false);
            //   navigation.navigate("bookingConfirmationScreen", {
            //     date: "13 July",
            //     time: "8:30 AM",
            //     pickup: "Ambience Mall",
            //     drop: "Gate 1 Huda City",
            //     fare: 149,
            //   });
            // }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontFamily: "Poppins_Medium",
              }}
            >
              Book Another Ride
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              justifyContent: "flex-end",
              alignItems: "center",
              width: width,
            }}
          >
            <View
              style={{
                width: "100%",
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins_Medium",
                  marginBottom: 20,
                  textAlign: "center",
                  color: "#677483",
                }}
              >
                Cancel Booking?
              </Text>

              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Poppins_Regular",
                  marginBottom: 20,
                  textAlign: "center",
                }}
              >
                Hold on! Cancel your ride now?
                {"\n"} It’s secure, convenient, and just a step away!
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{
                    backgroundColor: "#2d78ff",
                    padding: 10,
                    borderRadius: 8,
                    flex: 1,
                    marginRight: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      fontFamily: "Poppins_Medium",
                    }}
                  >
                    Keep My Ride
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    /* Add cancel logic here */
                  }}
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 8,
                    flex: 1,
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#2d78ff",
                  }}
                >
                  <Text
                    style={{
                      color: "#2d78ff",
                      fontSize: 16,
                      fontFamily: "Poppins_Medium",
                    }}
                  >
                    Yes, Cancel Ride
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* </View> */}
    </View>
  );
};

export default BookingConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // padding: 20,
    // marginTop: 30,
  },
  closeButton: {
    position: "absolute",
    // top: 20,
    // right: 20,
  },
  headerText: {
    fontSize: 22,
    // fontWeight: "bold",
    fontFamily: "Poppins_Medium",
    textAlign: "center",
    // backgroundColor: "blue",
    // marginTop: 40,
    marginTop: 40,
    paddingTop: 20,
  },
  checkmark: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginVertical: 10,
  },
  rideBox: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  dateBox: {
    alignItems: "center",
    marginRight: 15,
  },
  dateText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2d78ff",
  },
  rideInfo: {
    flex: 1,
    fontFamily: "Poppins_Medium",
  },
  rideTime: {
    fontSize: 16,
    // fontWeight: "600",
    color: "#505672",
    fontFamily: "Poppins_Medium",
  },
  driverInfo: {
    fontSize: 12,
    color: "#777",
    fontFamily: "Poppins_Medium",
  },
  locationContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  locationText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  linkText: {
    fontSize: 14,
    color: "#2d78ff",
    textDecorationLine: "underline",
    marginBottom: 15,
  },
  pickupBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  pickupText: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    marginLeft: 5,
    fontFamily: "Poppins_Medium",
  },
  paymentBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e5f2ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  walletText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d78ff",
  },
  fareText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cancelButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  cancelText: {
    fontSize: 16,
    color: "#d32f2f",
  },
});
