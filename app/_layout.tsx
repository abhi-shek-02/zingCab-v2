import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { ActivityIndicator, View, useColorScheme } from "react-native"; // ✅ Using React Native's built-in hook
import { Ionicons } from "@expo/vector-icons";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import {
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { mainColor } from "@/constants/Colors";
// import { Poppins_400Regular, Poppins_500Medium } from "@expo-google-fonts/poppins";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Load fonts
  const [fontsLoaded, fontError] = useFonts({
    Poppins_Regular: Poppins_400Regular,
    Poppins_Medium: Poppins_500Medium,
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null; // Prevent rendering until fonts are loaded
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* howItWorks */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="howItWorks"
          options={{
            headerShown: false, // Ensure the header is visible
            title: "Login", // Custom title
            headerStyle: {
              // backgroundColor: "#0057FF", // Change background color
            },
            headerTintColor: "#0057FF", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontSize: 17,
              fontFamily: "Poppins_Medium",
            },
            headerTitleAlign: "center",
            headerRight: () => (
              <Ionicons
                name="car-outline" // Change to any relevant icon
                size={24}
                color="#fff" // Match the header text color
                style={{ marginRight: 15 }} // Add spacing if needed
              />
            ),
          }}
        />
        <Stack.Screen
          name="zingDarshan"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Zing Darshan", // Custom title
            headerStyle: {
              backgroundColor: "#2d78ff", // Change background color
            },
            headerTintColor: "#E6F2FF", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontFamily: "Poppins_Medium",
              fontSize: 17,
            },
            headerTitleAlign: "center",
          }}
        />
        {/* import {Ionicons} from "@expo/vector-icons"; */}
        <Stack.Screen
          name="bookingScreen"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Book your Ride", // Custom title
            headerStyle: {
              backgroundColor: "#2d78ff", // Change background color
            },
            headerTintColor: "#E6F2FF", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontSize: 17,
              fontFamily: "Poppins_Medium",
            },
            headerTitleAlign: "center",
            // headerRight: () => (
            //   // <Ionicons
            //   //   name="car-outline" // Change to any relevant icon
            //   //   size={24}
            //   //   color="#fff" // Match the header text color
            //   //   style={{ marginRight: 15 }} // Add spacing if needed
            //   // />
            // ),
          }}
        />

        <Stack.Screen
          name="loginScreen"
          options={{
            headerShown: false, // Ensure the header is visible
            title: "Login", // Custom title
            headerStyle: {
              // backgroundColor: "#0057FF", // Change background color
            },
            headerTintColor: "#0057FF", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontSize: 17,
              fontFamily: "Poppins_Medium",
            },
            headerTitleAlign: "center",
            headerRight: () => (
              <Ionicons
                name="car-outline" // Change to any relevant icon
                size={24}
                color="#fff" // Match the header text color
                style={{ marginRight: 15 }} // Add spacing if needed
              />
            ),
          }}
        />
        <Stack.Screen
          name="otpScreen"
          options={{
            headerShown: false, // Ensure the header is visible
            title: "Login", // Custom title
            headerStyle: {
              // backgroundColor: "#0057FF", // Change background color
            },
            headerTintColor: "#0057FF", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontSize: 17,
              fontFamily: "Poppins_Medium",
            },
            headerTitleAlign: "center",
            headerRight: () => (
              <Ionicons
                name="car-outline" // Change to any relevant icon
                size={24}
                color="#fff" // Match the header text color
                style={{ marginRight: 15 }} // Add spacing if needed
              />
            ),
          }}
        />
        <Stack.Screen
          name="policyScreen"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Policy", // Custom title
            headerStyle: {
              backgroundColor: mainColor, // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontSize: 17,
              fontFamily: "Poppins_Medium",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="accountSettingScreen"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Account Setting", // Custom title
            headerStyle: {
              backgroundColor: "#2d78ff", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontFamily: "Poppins_Medium",
              fontSize: 17,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="helpScreen"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Help", // Custom title
            headerStyle: {
              backgroundColor: "#2d78ff", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontSize: 17,
              fontFamily: "Poppins_Medium",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="safetyHubScreen"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Safety Hub", // Custom title
            headerStyle: {
              backgroundColor: "#2d78ff", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontFamily: "Poppins_Medium",
              fontSize: 17,
            },
            headerTitleAlign: "center",
          }}
        />
        {/* userProfile */}
        <Stack.Screen
          name="userProfile"
          options={{
            headerShown: true,
            title: "Profile",
            headerStyle: {
              backgroundColor: "#2d78ff",
              elevation: 0, // Removes shadow on Android
              shadowOpacity: 0, // Removes shadow on iOS
              borderBottomWidth: 0, // Removes bottom border
            },
            headerShadowVisible: false, // Completely removes shadow in React Navigation v6+
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 17,
              fontFamily: "Poppins_Medium",
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="editUserProfile"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Edit Profile", // Custom title
            headerStyle: {
              backgroundColor: "#2d78ff", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontSize: 17,
              fontFamily: "Poppins_Medium",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="safetyDetailScreen"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Edit Profile", // Custom title
            headerStyle: {
              backgroundColor: "#2d78ff", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontSize: 17,
              fontFamily: "Poppins_Medium",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="pricingScreen"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Pricing", // Custom title
            headerStyle: {
              backgroundColor: "#2d78ff", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontFamily: "Poppins_Medium",
              fontSize: 17,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="feedBack"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Feedback", // Custom title
            headerStyle: {
              backgroundColor: "#2d78ff", // Change background color
            },
            
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontFamily: "Poppins_Medium",
              fontSize: 17,
            },
            headerTitleAlign: "center",
          }}
        />
         <Stack.Screen
          name="bookingConfirmationScreen"
          options={{
            headerShown: false, // Ensure the header is visible
            title: "", // Custom title
            headerStyle: {
              // backgroundColor: "#2d78ff", // Change background color
            },
            headerShadowVisible: false,
            headerTintColor: "#2d78ff", // Change text/icon color
            headerTitleStyle: {
              // fontWeight: "700", // Customize title font style
              fontFamily: "Poppins_Medium",
              fontSize: 17,
            },
            headerTitleAlign: "center",
          }}
        />
        {/* /feedBack */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
