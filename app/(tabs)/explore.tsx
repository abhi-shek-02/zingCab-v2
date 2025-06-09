import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { mainColor } from "@/constants/Colors";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import OngoingScreen from '../ongoingScreen'
import ScheduledScreen from '../scheduledScreen'
import PastScreen from '../pastScreen'
const Tab = createMaterialTopTabNavigator();

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
