import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const UserProfile = () => {
  const [user, setUser] = useState({
    name: "James Martin",
    phoneNumber: "1234567891",
    emailID: "james012@gmail.com",
    gender: "Male",
    dob: "1990-05-15",
  });
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header with Profile Info */}
      <View style={styles.header}>
        {/* <TouchableOpacity style={styles.backButton}>
          <Text style={styles.icon}>←</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.icon}>⚙</Text>
        </TouchableOpacity> */}

        {/* <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
          style={styles.profileImage}
        /> */}
        <View
          style={{
            width: 100, // Same width & height for a perfect circle
            height: 100,
            borderRadius: 50, // Half of width/height for a circle
            borderWidth: 2, // Thickness of the border
            borderColor: "#FFF", // Border color
            justifyContent: "center",
            alignItems: "center",
            // marginTop: 50,
          }}
        >
          <Entypo name="user" size={60} color="#FFF" />
        </View>
        <Text style={styles.profileName}>James Martin</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1000</Text>
            <Text style={styles.statLabel}>Rides taken</Text>
          </View>
          {/* <View style={styles.statBox}>
            <Text style={styles.statNumber}>1200</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View> */}
        </View>
      </View>

      {/* User Info Section */}
      <View style={{ flex: 1, padding: 20, backgroundColor: "#FFF" }}>
        <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 20 }}>
          Profile Details
        </Text>

        <View
          style={{ backgroundColor: "#fff", padding: 15, borderRadius: 10 }}
        >
          {/* Name */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          >
            <Text style={{ fontSize: 18, marginRight: 10 }}>📛</Text>
            <Text style={{ flex: 1, fontSize: 16 }}>{user.name}</Text>
          </View>

          {/* Phone Number (Frozen) */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          >
            <Text style={{ fontSize: 18, marginRight: 10 }}>📱</Text>
            <Text style={{ flex: 1, fontSize: 16, color: "gray" }}>
              {user.phoneNumber}
            </Text>
          </View>

          {/* Email */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          >
            <Text style={{ fontSize: 18, marginRight: 10 }}>📧</Text>
            <Text style={{ flex: 1, fontSize: 16 }}>{user.emailID}</Text>
          </View>

          {/* Gender */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          >
            <Text style={{ fontSize: 18, marginRight: 10 }}>⚧️</Text>
            <Text style={{ flex: 1, fontSize: 16 }}>{user.gender}</Text>
          </View>

          {/* DOB */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 18, marginRight: 10 }}>🎂</Text>
            <Text style={{ flex: 1, fontSize: 16 }}>{user.dob}</Text>
          </View>
        </View>

        {/* Edit Button */}
        <TouchableOpacity
          style={styles.truecallerButton}
          onPress={() => navigation.navigate("editUserProfile")}
        >
          <Text style={styles.truecallerText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#2d78ff", // Gradient effect using a solid color
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 40,
  },
  settingsButton: {
    position: "absolute",
    right: 20,
    top: 40,
  },
  icon: {
    fontSize: 22,
    color: "#fff",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  profileTitle: {
    fontSize: 16,
    color: "#DDE6F1",
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  statBox: {
    alignItems: "center",
    width: 100,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    fontSize: 14,
    color: "#DDE6F1",
  },
  infoSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    // elevation: 3, // Shadow effect
  },
  infoText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
  },

  truecallerButton: {
    backgroundColor: "#E9F4FF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  truecallerText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserProfile;
