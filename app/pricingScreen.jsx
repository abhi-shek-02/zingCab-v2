import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Card, Divider } from "react-native-paper";
const pricingData = [
  { id: 1, distance: "0-3 km", relaxed: "₹199-₹229", rush: "₹249-₹279" },
  { id: 2, distance: "3-6 km", relaxed: "₹199-₹269", rush: "₹249-₹319" },
  { id: 3, distance: "6-9 km", relaxed: "₹249-₹299", rush: "₹299-₹349" },
  { id: 4, distance: "9-12 km", relaxed: "₹269-₹329", rush: "₹329-₹389" },
  { id: 5, distance: "12-15 km", relaxed: "₹299-₹369", rush: "₹349-₹419" },
  { id: 6, distance: "15-18 km", relaxed: "₹369-₹459", rush: "₹429-₹519" },
  { id: 7, distance: "18-21 km", relaxed: "₹399-₹489", rush: "₹549-₹639" },
  { id: 8, distance: "21-24 km", relaxed: "₹469-₹569", rush: "₹599-₹699" },
  { id: 9, distance: "24-27 km", relaxed: "₹559-₹659", rush: "₹629-₹729" },
  { id: 10, distance: "27-30 km", relaxed: "₹599-₹699", rush: "₹669-₹769" },
  { id: 11, distance: "30-33 km", relaxed: "₹639-₹739", rush: "₹799-₹899" },
  { id: 12, distance: "33-36 km", relaxed: "₹679-₹779", rush: "₹849-₹949" },
  { id: 13, distance: "36-39 km", relaxed: "₹739-₹839", rush: "₹929-₹1029" },
];
const tolls = [
  { name: "Faridabad Toll Plaza", price: "₹30 per crossing" },
  { name: "Delhi MCD Tax", price: "₹105 per entry" },
  { name: "Kherki Daula Toll Plaza", price: "₹85 per crossing" },
  { name: "Nizamuddin Toll", price: "₹30 per crossing" },
  { name: "Ajmeri Gate Toll", price: "₹50 per crossing" },
  { name: "Gurgaon-Faridabad Toll Plaza", price: "₹30 per crossing" },
  { name: "IGI Airport Fee (incl. GST)", price: "₹218.4 per pickup" },
];

// const PricingScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Pricing</Text>
//       <View style={styles.switchContainer}>
//         <TouchableOpacity style={styles.activeSwitch}>
//           <Text style={styles.switchTextActive}>Classic</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.inactiveSwitch}>
//           <Text style={styles.switchTextInactive}>Premium</Text>
//         </TouchableOpacity>
//       </View>
//       <ScrollView>
//         <View style={styles.tableHeader}>
//           <Text style={styles.columnHeader}>Distance (in kms)</Text>
//           <Text style={styles.columnHeader}>Relaxed Hours</Text>
//           <Text style={styles.columnHeader}>Rush Hours</Text>
//         </View>
//         {pricingData.map((item) => (
//           <View key={item.id} style={styles.tableRow}>
//             <View style={styles.indexCircle}>
//               <Text style={styles.indexText}>{item.id}</Text>
//             </View>
//             <Text style={styles.cell}>{item.distance}</Text>
//             <Text style={styles.cell}>{item.relaxed}</Text>
//             <Text style={styles.cell}>{item.rush}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", padding: 16 },
//   header: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   switchContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginBottom: 10,
//   },
//   activeSwitch: {
//     backgroundColor: "#0057FF",
//     padding: 10,
//     borderRadius: 20,
//     marginRight: 5,
//   },
//   inactiveSwitch: { backgroundColor: "#EAEAEA", padding: 10, borderRadius: 20 },
//   switchTextActive: { color: "#fff", fontWeight: "bold" },
//   switchTextInactive: { color: "#000", fontWeight: "bold" },
//   tableHeader: {
//     flexDirection: "row",
//     backgroundColor: "#F1F1F1",
//     padding: 10,
//   },
//   columnHeader: { flex: 1, fontWeight: "bold", textAlign: "center" },
//   tableRow: {
//     flexDirection: "row",
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//     alignItems: "center",
//   },
//   indexCircle: {
//     width: 30,
//     height: 30,
//     backgroundColor: "#0057FF",
//     borderRadius: 15,
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 10,
//   },
//   indexText: { color: "#fff", fontWeight: "bold" },
//   cell: { flex: 1, textAlign: "center" },
// });

