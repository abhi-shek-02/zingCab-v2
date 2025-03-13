import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Linking,
} from "react-native";
import LottieView from "lottie-react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HelpScreen = () => {
  // State for form inputs
  const handlePress = (type, value) => {
    let url = "";
    if (type === "phone") {
      url = `tel:${value}`; // Dial phone
    } else if (type === "email") {
      url = `mailto:${value}`; // Open email app
    } else if (type === "location") {
      url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        value
      )}`; // Open Google Maps
    }
    Linking.openURL(url).catch((err) =>
      console.error("Error opening link", err)
    );
  };
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email || !form.message) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    Alert.alert("Success", "Message Sent Successfully!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Lottie Animation */}
      <LottieView
        source={require("../assets/A3.json")}
        autoPlay
        loop
        style={styles.lottie}
      />

      {/* Contact Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.heading}>Contact Us</Text>

        {/* Phone */}
        <TouchableOpacity
          style={styles.contactRow}
          onPress={() => handlePress("phone", "+917003371343")}
        >
          <MaterialIcons name="phone" size={20} color="#2d78ff" />
          <Text style={styles.contactText}>+91 7003371343</Text>
        </TouchableOpacity>

        {/* Email */}
        <TouchableOpacity
          style={styles.contactRow}
          onPress={() => handlePress("email", "support@zingcab.in")}
        >
          <MaterialIcons name="email" size={20} color="#2d78ff" />
          <Text style={styles.contactText}>support@zingcab.in</Text>
        </TouchableOpacity>

        {/* Location */}
        <TouchableOpacity
          style={styles.contactRow}
          onPress={() =>
            handlePress("location", "Bagmari Road, Kolkata - 700054")
          }
        >
          <MaterialIcons name="location-on" size={20} color="#2d78ff" />
          <Text style={styles.contactText}>Bagmari Road, Kolkata - 700054</Text>
        </TouchableOpacity>
      </View>

      {/* User Input Form */}
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Get in Touch</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={form.name}
          onChangeText={(text) => handleChange("name", text)}
        />
        <TextInput
          placeholder="Phone"
          style={styles.input}
          keyboardType="phone-pad"
          value={form.phone}
          onChangeText={(text) => handleChange("phone", text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={form.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <TextInput
          placeholder="Message"
          style={[styles.input, styles.textArea]}
          value={form.message}
          onChangeText={(text) => handleChange("message", text)}
          multiline
          numberOfLines={4}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FA",
    // marginBottom: 100,
  },
  lottie: {
    width: "100%",
    height: 200,
    alignSelf: "center",
  },
  infoContainer: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  heading: {
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily: "Poppins_Medium",
    marginBottom: 10,
    textAlign: "center",
    color: "#2d78ff",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
    fontFamily: "Poppins_Regular",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    // flex: 1,
    height: 500,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CED4DA",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: "#F8F9FA",
    fontFamily: "Poppins_Regular",
  },

  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#2d78ff",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    // fontWeight: "bold",
    fontFamily: "Poppins_Medium",
  },
});
