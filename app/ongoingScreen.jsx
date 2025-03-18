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
      source={require("../assets/A2.json")}
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
        fontFamily: "Poppins_Medium",
        color: "#8292B6",
      }}
    >
      No ongoing rides at the moment
    </Text>
  </ScrollView>
);

export default OngoingScreen;

const styles = StyleSheet.create({});
