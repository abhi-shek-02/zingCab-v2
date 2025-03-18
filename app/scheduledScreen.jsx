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
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
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
        source={require("../assets/A3.json")}
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
          fontFamily: "Poppins_Medium",
          color: "#8292B6",
        }}
      >
        No Scheduled rides at the moment
      </Text>
      <Text style={{ fontFamily: "Poppins_Regular", color: "#202329" }}>
        Ready to take your next ride?
      </Text>
      <TouchableOpacity
        style={styles.truecallerButton}
        onPress={() => navigation.navigate("bookingScreen")}
      >
        <Text style={styles.truecallerText}>Ready, let's schedule!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ScheduledScreen;

const styles = StyleSheet.create({});