// export default PricingScreen;

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const OutstationScreen = () => {
  const sections = [
    {
      title: "Fees, Tolls & Taxes",
      content:
        "Toll charges, state entry fees, and parking fees are extra and need to be paid by the rider. The final fare does not include these charges.",
    },
    {
      title: "Other Terms & Details",
      content:
        "Waiting charges may apply if the trip is delayed beyond a certain limit. Cancellations after driver allocation may incur charges.",
    },
  ];
  const TermsDetails = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
      <View style={{ marginBottom: 0 }}>
        {sections.map((section, index) => (
          <View key={index}>
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onPress={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <Text style={{ fontSize: 16, fontFamily: "Poppins_Medium" }}>
                {section.title}
              </Text>
              <Text style={{ fontSize: 20 }}>
                <MaterialIcons
                  name={
                    expandedIndex === index
                      ? "keyboard-arrow-up"
                      : "keyboard-arrow-down"
                  }
                  size={20}
                  color="black"
                />
              </Text>
            </TouchableOpacity>
            {expandedIndex === index && (
              <Text
                style={{
                  paddingVertical: 10,
                  fontSize: 14,
                  color: "#555",
                  fontFamily: "Poppins_Regular",
                }}
              >
                {section.content}
              </Text>
            )}
          </View>
        ))}
      </View>
    );
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
        marginBottom: 40,
      }}
    >
      <ScrollView
        style={{
          marginBottom: 100,
          borderWidth: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderColor: "#EBECED",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#F0F9FF",
            padding: 10,
            justifyContent: "center",
            alignContent: "center",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Text
            style={{
              flex: 0.5,
              // fontWeight: "bold",
              fontFamily: "Poppins_Medium",
              textAlign: "center",
              color: "#4372CF",
            }}
          >
            Sr. No.
          </Text>
          <Text
            style={{
              flex: 1,
              // fontWeight: "bold",
              fontFamily: "Poppins_Medium",
              textAlign: "center",
              alignSelf: "center",
              color: "#4372CF",
            }}
          >
            Distance {"\n"}
            <Text style={{ fontSize: 10, color: "#4372CF" }}>in kms</Text>
          </Text>
          <Text
            style={{
              flex: 1,
              // fontWeight: "bold",
              fontFamily: "Poppins_Medium",
              textAlign: "center",
              color: "#4372CF",
            }}
          >
            Relaxed Hrs.
          </Text>
          <Text
            style={{
              flex: 1,
              // fontWeight: "bold",
              fontFamily: "Poppins_Medium",
              textAlign: "center",
              color: "#4372CF",
            }}
          >
            Rush Hrs.
          </Text>
        </View>

        {pricingData?.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
              alignItems: "center",
            }}
          >
            {/* Index Circle */}
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#0057FF",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Text style={{ color: "#fff", fontFamily: "Poppins_Medium" }}>
                {item.id}
              </Text>
            </View>

            <Text
              style={{
                flex: 1,
                textAlign: "center",
                fontFamily: "Poppins_Regular",
              }}
            >
              {item.distance}
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                fontFamily: "Poppins_Regular",
              }}
            >
              {item.relaxed}
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                fontFamily: "Poppins_Regular",
              }}
            >
              {item.rush}
            </Text>
          </View>
        ))}
        <ScrollView style={{ padding: 16, backgroundColor: "#f8f9fa" }}>
          <Text
            style={{ padding: 5, fontSize: 13, fontFamily: "Poppins_Regular" }}
          >
            Additional charges of ₹100/3 km after this.
          </Text>
          {TermsDetails()}
          {/* <Card style={{ marginBottom: 16, backgroundColor: "#fff" }}>
            <Card.Content>
              <Text style={{ fontSize: 18, fontFamily: "Poppins_Medium" }}>
                Fees, Tolls & Taxes
              </Text>
              <FlatList
                data={tolls}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingVertical: 8,
                    }}
                  >
                    <Text style={{ fontFamily: "Poppins_Regular" }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontFamily: "Poppins_Medium" }}>
                      {item.price}
                    </Text>
                  </View>
                )}
              />
            </Card.Content>
          </Card>

          <Card>
            <Card.Content style={{ marginBottom: 16, backgroundColor: "#fff" }}>
              <Text style={{ fontSize: 18, fontFamily: "Poppins_Medium" }}>
                Other Terms & Details
              </Text>
              <Divider style={{ marginVertical: 8 }} />
              <Text style={{ fontFamily: "Poppins_Regular" }}>
                • Waiting beyond 2 mins at stops: ₹4/min
              </Text>
              <Text style={{ fontFamily: "Poppins_Regular", fontSize: 10 }}>
                • Parking charges should be paid to the driver
              </Text>
              <Text style={{ fontFamily: "Poppins_Regular" }}>
                • Discounts apply on base fares only
              </Text>
              <Text style={{ fontFamily: "Poppins_Regular" }}>
                • Pickups available in Gurgaon, IGI Airport, and Delhi
              </Text>
              <Text style={{ fontFamily: "Poppins_Regular" }}>
                • Drops available within Gurgaon and Delhi
              </Text>
            </Card.Content>
          </Card> */}
        </ScrollView>
      </ScrollView>
    </ScrollView>
  );
};

