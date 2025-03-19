import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const ScheduledScreen = () => {
  const navigation = useNavigation();

  // Sample scheduled rides
  const [scheduledRides, setScheduledRides] = useState([
    {
      id: "1",
      pickup: "Noida Sector 18",
      drop: "New Delhi Railway Station",
      date: "22/04/25",
      time: "10:00 AM",
      fare: "₹850",
      vehicle: "Zing Classic (Sedan for 4)",
    },
    {
      id: "2",
      pickup: "Dwarka, Delhi",
      drop: "Gurgaon Cyber Park",
      date: "25/04/25",
      time: "8:30 AM",
      fare: "₹1200",
      vehicle: "Zing Prime (SUV for 6)",
    },
  ]);

  return (
    <View style={styles.container}>
      {scheduledRides.length === 0 ? (
        <ScrollView
          contentContainerStyle={styles.emptyContainer}
          showsVerticalScrollIndicator={false}
        >
          <LottieView
            source={require("../assets/A3.json")}
            autoPlay
            loop
            style={styles.lottie}
          />
          <Text style={styles.emptyText}>No Scheduled rides at the moment</Text>
          <Text style={styles.subText}>Ready to take your next ride?</Text>
          <TouchableOpacity
            style={styles.scheduleButton}
            onPress={() => navigation.navigate("bookingScreen")}
          >
            <Text style={styles.scheduleText}>Ready, let's schedule!</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <FlatList
          data={scheduledRides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookingCard item={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

// Booking Ticket Card
const BookingCard = ({ item }) => {
  return (
    <View style={styles.card}>
      {/* Address Section */}
      <View style={styles.addressContainer}>
        {/* Pickup */}
        <View style={styles.row}>
          <FontAwesome5 name="map-marker-alt" size={18} color="white" />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Pickup</Text>
            <Text style={styles.info}>{item.pickup}</Text>
          </View>
        </View>

        {/* Vertical Line */}
        <View style={styles.verticalLine} />

        {/* Drop */}
        <View style={styles.row}>
          <FontAwesome5 name="map-marker-alt" size={18} color="white" />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Drop</Text>
            <Text style={styles.info}>{item.drop}</Text>
          </View>
        </View>
      </View>

      {/* Date & Time */}
      <View style={styles.centerRow}>
        <Text style={styles.label}>Date & Time</Text>
        <Text style={styles.info}>
          {item.date} - {item.time}
        </Text>
      </View>

      {/* Dotted Line */}
      <View style={styles.dottedLineContainer}>
        <View style={styles.leftCircle} />
        <View style={styles.dottedLine} />
        <View style={styles.rightCircle} />
      </View>

      {/* Fare & Vehicle */}
      <View style={styles.footer}>
        <Text style={styles.vehicleText}>{item.vehicle}</Text>
        <Text style={styles.fareText}>{item.fare}</Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: "100%",
    height: 200,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
    paddingTop: 15,
    fontWeight: "600",
    fontFamily: "Poppins_Medium",
    color: "#8292B6",
  },
  subText: {
    fontFamily: "Poppins_Regular",
    color: "#202329",
    marginTop: 5,
  },
  scheduleButton: {
    backgroundColor: "#2d78ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
  },
  scheduleText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_Medium",
  },
  card: {
    backgroundColor: "#2d78ff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
  },
  addressContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 12,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  verticalLine: {
    height: 20,
    borderLeftWidth: 1.5,
    borderLeftColor: "#fff",
    marginLeft: 10,
    marginVertical: 5,
  },
  textContainer: {
    marginLeft: 10,
  },
  label: {
    color: "#fff",
    fontSize: 12,
  },
  info: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins_Regular",
  },
  centerRow: {
    alignItems: "center",
    marginTop: 12,
  },
  dottedLineContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    borderStyle: "dashed",
    marginVertical: 10,
    position: "relative",
  },
  leftCircle: {
    width: 20,
    height: 20,
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
    top: -10,
    left: -23,
  },
  rightCircle: {
    width: 20,
    height: 20,
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
    top: -10,
    right: -23,
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    borderStyle: "dashed",
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vehicleText: {
    color: "#fff",
    fontSize: 14,
  },
  fareText: {
    color: "#fff",
    fontSize: 19,
    fontFamily: "Poppins_Medium",
  },
});

export default ScheduledScreen;
