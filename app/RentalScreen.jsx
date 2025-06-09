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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Animated } from "react-native";
const RentalScreen = () => {
  // const route = useRoute();
  // console.log("Route:", route);
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Rides");
  const [selectedSubTab, setSelectedSubTab] = useState(true);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const TripForm = () => {
    const [pickup, setPickup] = useState("");
    const [dropLocations, setDropLocations] = useState([""]); // Stores multiple drop locations

    return (
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
        {/* Drop Locations */}
        {/* {dropLocations.map((drop, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "90%",
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
          ))} */}

        {/* (+) Add Drop Location Button (Disabled when 4 locations exist) */}
        {/* {dropLocations.length < 4 && (
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
          )} */}
      </View>
    );
  };
  const splitIntoRows = (data) => {
    let row1 = [];
    let row2 = [];
    data.forEach((item, index) => {
      if (index % 2 === 0) {
        row1.push(item);
      } else {
        row2.push(item);
      }
    });
    return [row1, row2];
  };
  const [selectedId, setSelectedId] = useState("3");
  const [selectedVehicle, setSelectedVehicle] = useState("Sedan");

  const pricingData = [
    { id: "1", hours: "1 hr", distance: "10 km", price: "₹389" },
    { id: "2", hours: "2 hrs", distance: "20 km", price: "₹599" },
    { id: "3", hours: "3 hrs", distance: "30 km", price: "₹799" },
    { id: "4", hours: "4 hrs", distance: "40 km", price: "₹999" },
    { id: "5", hours: "5 hrs", distance: "50 km", price: "₹1249" },
    { id: "6", hours: "6 hrs", distance: "60 km", price: "₹1499" },
    { id: "7", hours: "7 hrs", distance: "70 km", price: "₹1699" },
    { id: "8", hours: "8 hrs", distance: "80 km", price: "₹1999" },
    { id: "9", hours: "10 hrs", distance: "100 km", price: "₹2499" },
    { id: "10", hours: "12 hrs", distance: "120 km", price: "₹2999" },
  ];
  const pricingDatas = [
    { id: "6", hours: "6 hrs", distance: "60 km", price: "₹1499" },
    { id: "7", hours: "7 hrs", distance: "70 km", price: "₹1699" },
    { id: "8", hours: "8 hrs", distance: "80 km", price: "₹1999" },
    { id: "9", hours: "10 hrs", distance: "100 km", price: "₹2499" },
    { id: "10", hours: "12 hrs", distance: "120 km", price: "₹2999" },
  ];

  const [row1, row2] = splitIntoRows(pricingData);
  const itemWidth = Dimensions.get("window").width * 0.2; // Adjust width

  const renderItem = ({ item }) => {
    const isSelected = selectedId === item.id;
    return (
      <TouchableOpacity
        style={{
          // width: itemWidth,
          backgroundColor: isSelected ? "#2d78ff" : "white",

          borderRadius: 8,
          padding: 18,
          margin: 5,
          // elevation: 2,
          borderWidth: 1,
          borderColor: isSelected ? "#2d78ff" : "#ddd",
          alignItems: "center",
          height: 60,
          justifyContent: "center",
          paddingHorizontal: 25,
          marginTop: 20,
        }}
        onPress={() => setSelectedId(item.id)}
      >
        {/* <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: "#2d78ff",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>{item.id}</Text>
          </View> */}
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            fontFamily: "Poppins_Regular",
            color: isSelected ? "#fff" : "#333",
          }}
        >
          {item.hours}
        </Text>
        <Text
          style={{
            fontSize: 14,
            // fontWeight: "bold",

            fontFamily: "Poppins_Regular",
            color: isSelected ? "#fff" : "#333",
          }}
        >
          {item.distance}
        </Text>
      </TouchableOpacity>
    );
  };

  // const [date, setDate] = useState(new Date());
  // const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedHour, setSelectedHour] = useState(date.getHours());
  // const [selectedMinute, setSelectedMinute] = useState(date.getMinutes());

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      setShowDatePicker(false);
    } else {
      setShowDatePicker(false);
    }
  };

  // console.log("Date-----", date);
  // const generateTimeSlots = () => {
  //   const timeSlots = [];
  //   for (let hour = 0; hour < 24; hour++) {
  //     for (let minute = 0; minute < 60; minute += 15) {
  //       const amPm = hour < 12 ? "AM" : "PM";
  //       const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  //       const formattedMinute = minute.toString().padStart(2, "0");
  //       const timeLabel = `${formattedHour}:${formattedMinute} ${amPm}`;
  //       timeSlots.push({
  //         label: timeLabel,
  //         value: `${formattedHour}:${formattedMinute} ${amPm}`,
  //       });
  //     }
  //   }
  //   return timeSlots;
  // };
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
        // flex: 1,
        backgroundColor: "#fff",
      }}
      contentContainerStyle={
        {
          // flex: 1, // Ensures the container takes full height
          // justifyContent: "center",
          // alignItems: "center",
        }
      }
    >
      <View
        style={{
          padding: 10,
          alignItems: "center",
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        {/* One Way / Round Trip Toggle */}

        {/* Booking Input Fields */}

        {TripForm()}
      </View>
      {/* <LottieView
          source={require("../assets/A2.json")}
          autoPlay
          loop
          style={{
            width: "100%",
            height: 150,
            alignSelf: "center",
          }}
        /> */}
      <View style={{ height: 37, overflow: "hidden", flexDirection: "row" }}>
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
            Select a package
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: "red",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 0.8, // Only top border
            borderBottomWidth: 0.8, // Only bottom border
            width: "100%",
            borderColor: "#DADEF2",
          }}
        >
          <FlatList
            data={pricingData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            // contentContainerStyle={{ paddingVertical: 10 }}
          />
        </View>
        {/* <View
            style={{
              padding: 20,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
        
            <TouchableOpacity
              style={{
                backgroundColor: "#2d78ff",
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                Pick Date
              </Text>
            </TouchableOpacity>
  
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={onChange}
              />
            )}
  
          
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Picker
                selectedValue={selectedHour}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue) => setSelectedHour(itemValue)}
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
  
           
          </View> */}
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

          {/* Reschedule Button */}
          {/* <TouchableOpacity
              style={{
                backgroundColor: "#2d78ff",
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 10,
                marginTop: 20,
                width: "80%",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                Reschedule
              </Text>
            </TouchableOpacity> */}
        </View>
        {/* <DateTimePickerExample /> */}
        {/* <FlatList
            data={pricingDatas}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            // contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
          /> */}
        {/* <Button title="Open" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          /> */}
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
                  {/* Top Section */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <Text style={{ color: "#fff", fontSize: 14 }}>
                        Selected Package
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 18,
                          fontFamily: "Poppins_Medium",
                        }}
                      >
                        8 hrs / 80 km
                      </Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                      <Text style={{ color: "#fff", fontSize: 12 }}>
                        Pickup Date & Time
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          fontFamily: "Poppins_Regular",
                        }}
                      >
                        20/04/25 - 7:30 AM
                      </Text>
                    </View>
                  </View>

                  {/* Pickup Address Section */}
                  <View
                    style={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      padding: 10,
                      borderRadius: 5,
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 12 }}>
                      Pickup Address:
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 14,
                        fontFamily: "Poppins_Regular",
                        marginTop: 2,
                      }}
                    >
                      Ambience Mall{" "}
                    </Text>
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

                  {/* Bottom Section */}
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
                        fontSize: 16,
                        fontFamily: "Poppins_Medium",
                      }}
                    >
                      ₹ 800
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
                        date: "13 July",
                        time: "8:30 AM",
                        pickup: "Ambience Mall",
                        drop: "Gate 1 Huda City",
                        fare: 149,
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

export default RentalScreen;
