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
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="zingDarshan"
          options={{
            headerShown: true, // Ensure the header is visible
            title: "Zing Darshan", // Custom title
            headerStyle: {
              backgroundColor: "#0056D2", // Change background color
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
          name="bookingScreen"
          options={{
            headerShown: false, // Ensure the header is visible
            title: "Book your Ride", // Custom title
            headerStyle: {
              backgroundColor: "#0056D2", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              fontWeight: "700", // Customize title font style
              fontSize: 17,
              
            },
            headerTitleAlign: "center",
          }}
        />
        {/* <Stack.Screen
          name="bookingScreen"
          options={{
            headerShown: true, // Ensure the header is visible
            // title: "Zing Darshan", // Custom title
            headerStyle: {
              backgroundColor: "#0056D2", // Change background color
            },
            headerTintColor: "#fff", // Change text/icon color
            headerTitleStyle: {
              fontWeight: "700", // Customize title font style
              fontSize: 17,
              
            },
            headerTitleAlign: "center",
          }}
        /> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
