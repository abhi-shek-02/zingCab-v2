import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { mainColor } from "@/constants/Colors";
import AirportRideScreen from "./AirportRideScreen";
import RentalScreen from "./RentalScreen";
import OutstationScreen from "./OutstationScreen";

const Tab = createMaterialTopTabNavigator();

const BookingScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontFamily: "Poppins_Medium" },
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarIndicatorStyle: {
          backgroundColor: mainColor,
          height: 3,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        },
        tabBarActiveTintColor: mainColor,
        tabBarInactiveTintColor: "#666",
      }}
    >
      <Tab.Screen name="Rental" component={RentalScreen} />
      <Tab.Screen name="Outstation" component={OutstationScreen} />
      <Tab.Screen name="Airport Rides" component={AirportRideScreen} />
    </Tab.Navigator>
  );
};

export default BookingScreen;