const RentalsScreen = () => {
  const pricingData = [
    { id: 1, duration: "1 hr/10 km", price: "₹389" },
    { id: 2, duration: "2 hrs/20 km", price: "₹599" },
    { id: 3, duration: "3 hrs/30 km", price: "₹799" },
    { id: 4, duration: "4 hrs/40 km", price: "₹999" },
    { id: 5, duration: "5 hrs/50 km", price: "₹1249" },
    { id: 6, duration: "6 hrs/60 km", price: "₹1499" },
    { id: 7, duration: "7 hrs/70 km", price: "₹1699" },
    { id: 8, duration: "8 hrs/80 km", price: "₹1999" },
    { id: 9, duration: "10 hrs/100 km", price: "₹2499" },
    { id: 10, duration: "12 hrs/120 km", price: "₹2999" },
  ];
  const sections = [
    {
      title: "Fees, Tolls & Taxes",
      content:
        "Toll charges, state entry fees, and parking fees are extra and need to be paid by the rider. The final fare does not include these charges.",
    },
    {
      title: "Other Terms & Details",
      content:
        "Waiting charges may apply if the trip is delayed beyond a certain limit. Cancellations after driver allocation may incur charges.",
    },
  ];
  const TermsDetails = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
      <View style={{ marginBottom: 100 }}>
        {sections.map((section, index) => (
          <View key={index}>
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onPress={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <Text style={{ fontSize: 16, fontFamily: "Poppins_Medium" }}>
                {section.title}
              </Text>
              <Text style={{ fontSize: 20 }}>
                <MaterialIcons
                  name={
                    expandedIndex === index
                      ? "keyboard-arrow-up"
                      : "keyboard-arrow-down"
                  }
                  size={20}
                  color="black"
                />
              </Text>
            </TouchableOpacity>
            {expandedIndex === index && (
              <Text
                style={{
                  paddingVertical: 10,
                  fontSize: 14,
                  color: "#555",
                  fontFamily: "Poppins_Regular",
                }}
              >
                {section.content}
              </Text>
            )}
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
        marginBottom: 50,
      }}
    >
      {pricingData.map((item) => (
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
          }}
        >
          {/* Index Circle */}
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#0057FF",
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>{item.id}</Text>
          </View>

          {/* Duration & Price */}
          <Text style={{ flex: 1, fontSize: 16 }}>{item.duration}</Text>
          <Text style={{ fontSize: 16, fontFamily: "Poppins_Medium" }}>
            {item.price}
          </Text>
        </View>
      ))}
      {TermsDetails()}
    </ScrollView>
  );
};

