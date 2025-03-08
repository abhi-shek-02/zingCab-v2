import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const BookingScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Rides");

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
            Rides
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
            Rentals
          </Text>
          {selectedTab === "Rentals" && (
            <View style={styles.activeTabUnderline} />
          )}
        </TouchableOpacity>
      </View>

      {/* Location Inputs */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons name="location" size={20} color="green" />
          <TextInput style={styles.input} placeholder="Enter pickup location" />
          <Ionicons name="information-circle-outline" size={20} color="gray" />
        </View>
        <View style={styles.inputWrapper}>
          <Ionicons name="location" size={20} color="red" />
          <TextInput style={styles.input} placeholder="Enter drop location" />
          <Ionicons name="information-circle-outline" size={20} color="gray" />
        </View>
      </View>

      {/* Add Stops */}
      <Text style={styles.addStops}>Add all stops now</Text>

      {/* Quick Access Buttons */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.quickButton}>
          <Ionicons name="home" size={20} color="blue" />
          <Text style={styles.quickText}>Add Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickButton}>
          <Ionicons name="briefcase" size={20} color="blue" />
          <Text style={styles.quickText}>Add Work</Text>
        </TouchableOpacity>
      </View>

      {/* Saved Locations */}
      <ScrollView>
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
      </ScrollView>

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
  profile: { flexDirection: "row", alignItems: "center", marginLeft: 15,borderRadius:50,borderWidth:1,padding:10,borderColor:'#DADEF2',paddingHorizontal:20 },
  profileText: { color: "#505672", marginLeft: 5,fontWeight:'700',marginHorizontal:5 },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  tab: { alignItems: "center" },
  tabText: { fontSize: 16, color: "gray" },
  activeTabText: { color: "#0057FF", fontWeight: "bold" },
  activeTabUnderline: {
    width: 40,
    height: 3,
    backgroundColor: "#0057FF",
    marginTop: 2,
  },

  inputContainer: { paddingHorizontal: 15 },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
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
