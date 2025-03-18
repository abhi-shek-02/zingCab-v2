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
import LottieView from "lottie-react-native";

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
      source={require("../assets/Location.json")}
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
        fontFamily: "Poppins_Medium",
        color: "#8292B6",
      }}
    >
      You haven't taken a ride with us yet
    </Text>
  </ScrollView>
);

export default PastScreen;

const styles = StyleSheet.create({});
