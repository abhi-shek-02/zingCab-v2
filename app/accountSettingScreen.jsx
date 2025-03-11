import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const AccountSettingScreen = () => {
  const navigation = useNavigation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  console.log("isCollapsed", isCollapsed);
  return (
    <View style={styles.container}>
      {/* Header */}

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
        <Icon name="log-out" size={18} color="#F05E55" />
      </TouchableOpacity>

      {/* Delete Account Accordion */}
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setIsCollapsed(!isCollapsed)}
      >
        <Text style={styles.sectionTitle}>Delete your account</Text>
        <Icon
          name={isCollapsed ? "chevron-down" : "chevron-up"}
          size={22}
          color="#444"
        />
      </TouchableOpacity>

      {!isCollapsed ? (
        <View onPress={() => setIsCollapsed(!isCollapsed)}>
          <View style={styles.content}>
            <Text style={styles.greeting}>
              Sorry to see you go, <Text style={styles.username}>Abhishek</Text>
            </Text>

            <Text style={styles.description}>
              If you’re experiencing any issue, please give us the opportunity
              to help you by calling Customer Support at
              <Text
                style={styles.link}
                onPress={() => Linking.openURL("tel:+918007005005")}
              >
                {" "}
                +91 8007005005
              </Text>
              .
            </Text>

            <Text style={styles.description}>
              If you continue, you will be required to enter a verification code
              sent on your registered mobile number to confirm your identity.
              Thereafter, your account will be deleted immediately. BluSmart may
              continue to retain certain information as required or permitted by
              law.
            </Text>

            <Text style={styles.description}>
              Post account deletion, you will be able to create a new account.
              However, your
              <Text style={styles.highlight}>
                {" "}
                ride history, receipts, unused Blu Wallet credits and promos
              </Text>{" "}
              will be inaccessible.
            </Text>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default AccountSettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1976D2",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    // borderTopColor: "black",
    marginVertical: 10,
    shadowColor: "#2C66E3",
    shadowOffset: { width: 0, height: 2 }, // Increase height for a deeper shadow
    shadowOpacity: 0.3, // Adjust opacity for a more visible shadow
    shadowRadius: 4, // Keep radius similar to Android

    // Android Shadow
    // elevation: 2, // Increase for a stronger effect

    width: "100%",
  },
  logoutText: {
    color: "#F05E55",
    fontSize: 16,
    flex: 1,
    // fontWeight: "bold",
    fontFamily: "Poppins_Medium",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 15,
    // fontWeight: "bold",
    fontFamily: "Poppins_Medium",
    color: "#414141",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  greeting: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "#2C66E3",
    marginBottom: 10,
    fontFamily: "Poppins_Medium",
  },
  username: {
    color: "#2C66E3",
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
    fontFamily: "Poppins_Regular",
  },
  link: {
    color: "#2C66E3",
    // fontWeight: "bold",
    fontFamily: "Poppins_Regular",
  },
  highlight: {
    color: "#1E88E5",
    // fontWeight: "bold",
    fontFamily: "Poppins_Regular",
  },
  continueButton: {
    backgroundColor: "#2C66E3",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    // fontWeight: "bold",
    fontFamily: "Poppins_Medium",
  },
});
