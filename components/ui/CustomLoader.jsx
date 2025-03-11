import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const CustomLoader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/AppLoader.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
      {/* <Text style={styles.text}>ZingCab</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // Covers entire screen
    backgroundColor: "rgba(44, 102, 227, 0.2)", // Soft transparent overlay
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 120,
    height: 120,
  },
  text: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "silver",
    textTransform: "uppercase",
    letterSpacing: 1,
    textShadowColor: "rgba(0, 0, 0, 0.2)", // Soft shadow for depth
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default CustomLoader;
