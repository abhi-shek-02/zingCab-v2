import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Card, Divider } from "react-native-paper";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { mainColor } from "@/constants/Colors";

const Tab = createMaterialTopTabNavigator();

const OngoingScreen = () => (
  <ScrollView
    style={{
      flex: 1,
      backgroundColor: "#fff",
      padding: 10,
    }}
    contentContainerStyle={{
      flex: 1, // Ensures the container takes full height
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <LottieView
      source={require("../../assets/A2.json")}
      autoPlay
      loop
      style={{
        width: "100%",
        height: 200,
        alignSelf: "center",
      }}
    />

    <Text
      style={{
        textAlign: "center",
        marginTop: 10,
        fontSize: 15,
        padding: 15,
        // fontWeight: "600",
        fontFamily:'Poppins_Medium',
        color: "#8292B6",
      }}
    >
      No ongoing rides at the moment
    </Text>
  </ScrollView>
);

const ScheduledScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
      }}
      contentContainerStyle={{
        flex: 1, // Ensures the container takes full height
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        source={require("../../assets/A3.json")}
        autoPlay
        loop
        style={{
          width: "100%",
          height: 200,
          alignSelf: "center",
        }}
      />

      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 15,
          paddingTop: 15,
          fontWeight: "600",
          paddingBottom: 10,
          fontFamily:'Poppins_Medium',
          color: "#8292B6",
        }}
      >
        No Scheduled rides at the moment
      </Text>
      <Text style={{ fontFamily:'Poppins_Regular',color:'#202329'}}>Ready to take your next ride?</Text>
      <TouchableOpacity
        style={styles.truecallerButton}
        onPress={() => navigation.navigate("bookingScreen")}
      >
        <Text style={styles.truecallerText}>Ready, let's schedule!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const PastScreen = () => (
  <ScrollView
    style={{
      flex: 1,
      backgroundColor: "#fff",
      padding: 10,
    }}
    contentContainerStyle={{
      flex: 1, // Ensures the container takes full height
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <LottieView
      source={require("../../assets/Location.json")}
      autoPlay
      loop
      style={{
        width: "100%",
        height: 200,
        alignSelf: "center",
      }}
    />

    <Text
      style={{
        textAlign: "center",
        marginTop: 10,
        fontSize: 15,
        padding: 15,
        fontWeight: "600",
        fontFamily:'Poppins_Medium',
        color: "#8292B6",
      }}
    >
      You haven't taken a ride with us yet
    </Text>
  </ScrollView>
);

export default function TabTwoScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16 },
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
      <Tab.Screen name="Ongoing" component={OngoingScreen} />
      <Tab.Screen name="Scheduled" component={ScheduledScreen} />
      <Tab.Screen name="Past" component={PastScreen} />
    </Tab.Navigator>
  );
}

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
    color: "#007AFF",
    fontSize: 16,
    // fontWeight: "bold",
    fontFamily:'Poppins_Medium',
  },
});
