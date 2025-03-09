import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import DatePicker from "react-native-date-picker";
const BookingScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Rides");
  const [selectedSubTab, setSelectedSubTab] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <View style={styles.profile}>
          <FontAwesome name="user-circle" size={20} color="##00AFF0" />
          <Text style={styles.profileText}>Myself</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="#0045ff" />
        </View>
      </View> */}

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setSelectedTab("Rides")}
          style={styles.tab}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Rides" && styles.activeTabText,
            ]}
          >
            Rentals
          </Text>
          {selectedTab === "Rides" && (
            <View style={styles.activeTabUnderline} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab("Rentals")}
          style={styles.tab}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Rentals" && styles.activeTabText,
            ]}
          >
            Outstation
          </Text>
          {selectedTab === "Rentals" && (
            <View style={styles.activeTabUnderline} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab("Airport  Rides")}
          style={styles.tab}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Airport  Rides" && styles.activeTabText,
            ]}
          >
            Airport
          </Text>
          {selectedTab === "Airport  Rides" && (
            <View style={styles.activeTabUnderline} />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",
          shadowColor: "#2C66E3",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 5, // Shadow for Android
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: "54%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderRadius: 30,
            borderWidth: 1,
            borderColor: "#e7ecf1",
          }}
        >
          {/* One Way Tab */}
          <TouchableOpacity
            onPress={() => setSelectedSubTab(true)}
            style={{
              backgroundColor: selectedSubTab ? "#2C66E3" : "#FFF",
              borderRadius: 30,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                color: selectedSubTab ? "#FFF" : "#9FA9BC",
                fontSize: 15,
                fontWeight: "600",
                padding: 10,
              }}
            >
              One way
            </Text>
          </TouchableOpacity>

          {/* Round Trip Tab */}
          <TouchableOpacity
            onPress={() => setSelectedSubTab(false)}
            style={{
              backgroundColor: !selectedSubTab ? "#2C66E3" : "#FFF",
              borderRadius: 30,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                color: !selectedSubTab ? "#FFF" : "#9FA9BC",
                fontSize: 15,
                fontWeight: "600",
                padding: 10,
              }}
            >
              Round trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Location Inputs */}
      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="location"
            size={20}
            color="#2C66E3"
            style={{ width: "8%", alignSelf: "center" }}
          />
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter pickup location"
            />
            {/* <Ionicons
              name="information-circle-outline"
              size={20}
              color="gray"
            /> */}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="location"
            size={20}
            color="#14BA77"
            style={{ width: "8%", alignSelf: "center",justifyContent:'center',alignItems:'center' }}
          />
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Enter drop location" />
            {/* <Ionicons
              name="information-circle-outline"
              size={20}
              color="gray"
            /> */}
          </View>
        </View>
        {/* <Ionicons name="location" size={20} color="red" />
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Enter drop location" />
          <Ionicons name="information-circle-outline" size={20} color="gray" />
        </View> */}
      </View>

      {/* Add Stops */}
      <Text style={styles.addStops}>Add all stops now</Text>

      {/* Quick Access Buttons */}
      {/* <View style={styles.quickActions}>
        <TouchableOpacity style={styles.quickButton}>
          <Ionicons name="home" size={20} color="blue" />
          <Text style={styles.quickText}>Add Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickButton}>
          <Ionicons name="briefcase" size={20} color="blue" />
          <Text style={styles.quickText}>Add Work</Text>
        </TouchableOpacity>
      </View> */}

      {/* Saved Locations */}
      {/* <ScrollView>
        <TouchableOpacity style={styles.savedItem}>
          <Ionicons name="heart-outline" size={20} color="gray" />
          <Text style={styles.savedText}>Favourite Places</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.savedItem}>
          <Ionicons name="airplane-outline" size={20} color="gray" />
          <Text style={styles.savedText}>
            Indira Gandhi International Airport
          </Text>
        </TouchableOpacity>
      </ScrollView> */}

      {/* Footer Button */}
      {/* <TouchableOpacity style={styles.footerButton}>
        <Ionicons name="information-circle" size={20} color="white" />
        <Text style={styles.footerText}>Set Location on Map</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    // backgroundColor: "#0057FF",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    borderRadius: 50,
    borderWidth: 1,
    padding: 10,
    borderColor: "#DADEF2",
    paddingHorizontal: 20,
  },
  profileText: {
    color: "#505672",
    marginLeft: 5,
    fontWeight: "700",
    marginHorizontal: 5,
  },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    alignContent: "center",
    // flex:1
  },
  tab: { alignItems: "center", alignSelf: "center", justifyContent: "center" },
  tabText: { fontSize: 16, color: "gray" },
  activeTabText: { color: "#2C66E3", fontWeight: "bold" },
  activeTabUnderline: {
    width: "100%",
    height: 3,
    backgroundColor: "#2C66E3",
    marginTop: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  inputContainer: {
    paddingHorizontal: 15,
    marginTop: 15,
    borderWidth: 2,
    marginHorizontal: 12,
    borderRadius: 20,
    borderColor: "#e7ecf1",
  },
  inputWrapper: {
    borderColor: "#e7ecf1",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#F0F0F0",
    borderWidth: 2,
    // padding: 5,
    borderRadius: 8,
    marginVertical: 5,
    width: "95%",
    borderRadius: 10,
  },
  input: { flex: 1, marginLeft: 10 },

  addStops: { textAlign: "center", marginVertical: 10, color: "gray" },

  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  quickButton: { alignItems: "center" },
  quickText: { color: "blue", marginTop: 5 },

  savedItem: { flexDirection: "row", alignItems: "center", padding: 15 },
  savedText: { marginLeft: 10, fontSize: 16 },

  footerButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0057FF",
    padding: 15,
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerText: { color: "white", marginLeft: 5, fontSize: 16 },
});

export default BookingScreen;
