// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             // Use a transparent background on iOS to show the blur effect
//             position: 'absolute',
//           },
//           default: {},
//         }),
//       }}>

//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'My Rides',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//        <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={'#0045ff'} />,
//         }}
//       />
//        <Tabs.Screen
//         name="profile"
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }
// import { Tabs } from "expo-router";
// import { View } from "react-native";
// import { Ionicons } from "@expo/vector-icons"; // For Icons
// // import { Svg, Path } from "react-native-svg"; // For Custom Ohm Symbol

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           height: 70,
//           backgroundColor: "#fff",
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           position: "absolute",
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 4 },
//           shadowOpacity: 0.2,
//           shadowRadius: 5,
//           elevation: 10,
//         },
//         tabBarShowLabel: false,
//       }}
//     >
//       {/* Left Tab - My Rides */}
//       <Tabs.Screen
//         name="explore"
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="paper-plane" size={28} color={color} />
//           ),
//         }}
//       />

//       {/* Center Floating Button - Ohm Symbol */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: () => (
//             <View
//               style={{
//                 width: 70,
//                 height: 70,
//                 backgroundColor: "#0045ff",
//                 borderRadius: 35,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 shadowColor: "#000",
//                 shadowOffset: { width: 0, height: 4 },
//                 shadowOpacity: 0.3,
//                 shadowRadius: 6,
//                 elevation: 10,
//                 marginBottom: 25, // Floating effect
//               }}
//             >
//               <Ionicons size={40} color="white" />
//             </View>
//           ),
//         }}
//       />

//       {/* Right Tab - Profile */}
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: 'My Account',
//           tabBarIcon: ({ color }) => (

//             <Ionicons name="person" size={28} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// // Custom Ohm Symbol using SVG
// const OhmSymbol = ({ size = 40, color = "black" }) => {
//   return (
//     <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
//       <Path
//         d="M12 2C10.89 2 10 2.89 10 4C10 5.11 10.89 6 12 6C13.11 6 14 5.11 14 4C14 2.89 13.11 2 12 2ZM12 8C9.5 8 7.5 9.5 6.5 11.5C6.21 12.07 6.78 12.69 7.5 12.5C9.34 11.97 11.66 11.97 13.5 12.5C14.22 12.69 14.79 12.07 14.5 11.5C13.5 9.5 11.5 8 9 8ZM12 18C10.34 18 9 19.34 9 21H15C15 19.34 13.66 18 12 18Z"
//         fill={color}
//       />
//     </Svg>
//   );
// };
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
