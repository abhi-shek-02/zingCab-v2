import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { mainColor } from "@/constants/Colors";
import AirportRideScreen from "./AirportRideScreen";
import RentalScreen from "./RentalScreen";
import OutstationScreen from "./OutstationScreen";
import { useRoute } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const BookingScreen = () => {
  const route = useRoute();
  const { selectedItem } = route.params || {}; // Ensure params exist to avoid errors

  console.log("selectedItem", selectedItem);

  // Determine initial route based on selectedItem
  const initialRouteName =
    !selectedItem || !selectedItem.title || selectedItem.id === 2
      ? "Outstation" // Default to Outstation if selectedItem is null, undefined, or has id: 2
      : selectedItem.title;

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
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
