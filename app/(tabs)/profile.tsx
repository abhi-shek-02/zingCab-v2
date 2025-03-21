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
import { useNavigation } from "expo-router";
import { useRouter } from "expo-router";
const ProfileScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        {/* <MaterialIcons name={'shield'} size={100} color="#0056D2"  style={{marginTop:50}}/> */}
        {/* <Entypo name="user" size={80} color="#0056D2" style={{marginTop:50 ,padding:50,borderRadius:20,border:2}}/> */}
        <View
          style={{
            width: 100, // Same width & height for a perfect circle
            height: 100,
            borderRadius: 50, // Half of width/height for a circle
            borderWidth: 2, // Thickness of the border
            borderColor: "#2d78ff", // Border color
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Entypo name="user" size={60} color="#2d78ff" />
        </View>
        <Text style={styles.userName}>Abhishek</Text>
        <TouchableOpacity  onPress={() => {
              try {
                navigation.navigate('userProfile');
              } catch (e) {
                console.log("E", e);
              }
            }}>
          <Text style={styles.viewProfile}>View Profile</Text>
        </TouchableOpacity>
      </View>
{/* editUserProfile */}
      <View style={styles.menuContainer}>
        {[
          { label: "My Rides", icon: "directions-car",screenName:'/(tabs)/explore' },
          { label: "Payments", icon: "credit-card" ,screenName:'policyScreen'},
          { label: "Pricing", icon: "price-change",screenName:'pricingScreen' },
          // { label: "Promos", icon: "local-offer",screenName:'policyScreen' },
          { label: "Safety Hub", icon: "shield", badge: "New",screenName:'safetyHubScreen' },
          { label: "Help", icon: "help-outline",screenName:'helpScreen' },
          { label: "Policy", icon: "policy",screenName:'policyScreen' },
          { label: "Account Settings", icon: "local-offer",screenName:'accountSettingScreen' },
          { label: "Feedback", icon: "feedback",screenName:'feedBack' },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              try {
                // navigation.navigate(item?.screenName);
                router.push(item?.screenName)
              } catch (e) {
                console.log("E", e);
              }
            }}
          >
            <MaterialIcons name={item.icon} size={22} color="#2d78ff" />
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
    marginTop: 0,
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
    // fontWeight: "bold",
    marginTop: 10,
    fontFamily:'Poppins_Medium',
  },
  viewProfile: {
    color: "#2d78ff",
    fontSize: 14,
    marginTop: 5,
    fontFamily:'Poppins_Regular'
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
    fontSize: 15,
    marginLeft: 15,
    flex: 1,
    fontFamily:'Poppins_Regular'
  },
  badge: {
    backgroundColor: "#2d78ff",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    fontSize: 12,
    marginLeft: 10,
    fontFamily:'Poppins_Regular',
    justifyContent:'center',
    alignItems:'center'
  },
  versionText: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
    marginVertical: 20,
  },
});
