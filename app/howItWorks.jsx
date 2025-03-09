import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Custom Close Button (Top Right)
const CloseButton = ({ onPress }) => (
  <TouchableOpacity style={styles.closeButton} onPress={onPress}>
    <Ionicons name="close" size={24} color="#fff" />
  </TouchableOpacity>
);

// Custom Next Button
const NextButton = ({ ...props }) => (
  <TouchableOpacity style={styles.nextButton} {...props}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
);

// Custom Done Button
const DoneButton = ({ ...props }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.nextButton}
      {...props}
      onPress={() => {
        try {
         router.push('/(tabs)/index')
        } catch (e) {
          console.log("E", e);
        }
      }}
    >
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  );
};

// Custom Dots
const CustomDot = ({ selected }) => (
  <View
    style={[
      styles.dot,
      {
        backgroundColor: selected ? "#0057FF" : "#D3D3D3",
        width: selected ? 12 : 6,
      },
    ]}
  />
);

// Onboarding Component
const HowItWorks = () => {
  const router = useRouter();

  return (
    <Onboarding
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      DotComponent={CustomDot}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: "#000",
          image: (
            <ImageBackground
              source={require("../assets/images/Onboarding3.png")}
              style={styles.imageBackground}
            >
              <View style={styles.overlay} />
              <View style={styles.textContainer}>
                {/* <CloseButton onPress={() => navigation.navigate("Home")} /> */}
                <Text style={styles.title}>Welcome to ZingCab</Text>
                <Text style={styles.subtitle}>
                  Your trusted partner for seamless intercity travel
                </Text>
              </View>
            </ImageBackground>
          ),
        },
        {
          backgroundColor: "#000",
          image: (
            <ImageBackground
              source={require("../assets/images/Onboarding3.png")}
              style={styles.imageBackground}
            >
              <View style={styles.overlay} />
              <View style={styles.textContainer}>
                {/* <CloseButton onPress={() => navigation.navigate("Home")} /> */}
                <Text style={styles.title}>
                  Affordable & Transparent Pricing
                </Text>
                <Text style={styles.subtitle}>
                  Get the best fares without surge pricing or hidden charges
                </Text>
              </View>
            </ImageBackground>
          ),
        },
        {
          backgroundColor: "#000",
          image: (
            <ImageBackground
              source={require("../assets/images/Onboarding3.png")}
              style={styles.imageBackground}
            >
              <View style={styles.overlay} />
              <View style={styles.textContainer}>
                {/* <CloseButton onPress={() => navigation.navigate("Home")} /> */}
                <Text style={styles.title}>Book Your Ride with Ease</Text>
                <Text style={styles.subtitle}>
                  Enjoy a comfortable ride across West Bengal with just a few
                  taps
                </Text>
              </View>
            </ImageBackground>
          ),
        },
      ]}
    />
  );
};

export default HowItWorks;

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Dark overlay for readability
  },
  textContainer: {
    position: "absolute",
    top: "80%",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    // color: "#0057FF",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },
  nextButton: {
    width: "90%",
    paddingVertical: 12,
    backgroundColor: "#0057FF",
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
});
