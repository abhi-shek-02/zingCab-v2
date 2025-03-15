
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons"; // Icons from Feather
import { mainColor } from "@/constants/Colors";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          shadowColor: "#2d78ff",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 10,
          borderColor: "white",
        },
        tabBarShowLabel: false, // No labels for side tabs
      }}
    >
      {/* Left Tab - My Rides */}
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: true,
          title: "My Rides",
          headerStyle: { backgroundColor: mainColor },
          headerShadowVisible: false,
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "700", fontSize: 17 },
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <View style={{ flex: 1, alignItems: "center" }}>
              <Feather name="navigation" size={24} color={focused ? "#2d78ff" : "#959595"} />
              <Text style={[styles.label, { color: focused ? "#2d78ff" : "#959595" }]}>
                Ride
              </Text>
            </View>
          ),
        }}
      />

      {/* Center Floating Button - Home */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ flex: 1, alignItems: "center" }}>
              <Feather name="home" size={24} color={focused ? "#2d78ff" : "#959595"} />
              <Text style={[styles.label, { color: focused ? "#2d78ff" : "#959595" }]}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      {/* Right Tab - Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ flex: 1, alignItems: "center" }}>
              <Feather name="user" size={24} color={focused ? "#2d78ff" : "#959595"} />
              <Text style={[styles.label, { color: focused ? "#2d78ff" : "#959595" }]}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = {
  label: {
    fontSize: 11,
    marginTop: 5,
    textAlign: "center",
    width: "100%",
    fontFamily: "Poppins_Medium",
  },
};
