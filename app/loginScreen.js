import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
const imageUrls = [
  "https://media.istockphoto.com/id/1224814265/photo/indian-couple-in-the-car-with-phone.jpg?s=612x612&w=0&k=20&c=SP4c6XC8Toe_Vs3W93EGZufDDr1653aCMethJ6-vFvE=",
  "https://media.istockphoto.com/id/1133362236/photo/happy-couple-going-on-a-road-trip-stock-image.jpg?s=612x612&w=0&k=20&c=CtMQbW0_lzEGvAt0paqkGWSp3WKR5w3yYcEivRHT7uM=",
  "https://media.istockphoto.com/id/1133366487/photo/enjoying-travel-stock-image.jpg?s=612x612&w=0&k=20&c=4kZDaZ0Gs4rTxHdInJharjn4-KfEbUhbAr06r6nODsQ=",
  "https://media.istockphoto.com/id/1279634421/photo/young-couple-spending-time-together-stock-photo.jpg?s=612x612&w=0&k=20&c=vYO6ksvetNIWUsVfvSEGRDwM35tr5-ulR82h2o5ZTco=",
  "https://www.shutterstock.com/image-photo/pleasant-taxi-ride-happy-arabic-600nw-2300534995.jpg",
];

const LoginScreen = () => {
  const { width } = Dimensions.get("window");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header Badge */}
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>
              Experience the Future of Travel{" "}
            </Text>
            <Text style={styles.badgeSubText}>Cleaner, Smoother, Smarter!</Text>
          </View>

          {/* Main Banner */}
          <Text style={styles.title}>
            Join The{"  \n"}
            <Text style={styles.highlight}>
              Elite Rides, Exclusive Comfort!
            </Text>
          </Text>

          <Text style={styles.subText}>
            Zero Cancellation | Reliable Pricing
          </Text>

          {/* Promo Image */}
          <View style={styles.carouselContainer}>
            <Carousel
              loop
              autoPlay
              autoPlayInterval={3000}
              width={width * 0.85}
              height={200}
              data={imageUrls}
              scrollAnimationDuration={1000}
              renderItem={({ item, animationValue }) => {
                const animatedStyle = useAnimatedStyle(() => {
                  const opacity = interpolate(
                    animationValue.value,
                    [-1, 0, 1],
                    [0.3, 1, 0.3]
                  );
                  return { opacity };
                });
                return (
                  <Animated.View style={[styles.carouselItem, animatedStyle]}>
                    <Image
                      source={{ uri: item }}
                      style={styles.carouselImage}
                    />
                  </Animated.View>
                );
              }}
            />
          </View>

          <View style={styles.promoBadge}>
            <Text style={styles.promoText}>
              Safe, Reliable & Always On Time
            </Text>
            <Text style={styles.promoDiscount}>
              Experience Comfort Like Never Before
            </Text>
          </View>

          {/* Phone Input Section */}
          <View style={styles.inputContainer}>
            <Text style={styles.flag}>🇮🇳</Text>
            <Text style={styles.countryCode}>+91</Text>
            <TextInput
              style={styles.input}
              placeholder="9876543210"
              keyboardType="phone-pad"
              returnKeyType="done"
              onFocus={() => setKeyboardVisible(true)}
              onBlur={() => setKeyboardVisible(false)}
            />
          </View>

          {/* Get OTP Button */}
          <TouchableOpacity
            style={styles.truecallerButton}
            onPress={() => {
              try {
                navigation.navigate("otpScreen");
              } catch (e) {
                console.log("E", e);
              }
            }}
          >
            <Text style={styles.truecallerText}>Get OTP</Text>
          </TouchableOpacity>

          {/* Extra padding to avoid being covered by keyboard */}
          {keyboardVisible && <View style={{ height: 80 }} />}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FD",
  },
  scrollContainer: {
    padding: 20,
  },
  badgeContainer: {
    backgroundColor: "#F1F8FD",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 30,
    width: "90%",
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#4EBFAC",
    width: "100%",
    padding: 10,
    fontSize: 15,
    borderRadius: 50,
  },
  badgeSubText: {
    color: "#505052",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "700",
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  highlight: {
    paddingVertical: 10,
    color: "#007AFF",
    fontSize: 20,
  },
  subText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 5,
  },
  carouselContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  carouselItem: {
    borderRadius: 10,
    overflow: "hidden",
  },
  carouselImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  promoBadge: {
    backgroundColor: "#0057FF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    top: -10,
  },
  promoText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  promoDiscount: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  flag: {
    fontSize: 18,
    marginRight: 8,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
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
