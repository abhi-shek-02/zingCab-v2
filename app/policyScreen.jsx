import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

// Terms & Conditions Component
const TermsAndConditions = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Terms of Use</Text>
    <Text style={styles.subheading}>Effective Date: 19th December, 2024</Text>
    <Text style={styles.text}>
      Welcome to ZingCab! ZingCab is owned by ZingCab OPC Private Limited and
      any reference herein to ZingCab, its application, website, or services
      shall be deemed to have a reference to ZingCab OPC Private Limited
      ("zingcab", “we”, “us”, or “our”).
    </Text>
    <Text style={styles.text}>
      We facilitate low-cost intercity cab hires through our technology-based
      service that allows commuters to travel with our registered cab drivers
      and agencies at half the rates and save their pockets from paying for
      empty return journeys (“Services”).
    </Text>
    <Text style={styles.text}>
      These Terms of Use are the agreement between the cab drivers and ZingCab
      for using or accessing our Services.
    </Text>
  </View>
);

// Privacy Policy Component
const PrivacyPolicy = () => (
  <ScrollView
    style={{
      flex: 1,
      backgroundColor: "#fff",
      padding: 16,
    }}
  >
    <Text
      style={{
        fontSize: 22,
        // fontWeight: "700",
        color: "#2C66E3",
        textAlign: "center",
        marginBottom: 10,
        fontFamily: "Poppins_Medium",
      }}
    >
      Privacy Policy
    </Text>

    <Text
      style={{
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
        marginBottom: 10,
        fontFamily: "Poppins_Regular",
      }}
    >
      At ZingCab, we value your privacy and are committed to protecting your
      personal information. This Privacy Policy outlines how we collect, use,
      disclose, and safeguard your data when you use our services.
    </Text>

    <Text
      style={{
        fontSize: 18,
        // fontWeight: "600",
        color: "#333",
        marginTop: 20,
        marginBottom: 5,
        fontFamily: "Poppins_Medium",
      }}
    >
      Information We Collect
    </Text>
    <Text
      style={{
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
        fontFamily: "Poppins_Regular",
      }}
    >
      We may collect personal details such as your name, contact information,
      location data, and payment details when you use our platform. We also
      gather information related to your ride preferences, trip history, and
      interactions with our app and website.
    </Text>

    <Text
      style={{
        fontSize: 18,
        // fontWeight: "600",
        color: "#333",
        marginTop: 20,
        marginBottom: 5,
        fontFamily: "Poppins_Medium",
      }}
    >
      How We Use Your Information
    </Text>
    <Text style={{ fontSize: 14, color: "#555", lineHeight: 20 }}>
      The information we collect is used to:
    </Text>
    <Text style={{ fontSize: 14, color: "#555", marginLeft: 10 }}>
      • Provide and improve our cab booking services.
    </Text>
    <Text style={{ fontSize: 14, color: "#555", marginLeft: 10 }}>
      • Ensure customer support and address queries.
    </Text>
    <Text style={{ fontSize: 14, color: "#555", marginLeft: 10 }}>
      • Process payments securely.
    </Text>
    <Text style={{ fontSize: 14, color: "#555", marginLeft: 10 }}>
      • Enhance user experience through personalization.
    </Text>
    <Text style={{ fontSize: 14, color: "#555", marginLeft: 10 }}>
      • Ensure safety, fraud prevention, and compliance with legal obligations.
    </Text>

    <Text
      style={{
        fontSize: 18,
        // fontWeight: "600",
        color: "#333",
        marginTop: 20,
        marginBottom: 5,
        fontFamily: "Poppins_Medium",
      }}
    >
      Data Security
    </Text>
    <Text
      style={{
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
        fontFamily: "Poppins_Regular",
      }}
    >
      We implement stringent security measures to protect your data from
      unauthorized access, alteration, or disclosure. Our database is stored on
      secure servers with encryption and firewall protection. However, no
      security system is entirely foolproof, and we cannot guarantee absolute
      security of your information.
    </Text>

    <Text
      style={{
        fontSize: 18,
        // fontWeight: "600",
        fontFamily: "Poppins_Medium",
        color: "#333",
        marginTop: 20,
        marginBottom: 5,
      }}
    >
      Grievance Redressal
    </Text>
    <Text
      style={{
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
        fontFamily: "Poppins_Regular",
      }}
    >
      If you have any concerns regarding our privacy practices or data security,
      please contact our designated Grievance Officer:
    </Text>
    <Text
      style={{
        fontSize: 14,
        color: "#007AFF",
        fontWeight: "600",
        marginTop: 5,
        fontFamily: "Poppins_Regular",
      }}
    >
      📍 ZingCab OPC Private Limited{"\n"}
      Bagmari Road, Kolkata - 700054{"\n"}
      📧 support@zingcab.in{"\n"}
      📞 7003371343
    </Text>

    <Text
      style={{
        fontSize: 18,
        // fontWeight: "600",
        fontFamily: "Poppins_Medium",
        color: "#333",
        marginTop: 20,
        marginBottom: 5,
      }}
    >
      Changes to This Privacy Policy
    </Text>
    <Text
      style={{
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
        fontFamily: "Poppins_Regular",
      }}
    >
      We may update this Privacy Policy from time to time. Any changes will be
      posted on our app and website, and we encourage you to review the policy
      periodically to stay informed about how we are protecting your data.
    </Text>

    <Text
      style={{
        fontSize: 12,
        color: "#888",
        textAlign: "center",
        marginTop: 20,
        fontFamily: "Poppins_Regular",
      }}
    >
      Last Updated: 19th December 2024
    </Text>
  </ScrollView>
);

// Cancellation & Waiting Policy Component
const CancellationPolicy = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Cancellation & Waiting Policy</Text>
    <Text style={styles.text}>
      We understand that plans change. Here are our guidelines regarding
      cancellations and waiting times.
    </Text>
  </View>
);

// Main Policy Screen with Tabs
function PolicyScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#2C66E3",
          tabBarIndicatorStyle: { backgroundColor: "#2C66E3" },
          tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
          tabBarStyle: { backgroundColor: "#fff" },
        }}
      >
        <Tab.Screen name="Privacy" component={PrivacyPolicy} />
        <Tab.Screen name="Terms" component={TermsAndConditions} />
        <Tab.Screen name="Cancellation" component={CancellationPolicy} />
      </Tab.Navigator>
    </View>
  );
}

export default PolicyScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily: "Poppins_Medium",
    color: "#2d78ff",
    marginBottom: 10,
    // color: "#black",
  },
  subheading: {
    fontSize: 14,
    // fontWeight: "600",
    fontFamily: "Poppins_Regular",
    color: "gray",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
    fontFamily: "Poppins_Regular",
  },
});
