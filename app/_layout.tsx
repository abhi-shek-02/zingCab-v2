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

import { useColorScheme } from "react-native"; // ✅ Using React Native's built-in hook
import { Ionicons } from "@expo/vector-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        if (loaded) {
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, [loaded]);

  if (!loaded) {
    return null;
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
              fontWeight: "700", // Customize title font style
              fontSize: 17,
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
              backgroundColor: "#2C66E3", // Change background color
            },
            headerTintColor: "#E6F2FF", // Change text/icon color
            headerTitleStyle: {
              fontWeight: "700", // Customize title font style
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
              backgroundColor: "#2C66E3", // Change background color
            },
            headerTintColor: "#E6F2FF", // Change text/icon color
            headerTitleStyle: {
              fontWeight: "700", // Customize title font style
              fontSize: 17,
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
              fontWeight: "700", // Customize title font style
              fontSize: 17,
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
              fontWeight: "700", // Customize title font style
              fontSize: 17,
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
              backgroundColor: "#2C66E3", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              fontWeight: "700", // Customize title font style
              fontSize: 17,
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
              backgroundColor: "#2C66E3", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              fontWeight: "700", // Customize title font style
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
              backgroundColor: "#2C66E3", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              fontWeight: "700", // Customize title font style
              fontSize: 17,
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
              backgroundColor: "#2C66E3", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              fontWeight: "700", // Customize title font style
              fontSize: 17,
            },
            headerTitleAlign: "center",
          }}
        />
        {/* userProfile */}
        <Stack.Screen
          name="userProfile"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Profile", // Custom title
            headerStyle: {
              backgroundColor: "#2C66E3", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              fontWeight: "700", // Customize title font style
              fontSize: 17,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="EditUserProfile"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Edit Profile", // Custom title
            headerStyle: {
              backgroundColor: "#2C66E3", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              fontWeight: "700", // Customize title font style
              fontSize: 17,
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
              backgroundColor: "#2C66E3", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              fontWeight: "700", // Customize title font style
              fontSize: 17,
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
