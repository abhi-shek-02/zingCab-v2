import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const PastScreen = () => {
  // Sample data for past bookings
  const [pastBookings, setPastBookings] = useState([
    {
      id: "1",
      pickup: "IGI Airport, Delhi",
      drop: "Ambience Mall, Gurgaon",
      date: "20/04/25",
      time: "7:30 AM",
      fare: "₹1200",
      vehicle: "Zing Classic (Sedan for 4)",
    },
    {
      id: "2",
      pickup: "Connaught Place, Delhi",
      drop: "Cyber Hub, Gurgaon",
      date: "15/03/25",
      time: "6:00 PM",
      fare: "₹950",
      vehicle: "Zing Classic (Hatchback for 4)",
    },
    {
      id: "1",
      pickup: "IGI Airport, Delhi",
      drop: "Ambience Mall, Gurgaon",
      date: "20/04/25",
      time: "7:30 AM",
      fare: "₹1200",
      vehicle: "Zing Classic (Sedan for 4)",
    },
    {
      id: "2",
      pickup: "Connaught Place, Delhi",
      drop: "Cyber Hub, Gurgaon",
      date: "15/03/25",
      time: "6:00 PM",
      fare: "₹950",
      vehicle: "Zing Classic (Hatchback for 4)",
    },
  ]);

  return (
    <View style={styles.container}>
      {pastBookings.length === 0 ? (
        <ScrollView
          contentContainerStyle={styles.emptyContainer}
          showsVerticalScrollIndicator={false}
        >
          <LottieView
            source={require("../assets/Location.json")}
            autoPlay
            loop
            style={styles.lottie}
          />
          <Text style={styles.emptyText}>
            You haven't taken a ride with us yet
          </Text>
        </ScrollView>
      ) : (
        <FlatList
          data={pastBookings}
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
    marginBottom: 55,
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
    padding: 15,
    fontWeight: "600",
    fontFamily: "Poppins_Medium",
    color: "#8292B6",
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

export default PastScreen;