const AirportScreen = () => {
  const sections = [
    {
      title: "Fees, Tolls & Taxes",
      content:
        "Toll charges, state entry fees, and parking fees are extra and need to be paid by the rider. The final fare does not include these charges.",
    },
    {
      title: "Other Terms & Details",
      content:
        "Waiting charges may apply if the trip is delayed beyond a certain limit. Cancellations after driver allocation may incur charges.",
    },
  ];
  const TermsDetails = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
      <View style={{ marginBottom: 0 }}>
        {sections.map((section, index) => (
          <View key={index}>
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onPress={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <Text style={{ fontSize: 16, fontFamily: "Poppins_Medium" }}>
                {section.title}
              </Text>
              <Text style={{ fontSize: 20 }}>
                <MaterialIcons
                  name={
                    expandedIndex === index
                      ? "keyboard-arrow-up"
                      : "keyboard-arrow-down"
                  }
                  size={20}
                  color="black"
                />
              </Text>
            </TouchableOpacity>
            {expandedIndex === index && (
              <Text
                style={{
                  paddingVertical: 10,
                  fontSize: 14,
                  color: "#555",
                  fontFamily: "Poppins_Regular",
                }}
              >
                {section.content}
              </Text>
            )}
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
        marginBottom: 40,
      }}
    >
      <ScrollView
        style={{
          marginBottom: 100,
          borderWidth: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderColor: "#EBECED",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#F0F9FF",
            padding: 10,
            justifyContent: "center",
            alignContent: "center",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Text
            style={{
              flex: 0.5,
              fontWeight: "bold",
              textAlign: "center",
              color: "#4372CF",
            }}
          >
            Sr. No.
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "bold",
              textAlign: "center",
              alignSelf: "center",
              color: "#4372CF",
            }}
          >
            Distance {"\n"}
            <Text style={{ fontSize: 10, color: "#4372CF" }}>in kms</Text>
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "bold",
              textAlign: "center",
              color: "#4372CF",
            }}
          >
            Relaxed Hrs.
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: "bold",
              textAlign: "center",
              color: "#4372CF",
            }}
          >
            Rush Hrs.
          </Text>
        </View>

        {pricingData?.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
              alignItems: "center",
            }}
          >
            {/* Index Circle */}
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#0057FF",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {item.id}
              </Text>
            </View>

            <Text style={{ flex: 1, textAlign: "center" }}>
              {item.distance}
            </Text>
            <Text style={{ flex: 1, textAlign: "center" }}>{item.relaxed}</Text>
            <Text style={{ flex: 1, textAlign: "center" }}>{item.rush}</Text>
          </View>
        ))}
        <ScrollView style={{ padding: 16, backgroundColor: "#f8f9fa" }}>
          <Text style={{ padding: 5, fontSize: 13, fontWeight: "500" }}>
            Additional charges of ₹100/3 km after this.
          </Text>
          {/* <Card style={{ marginBottom: 16, backgroundColor: "#fff" }}>
          <Card.Content>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Fees, Tolls & Taxes
            </Text>
            <FlatList
              data={tolls}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 8,
                  }}
                >
                  <Text>{item.name}</Text>
                  <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
                </View>
              )}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Content style={{ marginBottom: 16, backgroundColor: "#fff" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Other Terms & Details
            </Text>
            <Divider style={{ marginVertical: 8 }} />
            <Text>• Waiting beyond 2 mins at stops: ₹4/min</Text>
            <Text>• Parking charges should be paid to the driver</Text>
            <Text>• Discounts apply on base fares only</Text>
            <Text>• Pickups available in Gurgaon, IGI Airport, and Delhi</Text>
            <Text>• Drops available within Gurgaon and Delhi</Text>
          </Card.Content>
        </Card> */}
          {TermsDetails()}
        </ScrollView>
      </ScrollView>
    </ScrollView>
  );
};

const PricingScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarIndicatorStyle: {
          backgroundColor: "#0057FF",
          height: 3,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        },
        tabBarActiveTintColor: "#0057FF", // Selected tab text color
        tabBarInactiveTintColor: "#666", // Unselected tab text color
      }}
    >
      <Tab.Screen name="Outstation" component={OutstationScreen} />
      <Tab.Screen name="Rentals" component={RentalsScreen} />
      <Tab.Screen name="Airport" component={AirportScreen} />
    </Tab.Navigator>
  );
};

export default PricingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: { fontSize: 20, fontWeight: "bold" },
});
