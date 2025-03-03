import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
      {/* <MaterialIcons name={'shield'} size={100} color="#0056D2"  style={{marginTop:50}}/> */}
      {/* <Entypo name="user" size={80} color="#0056D2" style={{marginTop:50 ,padding:50,borderRadius:20,border:2}}/> */}
      <View
        style={{
          width: 100,  // Same width & height for a perfect circle
          height: 100,
          borderRadius: 50, // Half of width/height for a circle
          borderWidth: 2, // Thickness of the border
          borderColor: "#0056D2", // Border color
          justifyContent: "center",
          alignItems: "center",
          marginTop:50
        }}
      >
        <Entypo name="user" size={60} color="#0056D2" />
      </View>
        <Text style={styles.userName}>Abhishek</Text>
        <TouchableOpacity>
          <Text style={styles.viewProfile}>View Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        {[
          { label: "My Rides", icon: "directions-car" },
          { label: "Payments", icon: "credit-card" },
          { label: "Pricing", icon: "price-change" },
          { label: "Promos", icon: "local-offer" },
          { label: "Safety Hub", icon: "shield", badge: "New" },
          { label: "Help", icon: "help-outline" },
          { label: "Policy", icon: "policy" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <MaterialIcons name={item.icon} size={22} color="#0056D2" />
            <Text style={styles.menuText}>{item.label}</Text>
            {item.badge && <Text style={styles.badge}>{item.badge}</Text>}
          </TouchableOpacity>
        ))}
      </View>

      {/* App Version */}
      <Text style={styles.versionText}>version 7.1.4</Text>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    marginTop:0,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  viewProfile: {
    color: "#0056D2",
    fontSize: 14,
    marginTop: 5,
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
  badge: {
    backgroundColor: "#0056D2",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    fontSize: 12,
    marginLeft: 10,
  },
  versionText: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
    marginVertical: 20,
  },
});
