import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Modal,
  Dimensions,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Card, Divider } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import DatePicker from "react-native-date-picker";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { mainColor } from "@/constants/Colors";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Animated } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { Picker } from "@react-native-picker/picker";

const DateRangePicker = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);
  const [pickupTime, setPickupTime] = useState("10:00 AM");

  const timeOptions = Array.from({ length: 24 * 4 }, (_, i) => {
    const hours = Math.floor(i / 4);
    const minutes = (i % 4) * 15;
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes === 0 ? "00" : minutes;
    return {
      label: `${formattedHours}:${formattedMinutes} ${period}`,
      value: `${formattedHours}:${formattedMinutes} ${period}`,
    };
  });

  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
      }}
    >
      {/* Row for Pickup & Drop-off Dates */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Pickup Date */}
        <View style={{ width: "48%" }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_Medium",
              marginBottom: 5,
            }}
          >
            Pickup Date
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#ccc",
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderRadius: 8,
            }}
            onPress={() => setShowFromDatePicker(true)}
          >
            <Text
              style={{
                fontSize: 13,
                color: "#333",
                fontFamily: "Poppins_Regular",
              }}
            >
              {fromDate.toDateString()}
            </Text>
            <Text style={{ fontSize: 15, color: "#2d78ff" }}>📅</Text>
          </TouchableOpacity>
          {showFromDatePicker && (
            <DateTimePicker
              value={fromDate}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={(event, selectedDate) => {
                setShowFromDatePicker(false);
                if (selectedDate) {
                  setFromDate(selectedDate);
                  if (selectedDate > toDate) setToDate(selectedDate);
                }
              }}
            />
          )}
        </View>

        {/* Drop-off Date */}
        <View style={{ width: "48%" }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_Medium",
              marginBottom: 5,
            }}
          >
            Drop-off Date
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#ccc",
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderRadius: 8,
            }}
            onPress={() => setShowToDatePicker(true)}
          >
            <Text
              style={{
                fontSize: 13,
                color: "#333",
                fontFamily: "Poppins_Regular",
              }}
            >
              {toDate.toDateString()}
            </Text>
            <Text style={{ fontSize: 15, color: "#2d78ff" }}>📅</Text>
          </TouchableOpacity>
          {showToDatePicker && (
            <DateTimePicker
              value={toDate}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={(event, selectedDate) => {
                setShowToDatePicker(false);
                if (selectedDate && selectedDate >= fromDate) {
                  setToDate(selectedDate);
                }
              }}
            />
          )}
        </View>
      </View>

      {/* Row for Pickup Time */}
      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Poppins_Medium",
            marginBottom: 5,
          }}
        >
          Pickup Time
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
          }}
        >
          <Picker
            selectedValue={pickupTime}
            onValueChange={(itemValue) => setPickupTime(itemValue)}
            style={{
              fontSize: 12,
              color: "#333",
              fontFamily: "Poppins_Regular",
            }} // Apply font family
            itemStyle={{
              fontSize: 12,
              color: "#333",
              fontFamily: "Poppins_Regular",
            }} // Apply font to items
          >
            {timeOptions.map((time, index) => (
              <Picker.Item key={index} label={time.label} value={time.value} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};
const OneWayScreen = () => {
  // const route = useRoute();
  // console.log("Route:", route);
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Rides");
  const [selectedSubTab, setSelectedSubTab] = useState(true);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isPickUpFromAirport, setIsPickUpFromAirport] = useState(true);

  const TripForm = () => {
    const [pickup, setPickup] = useState("");

    return (
      <View>
        <View
          style={{
            marginTop: 3,
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* Pickup Location ttt */}
          <MaterialCommunityIcons
            name="map-marker-radius-outline"
            size={25}
            color="#2C66E3"
            style={{
              alignItems: "center",
              height: "90%",
              padding: 5,
              width: "10%",
            }}
          />

          <TextInput
            style={{
              width: "85%",
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#e0e0e0",
              backgroundColor: "#FFF",
              fontSize: 12,
              marginBottom: 2,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              elevation: 3,
              fontFamily: "Poppins_Regular",
            }}
            placeholder="Enter Pickup Location"
            placeholderTextColor="#9FA9BC"
            value={pickup}
            onChangeText={setPickup}
          />
          <MaterialIcons
            name="info-outline"
            size={18}
            color="#2C66E3"
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              height: "65%",
              width: "8%",
              padding: 5,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* Pickup Location ttt */}
          <MaterialCommunityIcons
            name="map-marker-radius-outline"
            size={25}
            color="#009D91"
            style={{
              alignItems: "center",
              height: "90%",
              padding: 5,
              width: "10%",
            }}
          />

          <TextInput
            style={{
              width: "85%",
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#e0e0e0",
              backgroundColor: "#FFF",
              fontSize: 12,
              marginBottom: 10,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              elevation: 3,
              fontFamily: "Poppins_Regular",
            }}
            placeholder="Enter Drop Location"
            placeholderTextColor="#9FA9BC"
            value={pickup}
            onChangeText={setPickup}
          />
          <MaterialIcons
            name="info-outline"
            size={18}
            color="#2C66E3"
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              height: "65%",
              width: "8%",
              padding: 5,
            }}
          />
        </View>
      </View>
    );
  };

  const [selectedVehicle, setSelectedVehicle] = useState("Sedan");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState("12:00 AM");

  // Generate time options (12:00 AM - 11:45 PM)
  const timeOptions = Array.from({ length: 24 * 4 }, (_, i) => {
    const hours = Math.floor(i / 4);
    const minutes = (i % 4) * 15;
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes === 0 ? "00" : minutes;
    return {
      label: `${formattedHours}:${formattedMinutes} ${period}`,
      value: `${formattedHours}:${formattedMinutes} ${period}`,
    };
  });
  const messages = [
    "The driver opens the door for you.",
    "Please wear your seatbelt.",
    "Adhering to the speed limit for your safety.",
  ];

  const onDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      setShowDatePicker(false);
    }
  };
  // const timeOptions = generateTimeSlots();
  const [index, setIndex] = useState(0);
  const translateY = useRef(new Animated.Value(-20)).current; // Initial position (above)
  const opacity = useRef(new Animated.Value(0)).current; // Initial opacity (hidden)

  useEffect(() => {
    const interval = setInterval(() => {
      // Reset animation values before starting
      translateY.setValue(-20);
      opacity.setValue(0);

      // Start animation: drop + fade-in
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0, // Move to normal position
          duration: 1000, // Drop animation duration
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1, // Fade in
          duration: 1000, // Same duration as drop animation
          useNativeDriver: true,
        }),
      ]).start(() => {
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 2000); // Wait before changing text
      });
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const screenWidth = Dimensions.get("window").width; // Get screen width
  const translateX = useRef(new Animated.Value(-screenWidth)).current; // Start from left

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: screenWidth, // Move to right
        duration: 6000, // Adjust speed (4 seconds)
        useNativeDriver: true,
      })
    ).start();
  }, []);
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          padding: 10,
          alignItems: "center",
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        {TripForm()}
      </View>

      <View
        style={{
          height: 35,
          overflow: "hidden",
          flexDirection: "row",
          // backgroundColor: "red",
        }}
      >
        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            transform: [{ translateX }],
          }}
        >
          {/* Zing Express Tag */}
          <View
            style={{
              backgroundColor: "#2C66E3",
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              shadowColor: "black",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5, // Android shadow
            }}
          >
            {/* Tag Icon */}
            <Ionicons
              name="flash"
              size={18}
              color="white"
              style={{ marginRight: 6 }}
            />

            {/* Tag Text */}
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 14,
                letterSpacing: 1,
              }}
            >
              Zing Express
            </Text>
          </View>

          {/* Car Animation */}
          <LottieView
            source={require("../assets/V3.json")}
            autoPlay
            loop
            style={{ width: 100, height: 50 }} // Adjust size
          />
        </Animated.View>
      </View>
      <View
        style={{
          marginTop: 30,
          // backgroundColor: "#F9FAFF",
          width: "100%",
          padding: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: "#DADEF2",
          borderWidth: 1,
          // height: "100%",
          // flex: 1,
          marginBottom: 150,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="assistant-navigation"
            size={16}
            color="#2d78ff"
            style={{
              borderWidth: 1,
              borderRadius: 50,
              padding: 5,
              borderColor: "silver",
              backgroundColor: "#fff",
              shadowColor: "#2d78ff",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.1, // Reduced opacity for a lighter shadow
              shadowRadius: 6, // Increased radius for a softer effect
              elevation: 2, // Lowered for a subtle shadow on Android
            }}
          />
          <Text
            style={{
              // textAlign: "center",
              // marginTop: 10,
              fontSize: 15,
              paddingHorizontal: 10,
              // padding: 10,

              fontFamily: "Poppins_Medium",
              color: "#505672",
            }}
          >
            Pick Your Perfect Date & Time
          </Text>
        </View>

        <View
          style={{
            // padding: 20,
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            // marginHorizontal: 10,
            // backgroundColor: "red",
            marginVertical: 10,
          }}
        >
          {/* Date Picker Input */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#ccc",
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderRadius: 10,
              width: "53%",
              marginRight: 10,
              height: "100%",
            }}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={{ fontSize: 15, color: "#333" }}>
              {date.toDateString()}
            </Text>
            <Text style={{ fontSize: 15, color: "#2d78ff" }}>📅</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onDateChange}
            />
          )}

          {/* Time Picker */}
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#ccc",
              // marginTop: 15,
              // paddingVertical: 10,
              // paddingHorizontal: 15,
              borderRadius: 10,
              width: "42%",
              // backgroundColor: "red",
            }}
          >
            <Picker
              selectedValue={selectedTime}
              onValueChange={(itemValue) => setSelectedTime(itemValue)}
              style={{}}
            >
              {timeOptions.map((time, index) => (
                <Picker.Item
                  key={index}
                  label={time.label}
                  value={time.value}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            padding: 10,
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="directions-car"
            size={16}
            color="#2d78ff"
            style={{
              borderWidth: 1,
              borderRadius: 50,
              padding: 5,
              borderColor: "silver",
              backgroundColor: "#fff",
              shadowColor: "#2d78ff",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.1, // Reduced opacity for a lighter shadow
              shadowRadius: 6, // Increased radius for a softer effect
              elevation: 2, // Lowered for a subtle shadow on Android
            }}
          />
          <Text
            style={{
              // textAlign: "center",
              // marginTop: 10,
              fontSize: 15,
              paddingHorizontal: 10,
              // padding: 10,

              fontFamily: "Poppins_Medium",
              color: "#505672",
            }}
          >
            Select Category
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            // padding: 5,
            backgroundColor: "#fff", // Light background for better contrast
            borderRadius: 10,
          }}
        >
          {/* Sedan Option */}
          <TouchableOpacity
            style={{
              width: "100%",
              // padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: selectedVehicle === "Sedan" ? "#2d78ff" : "silver",
              backgroundColor: selectedVehicle === "Sedan" ? "#eaf3ff" : "#fff",
              alignItems: "center",
              justifyContent: "center",
              // elevation: 3, // Soft shadow
            }}
            onPress={() => setSelectedVehicle("Sedan")}
          >
            <View style={{ width: "100%", height: 60, flexDirection: "row" }}>
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                {" "}
                <LottieView
                  source={require("../assets/V3.json")}
                  autoPlay
                  loop
                  style={{
                    // alignContent: "center",
                    width: "100%",
                    height: 50,
                    // alignSelf: "center",
                    paddingLeft: 10,
                  }}
                />
              </View>
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontFamily: "Poppins_Medium",
                    color: "#2C66E3",
                  }}
                >
                  Zing Classic
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontFamily: "Poppins_Regular",
                    }}
                  >
                    Sedan
                  </Text>{" "}
                  <MaterialIcons
                    name="person"
                    size={16}
                    color="#555"
                    style={{ fontFamily: "Poppins_Regular", marginBottom: 4 }}
                  />
                  <Text style={{ fontFamily: "Poppins_Regular" }}> 4</Text>
                </View>
              </View>
              <View
                style={{
                  width: "30%",
                  // alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "green",
                    fontSize: 16,
                    fontFamily: "Poppins_Medium",
                  }}
                >
                  ₹800
                </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "gray",
                    fontSize: 13,
                    fontFamily: "Poppins_Regular",
                  }}
                >
                  ₹1000
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "100%",
              // padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: selectedVehicle === "SUV" ? "#2d78ff" : "silver",
              backgroundColor: selectedVehicle === "SUV" ? "#eaf3ff" : "#fff",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              // elevation: 3, // Soft shadow
            }}
            onPress={() => setSelectedVehicle("SUV")}
          >
            <View style={{ width: "100%", height: 60, flexDirection: "row" }}>
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                {" "}
                <LottieView
                  source={require("../assets/SUV.json")}
                  autoPlay
                  loop
                  style={{
                    // alignContent: "center",
                    width: "100%",
                    height: 70,
                    // alignSelf: "center",
                    paddingLeft: 10,
                  }}
                />
              </View>
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontFamily: "Poppins_Medium",
                    color: "#2C66E3",
                  }}
                >
                  Zing premium
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontFamily: "Poppins_Regular",
                    }}
                  >
                    SUV
                  </Text>{" "}
                  <MaterialIcons
                    name="person"
                    size={16}
                    color="#555"
                    style={{ fontFamily: "Poppins_Regular", marginBottom: 4 }}
                  />
                  <Text style={{ fontFamily: "Poppins_Regular" }}> 6</Text>
                </View>
              </View>
              <View
                style={{
                  width: "30%",
                  // alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "green",
                    fontSize: 16,
                    fontFamily: "Poppins_Medium",
                  }}
                >
                  ₹800
                </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "gray",
                    fontSize: 13,
                    fontFamily: "Poppins_Regular",
                  }}
                >
                  ₹1000
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* SUV Option */}
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {/* Button to Open Modal */}
          <TouchableOpacity
            style={{
              backgroundColor: "#2d78ff",
              paddingVertical: 12,
              borderRadius: 10,
              alignItems: "center",
              marginTop: 20,
              width: "100%",
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontFamily: "Poppins_Medium",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>

          {/* Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Poppins_Medium",
                    color: "#007AFF",
                    marginBottom: 15,
                  }}
                >
                  Booking Details
                </Text>

                {/* Ticket Container */}
                <View
                  style={{
                    backgroundColor: "#2d78ff",
                    borderRadius: 10,
                    padding: 15,
                    width: "100%",
                    position: "relative",
                  }}
                >
                  {/* Pickup & Drop Section */}
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome5
                      name={
                        isPickUpFromAirport
                          ? "map-marker-alt"
                          : "map-marker-alt"
                      }
                      size={20}
                      color="white"
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ color: "#fff", fontSize: 12 }}>
                        Pickup
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          fontFamily: "Poppins_Regular",
                        }}
                      >
                        {isPickUpFromAirport
                          ? "IGI Airport, Delhi"
                          : "Ambience Mall, Gurgaon"}
                      </Text>
                    </View>
                  </View>

                  {/* Vertical Line */}
                  <View
                    style={{
                      height: 20,
                      borderLeftWidth: 1.5,
                      borderLeftColor: "#fff",
                      marginLeft: 10,
                      marginVertical: 5,
                    }}
                  />

                  {/* Drop Icon & Address */}
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome5
                      name={
                        isPickUpFromAirport ? "map-marker-alt" : "plane-arrival"
                      }
                      size={20}
                      color="white"
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ color: "#fff", fontSize: 12 }}>Drop</Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          fontFamily: "Poppins_Regular",
                        }}
                      >
                        {isPickUpFromAirport
                          ? "Ambience Mall, Gurgaon"
                          : "IGI Airport, Delhi"}
                      </Text>
                    </View>
                  </View>

                  {/* Pickup Date & Time */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 15,
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <Text style={{ color: "#fff", fontSize: 12 }}>
                        Pickup Date & Time
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          fontFamily: "Poppins_Medium",
                        }}
                      >
                        20/04/25 - 7:30 AM
                      </Text>
                    </View>
                  </View>

                  {/* Dotted Line with Cutouts */}
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: "#fff",
                      borderStyle: "dashed",
                      marginVertical: 10,
                      position: "relative",
                    }}
                  >
                    {/* Left Side Cutout */}
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "white",
                        borderRadius: 10,
                        position: "absolute",
                        left: -23,
                        top: -10,
                      }}
                    />
                    {/* Right Side Cutout */}
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "white",
                        borderRadius: 10,
                        position: "absolute",
                        right: -23,
                        top: -10,
                      }}
                    />
                  </View>

                  {/* Fare Details */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      // justifyContent:'center'
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 14 }}>
                      Zing Classic (Sedan for 4)
                    </Text>

                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 19,
                        fontFamily: "Poppins_Medium",
                      }}
                    >
                      ₹ 1200
                    </Text>
                  </View>
                </View>

                {/* Buttons */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: 15,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#E9F4FF",
                      paddingVertical: 12,
                      borderRadius: 10,
                      alignItems: "center",
                      flex: 1,
                      marginRight: 10,
                    }}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text
                      style={{
                        color: "#007AFF",
                        fontSize: 16,
                        fontFamily: "Poppins_Medium",
                      }}
                    >
                      Edit Details
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor: "#2d78ff",
                      paddingVertical: 12,
                      borderRadius: 10,
                      alignItems: "center",
                      flex: 1,
                    }}
                    onPress={() => {
                      setModalVisible(false);
                      navigation.navigate("bookingConfirmationScreen", {
                        date: "20 April",
                        time: "7:30 AM",
                        pickup: isPickUpFromAirport
                          ? "IGI Airport, Delhi"
                          : "Ambience Mall, Gurgaon",
                        drop: isPickUpFromAirport
                          ? "Ambience Mall, Gurgaon"
                          : "IGI Airport, Delhi",
                        fare: 1200,
                      });
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontFamily: "Poppins_Medium",
                      }}
                    >
                      Confirm Booking
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};
const RoundTripScreen = () => {
  // const route = useRoute();
  // console.log("Route:", route);
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Rides");
  const [selectedSubTab, setSelectedSubTab] = useState(true);
  const [pickup, setPickup] = useState("");
  const [dropLocations, setDropLocations] = useState([""]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const TripForm = () => {
    const addDropLocation = () => {
      if (dropLocations.length < 4) {
        setDropLocations([...dropLocations, ""]);
      } else {
        Alert.alert(
          "Limit Reached",
          "You can add up to 4 drop locations only."
        );
      }
    };

    // Remove a drop location field (Ensures at least one remains)
    const removeDropLocation = (index) => {
      if (dropLocations.length > 1) {
        let updatedDrops = [...dropLocations];
        updatedDrops.splice(index, 1);
        setDropLocations(updatedDrops);
      }
    };

    // Update text of a drop location
    const updateDropLocation = (text, index) => {
      let updatedDrops = [...dropLocations];
      updatedDrops[index] = text;
      setDropLocations(updatedDrops);
    };

    return (
      <View style={{ marginTop: 10, width: "100%", alignItems: "center" }}>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* Pickup Location ttt */}
          <MaterialCommunityIcons
            name="map-marker-radius-outline"
            size={30}
            color="#505672"
            style={{
              alignItems: "center",
              height: "90%",
              padding: 5,
              width: "10%",
            }}
          />

          <TextInput
            style={{
              width: "85%",
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#e0e0e0",
              backgroundColor: "#FFF",
              fontSize: 12,
              marginBottom: 10,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 5,
              elevation: 3,
              fontFamily: "Poppins_Regular",
            }}
            placeholder="Enter Pickup Location"
            placeholderTextColor="#9FA9BC"
            value={pickup}
            onChangeText={setPickup}
          />
          <MaterialIcons
            name="info-outline"
            size={18}
            color="#2C66E3"
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              height: "65%",
              width: "8%",
              padding: 5,
            }}
          />
        </View>

        {dropLocations.map((drop, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "86%",
              marginBottom: 10,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                padding: 15,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#e0e0e0",
                backgroundColor: "#FFF",
                fontSize: 12,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 5,
                elevation: 3,
                fontFamily: "Poppins_Regular",
              }}
              placeholder={`Enter Drop Location ${index + 1}`}
              placeholderTextColor="#9FA9BC"
              value={drop}
              onChangeText={(text) => updateDropLocation(text, index)}
            />

            {/* Remove Button (only if more than one drop location) */}
            {dropLocations.length > 1 && (
              <TouchableOpacity
                onPress={() => removeDropLocation(index)}
                style={{
                  marginLeft: 10,
                  backgroundColor: "#FF5A5F",
                  padding: 8,
                  borderRadius: 5,
                }}
              >
                <MaterialIcons name="close" size={18} color="#FFF" />
              </TouchableOpacity>
            )}
          </View>
        ))}

        {/* (+) Add Drop Location Button (Disabled when 4 locations exist) */}
        {dropLocations.length < 4 && (
          <TouchableOpacity
            onPress={addDropLocation}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              padding: 12,
              borderRadius: 10,
              backgroundColor: "#2d78ff",
              marginBottom: 10,
            }}
          >
            <MaterialIcons name="add" size={18} color="#FFF" />
            <Text style={{ color: "#FFF", fontSize: 14, marginLeft: 5 }}>
              Add Drop Location
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const [selectedVehicle, setSelectedVehicle] = useState("Sedan");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState("12:00 AM");

  // Generate time options (12:00 AM - 11:45 PM)
  const timeOptions = Array.from({ length: 24 * 4 }, (_, i) => {
    const hours = Math.floor(i / 4);
    const minutes = (i % 4) * 15;
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes === 0 ? "00" : minutes;
    return {
      label: `${formattedHours}:${formattedMinutes} ${period}`,
      value: `${formattedHours}:${formattedMinutes} ${period}`,
    };
  });
  const messages = [
    "The driver opens the door for you.",
    "Please wear your seatbelt.",
    "Adhering to the speed limit for your safety.",
  ];

  const onDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      setShowDatePicker(false);
    }
  };
  // const timeOptions = generateTimeSlots();
  const [index, setIndex] = useState(0);
  const translateY = useRef(new Animated.Value(-20)).current; // Initial position (above)
  const opacity = useRef(new Animated.Value(0)).current; // Initial opacity (hidden)

  useEffect(() => {
    const interval = setInterval(() => {
      // Reset animation values before starting
      translateY.setValue(-20);
      opacity.setValue(0);

      // Start animation: drop + fade-in
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0, // Move to normal position
          duration: 1000, // Drop animation duration
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1, // Fade in
          duration: 1000, // Same duration as drop animation
          useNativeDriver: true,
        }),
      ]).start(() => {
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 2000); // Wait before changing text
      });
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const screenWidth = Dimensions.get("window").width; // Get screen width
  const translateX = useRef(new Animated.Value(-screenWidth)).current; // Start from left

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: screenWidth, // Move to right
        duration: 6000, // Adjust speed (4 seconds)
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const [pickupDate, setPickupDate] = useState("20/04/25");
  const [pickupTime, setPickupTime] = useState("7:30 AM");
  const [returnDate, setReturnDate] = useState("22/04/25");
  const [returnTime, setReturnTime] = useState("6:00 PM");
  const [fare, setFare] = useState(2400); // Updated fare for round-trip
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          padding: 10,
          alignItems: "center",
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        {TripForm()}
      </View>

      <View
        style={{
          height: 45,
          overflow: "hidden",
          flexDirection: "row",
          // backgroundColor: "red",
        }}
      >
        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            transform: [{ translateX }],
          }}
        >
          {/* Zing Express Tag */}
          <View
            style={{
              backgroundColor: "#2C66E3",
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              shadowColor: "black",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5, // Android shadow
            }}
          >
            {/* Tag Icon */}
            <Ionicons
              name="flash"
              size={18}
              color="white"
              style={{ marginRight: 6 }}
            />

            {/* Tag Text */}
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 14,
                letterSpacing: 1,
              }}
            >
              Zing Express
            </Text>
          </View>

          {/* Car Animation */}
          <LottieView
            source={require("../assets/V3.json")}
            autoPlay
            loop
            style={{ width: 100, height: 50 }} // Adjust size
          />
        </Animated.View>
      </View>
      <View
        style={{
          marginTop: 30,
          // backgroundColor: "#F9FAFF",
          width: "100%",
          padding: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: "#DADEF2",
          borderWidth: 1,
          // height: "100%",
          // flex: 1,
          marginBottom: 150,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="assistant-navigation"
            size={16}
            color="#2d78ff"
            style={{
              borderWidth: 1,
              borderRadius: 50,
              padding: 5,
              borderColor: "silver",
              backgroundColor: "#fff",
              shadowColor: "#2d78ff",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.1, // Reduced opacity for a lighter shadow
              shadowRadius: 6, // Increased radius for a softer effect
              elevation: 2, // Lowered for a subtle shadow on Android
            }}
          />
          <Text
            style={{
              // textAlign: "center",
              // marginTop: 10,
              fontSize: 15,
              paddingHorizontal: 10,
              // padding: 10,

              fontFamily: "Poppins_Medium",
              color: "#505672",
            }}
          >
            Pick Your Perfect Date & Time
          </Text>
        </View>
        <DateRangePicker />

        <View
          style={{
            flexDirection: "row",
            padding: 10,
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="directions-car"
            size={16}
            color="#2d78ff"
            style={{
              borderWidth: 1,
              borderRadius: 50,
              padding: 5,
              borderColor: "silver",
              backgroundColor: "#fff",
              shadowColor: "#2d78ff",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.1, // Reduced opacity for a lighter shadow
              shadowRadius: 6, // Increased radius for a softer effect
              elevation: 2, // Lowered for a subtle shadow on Android
            }}
          />
          <Text
            style={{
              // textAlign: "center",
              // marginTop: 10,
              fontSize: 15,
              paddingHorizontal: 10,
              // padding: 10,

              fontFamily: "Poppins_Medium",
              color: "#505672",
            }}
          >
            Select Category
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            // padding: 5,
            backgroundColor: "#fff", // Light background for better contrast
            borderRadius: 10,
          }}
        >
          {/* Sedan Option */}
          <TouchableOpacity
            style={{
              width: "100%",
              // padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: selectedVehicle === "Sedan" ? "#2d78ff" : "silver",
              backgroundColor: selectedVehicle === "Sedan" ? "#eaf3ff" : "#fff",
              alignItems: "center",
              justifyContent: "center",
              // elevation: 3, // Soft shadow
            }}
            onPress={() => setSelectedVehicle("Sedan")}
          >
            <View style={{ width: "100%", height: 60, flexDirection: "row" }}>
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                {" "}
                <LottieView
                  source={require("../assets/V3.json")}
                  autoPlay
                  loop
                  style={{
                    // alignContent: "center",
                    width: "100%",
                    height: 50,
                    // alignSelf: "center",
                    paddingLeft: 10,
                  }}
                />
              </View>
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontFamily: "Poppins_Medium",
                    color: "#2C66E3",
                  }}
                >
                  Zing Classic
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontFamily: "Poppins_Regular",
                    }}
                  >
                    Sedan
                  </Text>{" "}
                  <MaterialIcons
                    name="person"
                    size={16}
                    color="#555"
                    style={{ fontFamily: "Poppins_Regular", marginBottom: 4 }}
                  />
                  <Text style={{ fontFamily: "Poppins_Regular" }}> 4</Text>
                </View>
              </View>
              <View
                style={{
                  width: "30%",
                  // alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "green",
                    fontSize: 16,
                    fontFamily: "Poppins_Medium",
                  }}
                >
                  ₹800
                </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "gray",
                    fontSize: 13,
                    fontFamily: "Poppins_Regular",
                  }}
                >
                  ₹1000
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "100%",
              // padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: selectedVehicle === "SUV" ? "#2d78ff" : "silver",
              backgroundColor: selectedVehicle === "SUV" ? "#eaf3ff" : "#fff",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              // elevation: 3, // Soft shadow
            }}
            onPress={() => setSelectedVehicle("SUV")}
          >
            <View style={{ width: "100%", height: 60, flexDirection: "row" }}>
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                {" "}
                <LottieView
                  source={require("../assets/SUV.json")}
                  autoPlay
                  loop
                  style={{
                    // alignContent: "center",
                    width: "100%",
                    height: 70,
                    // alignSelf: "center",
                    paddingLeft: 10,
                  }}
                />
              </View>
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontFamily: "Poppins_Medium",
                    color: "#2C66E3",
                  }}
                >
                  Zing premium
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontFamily: "Poppins_Regular",
                    }}
                  >
                    SUV
                  </Text>{" "}
                  <MaterialIcons
                    name="person"
                    size={16}
                    color="#555"
                    style={{ fontFamily: "Poppins_Regular", marginBottom: 4 }}
                  />
                  <Text style={{ fontFamily: "Poppins_Regular" }}> 6</Text>
                </View>
              </View>
              <View
                style={{
                  width: "30%",
                  // alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "green",
                    fontSize: 16,
                    fontFamily: "Poppins_Medium",
                  }}
                >
                  ₹800
                </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "gray",
                    fontSize: 13,
                    fontFamily: "Poppins_Regular",
                  }}
                >
                  ₹1000
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* SUV Option */}
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {/* Button to Open Modal */}
          <TouchableOpacity
            style={{
              backgroundColor: "#2d78ff",
              paddingVertical: 12,
              borderRadius: 10,
              alignItems: "center",
              marginTop: 20,
              width: "100%",
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontFamily: "Poppins_Medium",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>

          {/* Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Poppins_Medium",
                    color: "#007AFF",
                    marginBottom: 15,
                  }}
                >
                  Booking Details (Round Trip)
                </Text>

                {/* Ticket Container */}
                <View
                  style={{
                    backgroundColor: "#2d78ff",
                    borderRadius: 10,
                    padding: 15,
                    width: "100%",
                    position: "relative",
                  }}
                >
                  {/* Pickup Location */}
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={20}
                      color="white"
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ color: "#fff", fontSize: 12 }}>
                        Pickup
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          fontFamily: "Poppins_Regular",
                        }}
                      >
                        {pickup}
                      </Text>
                    </View>
                  </View>

                  {/* Vertical Line */}
                  <View
                    style={{
                      height: 20,
                      borderLeftWidth: 1.5,
                      borderLeftColor: "#fff",
                      marginLeft: 10,
                      marginVertical: 5,
                    }}
                  />

                  {/* Drop Locations */}
                  {dropLocations?.map((drop, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <FontAwesome5
                        name="map-marker-alt"
                        size={20}
                        color="white"
                      />
                      <View style={{ marginLeft: 10 }}>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 12,
                          }}
                        >
                          Drop {index + 1}
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 14,
                            fontFamily: "Poppins_Regular",
                          }}
                        >
                          {drop}
                        </Text>
                      </View>
                    </View>
                  ))}

                  {/* Pickup & Return Date */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 15,
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 12,
                        }}
                      >
                        Pickup Date & Time
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 16,
                          fontFamily: "Poppins_Medium",
                        }}
                      >
                        {pickupDate} - {pickupTime}
                      </Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                      <Text style={{ color: "#fff", fontSize: 12 }}>
                        Return Date
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 16,
                          fontFamily: "Poppins_Medium",
                        }}
                      >
                        {returnDate}
                      </Text>
                    </View>
                  </View>

                  {/* Dotted Line with Cutouts */}
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: "#fff",
                      borderStyle: "dashed",
                      marginVertical: 10,
                      position: "relative",
                    }}
                  >
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "white",
                        borderRadius: 10,
                        position: "absolute",
                        left: -23,
                        top: -10,
                      }}
                    />
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "white",
                        borderRadius: 10,
                        position: "absolute",
                        right: -23,
                        top: -10,
                      }}
                    />
                  </View>

                  {/* Fare Details */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 14 }}>
                      Zing Classic (Sedan for 4)
                    </Text>

                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 19,
                        fontFamily: "Poppins_Medium",
                      }}
                    >
                      ₹ {fare}
                    </Text>
                  </View>
                </View>

                {/* Buttons */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: 15,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#E9F4FF",
                      paddingVertical: 12,
                      borderRadius: 10,
                      alignItems: "center",
                      flex: 1,
                      marginRight: 10,
                    }}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text
                      style={{
                        color: "#007AFF",
                        fontSize: 16,
                        fontFamily: "Poppins_Medium",
                      }}
                    >
                      Edit Details
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor: "#2d78ff",
                      paddingVertical: 12,
                      borderRadius: 10,
                      alignItems: "center",
                      flex: 1,
                    }}
                    onPress={() => {
                      setModalVisible(false);
                      navigation.navigate("bookingConfirmationScreen", {
                        pickup,
                        dropLocations,
                        pickupDate,
                        pickupTime,
                        returnDate,
                        returnTime,
                        fare,
                      });
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontFamily: "Poppins_Medium",
                      }}
                    >
                      Confirm Booking
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};
const OutstationScreen = () => {
  const [isOneWaySelected, setIsOneWaySelected] = useState(true);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 3,
      }}
      contentContainerStyle={{
        flexGrow: 1, // Ensures content scrolls properly
      }}
    >
      {/* Tab Selector */}
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",
          shadowColor: "#2d78ff",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 5, // Shadow for Android
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#e7ecf1",
            width: "60%",
            alignSelf: "center",
            overflow: "hidden",
            backgroundColor: "#F5F7FA",
          }}
        >
          {/* One Way Tab */}
          <TouchableOpacity
            onPress={() => setIsOneWaySelected(true)}
            style={{
              flex: 1,
              paddingVertical: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isOneWaySelected ? "#2d78ff" : "transparent",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: isOneWaySelected ? "#FFF" : "#9FA9BC",
                fontFamily: "Poppins_Regular",
              }}
            >
              One Way
            </Text>
          </TouchableOpacity>

          {/* Round Trip Tab */}
          <TouchableOpacity
            onPress={() => setIsOneWaySelected(false)}
            style={{
              flex: 1,
              paddingVertical: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: !isOneWaySelected ? "#2d78ff" : "transparent",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Poppins_Regular",
                color: !isOneWaySelected ? "#FFF" : "#9FA9BC",
              }}
            >
              Round Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Conditionally Render Components */}
      {isOneWaySelected ? <OneWayScreen /> : <RoundTripScreen />}
    </ScrollView>
  );
};

export default OutstationScreen;
