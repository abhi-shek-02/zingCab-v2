import { useState, useEffect } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import MainScreen from "../mainScreen";
import LoginScreen from "../loginScreen";

export default function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const navigation = useNavigation(); // Get navigation instance
  const { userVerified } = useLocalSearchParams(); // Get passed data

  useEffect(() => {
    if (userVerified === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userVerified]);

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        height: userVerified ? 70 : 0, // Hide tab bar by setting height to 0
        overflow: "hidden", // Prevents any extra space from showing
        backgroundColor: "#fff",
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        position: "absolute",
        // shadowColor: "#2C66E3",
        // shadowOffset: { width: 0, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 5,
        // elevation: 10,
        borderColor: "white",
      }
      
    });
  }, [userVerified, navigation]);

  return isLoggedIn ? <MainScreen /> : <LoginScreen />;
}
