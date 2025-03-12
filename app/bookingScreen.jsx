import React, { useState } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native";

const Tab = createMaterialTopTabNavigator();

const OutstationScreen = () => {
  // const route = useRoute();
  // console.log("Route:", route);
  const [selectedTab, setSelectedTab] = useState("Rides");
  const [selectedSubTab, setSelectedSubTab] = useState(true);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const TripForm = () => {
    const [pickup, setPickup] = useState("");
    const [dropLocations, setDropLocations] = useState([""]); // Stores multiple drop locations

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
        {/* Pickup Location */}
        {/* <TextInput
          style={{
            width: "90%",
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
        /> */}

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

        {/* Drop Locations */}
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
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
      }}
      contentContainerStyle={{
        flex: 1, // Ensures the container takes full height
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
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
            onPress={() => setSelectedSubTab(true)}
            style={{
              flex: 1,
              paddingVertical: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: selectedSubTab ? "#2d78ff" : "transparent",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                // fontWeight: "600",
                color: selectedSubTab ? "#FFF" : "#9FA9BC",
                fontFamily: "Poppins_Regular",
              }}
            >
              One Way
            </Text>
          </TouchableOpacity>

          {/* Round Trip Tab */}
          <TouchableOpacity
            onPress={() => setSelectedSubTab(false)}
            style={{
              flex: 1,
              paddingVertical: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: !selectedSubTab ? "#2d78ff" : "transparent",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                // fontWeight: "600",
                fontFamily: "Poppins_Regular",
                color: !selectedSubTab ? "#FFF" : "#9FA9BC",
              }}
            >
              Round Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingTop: 10,
          alignItems: "center",
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        {/* One Way / Round Trip Toggle */}

        {/* Booking Input Fields */}

        {TripForm()}
      </View>
      <LottieView
        source={require("../assets/A2.json")}
        autoPlay
        loop
        style={{
          width: "100%",
          height: 150,
          alignSelf: "center",
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#2d78ff",
          paddingVertical: 12,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 20,
          width: "100%",
          marginBottom: 100,
        }}
        // onPress={() => navigation.navigate("otpScreen")}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            // fontWeight: "bold",
            fontFamily: "Poppins_Medium",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>

      {/* <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 15,
          padding: 15,
          // fontWeight: "600",
          fontFamily: "Poppins_Medium",
          color: "#8292B6",
        }}
      >
        No ongoing rides at the momentx
      </Text> */}
    </ScrollView>
  );
};
const RentalScreen = () => {
  // const route = useRoute();
  // console.log("Route:", route);
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
  const [mode, setMode] = useState("date"); // Mode: "date" or "time"
  const [show, setShow] = useState(false);
  const [tempDate, setTempDate] = useState(null); // Store date before switching mode

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      if (mode === "date") {
        // Store date but keep time unchanged
        setDate(
          (prev) =>
            new Date(selectedDate.setHours(prev.getHours(), prev.getMinutes()))
        );
        setMode("time");
        setShow(true);
      } else {
        // Update only time while keeping the date unchanged
        setDate(
          (prev) =>
            new Date(
              prev.setHours(selectedDate.getHours(), selectedDate.getMinutes())
            )
        );
        setShow(false);
      }
    } else {
      setShow(false); // Close picker if user cancels
    }
  };

  

  console.log("Date-----", date);
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
      <LottieView
        source={require("../assets/A2.json")}
        autoPlay
        loop
        style={{
          width: "100%",
          height: 100,
          alignSelf: "center",
        }}
      />
      <View
        style={{
          marginTop: 40,
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
        <View style={{ padding: 20 }}>
          <Button
            title="Pick Date & Time"
            onPress={() => {
              setMode("date");
              setShow(true);
            }}
          />
          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onChange}
            />
          )}
          <Text style={{ marginTop: 20, fontSize: 16 }}>
            Selected: {date.toLocaleString()}
          </Text>
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
            flexDirection: "row",
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
              width: "48%",
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
            <View style={{ flexDirection: "row" }}>
              {/* <MaterialIcons
                name="directions-car"
                size={24}
                color="#2d78ff"
                style={{ paddingHorizontal: 10 }}
              /> */}
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_Medium",
                  // marginTop: 5,
                  // backgroundColor: "#eaf3ff",
                  width: "100%",
                  textAlign: "center",
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}
              >
                Sedan
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <MaterialIcons name="person" size={16} color="#555" />
              <Text style={{ marginLeft: 5, fontFamily: "Poppins_Regular" }}>
                4 People
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                // fontWeight: "bold",
                color: "#28a745",
                marginTop: 5,
                fontFamily: "Poppins_Medium",
              }}
            >
              ₹999
            </Text>
          </TouchableOpacity>

          {/* SUV Option */}
          <TouchableOpacity
            style={{
              width: "48%",
              // padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: selectedVehicle === "SUV" ? "#2d78ff" : "silver",
              backgroundColor: selectedVehicle === "SUV" ? "#eaf3ff" : "#fff",
              alignItems: "center",
              justifyContent: "center",
              // elevation: 3, // Soft shadow
            }}
            onPress={() => setSelectedVehicle("SUV")}
          >
            {/* <MaterialIcons name="airport-shuttle" size={24} color="#2d78ff" /> */}
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins_Medium",
                // marginTop: 5,
                // backgroundColor: "#eaf3ff",
                width: "100%",
                textAlign: "center",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
            >
              SUV
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <MaterialIcons name="person" size={16} color="#555" />
              <Text style={{ marginLeft: 5, fontFamily: "Poppins_Regular" }}>
                6 People
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                // fontWeight: "bold",
                fontFamily: "Poppins_Medium",
                color: "#28a745",
                marginTop: 5,
              }}
            >
              ₹1299
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#2d78ff",
            paddingVertical: 12,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 20,
            width: "100%",
          }}
          // onPress={() => navigation.navigate("otpScreen")}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              // fontWeight: "bold",
              fontFamily: "Poppins_Medium",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const AirportRideScreen = () => {
  // const route = useRoute();
  // console.log("Route:", route);
  const [selectedTab, setSelectedTab] = useState("Rides");
  const [selectedSubTab, setSelectedSubTab] = useState(true);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const TripForm = () => {
    const [pickup, setPickup] = useState("");
    const [dropLocations, setDropLocations] = useState([""]); // Stores multiple drop locations

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
        {/* Pickup Location */}
        {/* <TextInput
          style={{
            width: "90%",
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
        /> */}

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

        {/* Drop Locations */}
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
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
      }}
      contentContainerStyle={{
        flex: 1, // Ensures the container takes full height
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <View
        style={{
          paddingTop: 10,
          alignItems: "center",
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        {/* One Way / Round Trip Toggle */}

        {/* Booking Input Fields */}

        {TripForm()}
      </View>
      <LottieView
        source={require("../assets/A2.json")}
        autoPlay
        loop
        style={{
          width: "100%",
          height: 150,
          alignSelf: "center",
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#2d78ff",
          paddingVertical: 12,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 20,
          width: "100%",
          marginBottom: 100,
        }}
        // onPress={() => navigation.navigate("otpScreen")}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            // fontWeight: "bold",
            fontFamily: "Poppins_Medium",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>

      {/* <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 15,
          padding: 15,
          // fontWeight: "600",
          fontFamily: "Poppins_Medium",
          color: "#8292B6",
        }}
      >
        No ongoing rides at the momentx
      </Text> */}
    </ScrollView>
  );
};
const BookingScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontFamily: "Poppins_Medium" },
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarIndicatorStyle: {
          backgroundColor: mainColor,
          height: 3,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        },
        tabBarActiveTintColor: mainColor,
        tabBarInactiveTintColor: "#666",
      }}
    >
      <Tab.Screen name="Rental" component={RentalScreen} />
      <Tab.Screen name="Outstation" component={OutstationScreen} />

      <Tab.Screen name="Airport Rides" component={AirportRideScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: { fontSize: 20, fontWeight: "bold" },
  truecallerButton: {
    backgroundColor: "#E9F4FF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    width: "80%",
  },
  truecallerText: {
    color: "#2d78ff",
    fontSize: 16,
    // fontWeight: "bold",
    fontFamily: "Poppins_Medium",
  },
});

export default BookingScreen;
