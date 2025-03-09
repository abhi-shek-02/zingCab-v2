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

export default function TabTwoScreen() {
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
            <Text style={styles.highlight}>Elite Rides, Exclusive Comfort!</Text>
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
          <TouchableOpacity style={styles.truecallerButton} onPress={() => navigation.navigate("otpScreen")}>
            <Text style={styles.truecallerText}>Get OTP</Text>
          </TouchableOpacity>

          {/* Extra padding to avoid being covered by keyboard */}
          {keyboardVisible && <View style={{ height: 80 }} />}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

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
    marginTop: 20,
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
    paddingVertical:10,
    color: "#007AFF",
    fontSize:20
  },
  subText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 15,
   marginTop:5
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

// import LottieView from "lottie-react-native";
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import OTPTextInput from "react-native-otp-textinput";

// export default function TabTwoScreen() {
//   const [otp, setOtp] = useState("");
//   const [timer, setTimer] = useState(30);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (timer > 0) {
//         setTimer(timer - 1);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [timer]);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Back Button */}
//       {/* <TouchableOpacity style={styles.backButton}>
//         <Text style={styles.backText}>←</Text>
//       </TouchableOpacity> */}

//       {/* Banner */}
//       {/* <View style={styles.banner}> */}
//         {/* <Text style={styles.greenText}>ECO FRIENDLY</Text>
//         <Text style={styles.blackText}>RIDES</Text> */}
       
//       {/* </View> */}
//       <LottieView
//           source={require("../../assets/A3.json")} // Replace with your JSON file path
//           autoPlay
//           loop
//           style={{
//             width: '100%', // Increase width
//             height: '50%', // Increase height
//             // alignSelf: "center", // Center alignment
//             justifyContent:'center',
//             alignItems:'center'
//             ,
//             // backgroundColor:'red'
//           }}
//         />

//       {/* OTP Card */}
//       <View style={styles.otpCard}>
//         <Text style={styles.otpTitle}>Enter OTP</Text>
//         <View style={styles.phoneNumberRow}>
//           <Text style={styles.phoneText}>Sent to +91-7003840501</Text>
//           <TouchableOpacity>
//             <Text style={styles.editIcon}>✎</Text>
//           </TouchableOpacity>
//         </View>

//         {/* OTP Input */}
//         <OTPTextInput
//           inputCount={6}
//           handleTextChange={(text) => setOtp(text)}
//           tintColor="#0057FF"
//           offTintColor="#ddd"
//           textInputStyle={styles.otpInput}
//         />

//         {/* Verify Button */}
//         <TouchableOpacity
//           style={styles.verifyButton}
//           disabled={otp.length !== 6}
//         >
//           <Text style={styles.verifyButtonText}>Verify OTP</Text>
//         </TouchableOpacity>

//         {/* Timer */}
//         <Text style={styles.timer}>00:{timer < 10 ? `0${timer}` : timer}s</Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//     // justifyContent:'center'
//     alignItems:'center'
//   },
//   backButton: {
//     position: "absolute",
//     top: 20,
//     left: 20,
//     zIndex: 1,
//   },
//   backText: {
//     fontSize: 24,
//   },
//   banner: {
//     // flexDirection: "colo",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     height: 200,
//     width: 100,
//   },
//   greenText: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#00A86B",
//   },
//   blackText: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   carImage: {
//     width: 150,
//     height: 80,
//     resizeMode: "contain",
//   },
//   otpCard: {
//     // backgroundColor: "#EAF6FF",
//     padding: 20,
//     borderRadius: 20,
//     marginTop: 20,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     // elevation: 5,
//     height: "100%",
//   },
//   otpTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   phoneNumberRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   phoneText: {
//     color: "#555",
//   },
//   editIcon: {
//     color: "#1E90FF",
//     marginLeft: 5,
//   },
//   otpInput: {
//     borderWidth: 0.5,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     fontSize: 18,
//     textAlign: "center",
//     height: 50,
//     width: 40,
//     marginHorizontal: 5,
//     // backgroundColor:'red'
//     // ✅ Remove shadow on iOS
//   shadowColor: "transparent",
//   shadowOffset: { width: 0, height: 0 },
//   shadowOpacity: 0,
//   shadowRadius: 0,

//   // ✅ Remove elevation on Android
//   elevation: 0,
//   },
//   verifyButton: {
//     backgroundColor: "#ccc",
//     paddingVertical: 15,
//     borderRadius: 15,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   verifyButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   timer: {
//     textAlign: "right",
//     marginTop: 10,
//     color: "#555",
//   },
// });
