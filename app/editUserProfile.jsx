import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const EditUserProfile = () => {
  const [gender, setGender] = useState("Male");
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(true);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <View style={{ alignItems: "center", marginTop: 50 }}>
        <TouchableOpacity>
          <View
            style={{
              position: "absolute",
              bottom: 5,
              right: 5,
              backgroundColor: "#1976D2",
              borderRadius: 15,
              padding: 5,
            }}
          >
            <Icon name="edit" size={16} color="white" />
          </View>
        </TouchableOpacity>
      </View> */}

      {/* Form Fields */}
      <View style={{ padding: 20 }}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={{
            backgroundColor: "transparent",
            paddingVertical: 10,
            fontSize: 16,
            borderBottomWidth: 1,
            borderBottomColor: "silver", // Changes color on focus
            transition: "border-bottom-color 0.3s ease", // Smooth transition (works in web)
            fontFamily: "Poppins_Regular",
          }}
          placeholder="Enter your display name"
          placeholderTextColor="#aaa"
          value={text}
          onChangeText={setText}
        />

        <Text style={styles.label}> Display Name</Text>
        <TextInput
          style={{
            backgroundColor: "transparent",
            paddingVertical: 10,
            fontSize: 16,
            borderBottomWidth: 1,
            borderBottomColor: "silver", // Changes color on focus
            transition: "border-bottom-color 0.3s ease", // Smooth transition (works in web)
            fontFamily: "Poppins_Regular",
          }}
          placeholder="Enter your display name"
          placeholderTextColor="#aaa"
          value={text}
          onChangeText={setText}
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={{
            backgroundColor: "transparent",
            paddingVertical: 10,
            fontSize: 16,
            borderBottomWidth: 1,
            borderBottomColor: "silver", // Changes color on focus
            transition: "border-bottom-color 0.3s ease", // Smooth transition (works in web)
            fontFamily: "Poppins_Regular",
          }}
          placeholder="Enter your phone number"
          placeholderTextColor="#aaa"
          value={text}
          onChangeText={setText}
          editable={false}
        />

        <Text style={styles.label}> Email</Text>
        <TextInput
          style={{
            backgroundColor: "transparent",
            paddingVertical: 10,
            fontSize: 16,
            borderBottomWidth: 1,
            borderBottomColor: "silver", // Changes color on focus
            transition: "border-bottom-color 0.3s ease", // Smooth transition (works in web)
            fontFamily: "Poppins_Regular",
          }}
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
          value={text}
          onChangeText={setText}
        />

        <Text style={styles.label}>Gender *</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 10,
            paddingVertical: 10,
          }}
        >
          {["Male", "Female", "Other"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.genderButton,
                gender === item && { backgroundColor: "#2d78ff" },
              ]}
              onPress={() => setGender(item)}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === item && { color: "white" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Date of birth</Text>
        <TextInput
          style={{
            backgroundColor: "transparent",
            paddingVertical: 10,
            fontSize: 16,
            borderBottomWidth: 1,
            borderBottomColor: "silver", // Changes color on focus
            transition: "border-bottom-color 0.3s ease", // Smooth transition (works in web)
            fontFamily: "Poppins_Regular",
          }}
          placeholder="Enter your date of birth"
          placeholderTextColor="#aaa"
          value={text}
          onChangeText={setText}
        />

        <Text style={styles.infoText}>
          Watch out for exciting offers on your birthday. Women's Day, Father's
          Day, and other special days 🎉
        </Text>

        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = {
  label: {
    fontSize: 14,
    // fontWeight: "bold",
    fontFamily: "Poppins_Medium",
    marginTop: 15,
    color: "#545A75",
    // padding: 7,
  },
  value: { fontSize: 16, color: "#333", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    fontSize: 14,
    color: "#000",
    marginBottom: 10,
  },
  genderButton: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#2d78ff",
    borderRadius: 8,
  },
  genderText: { fontSize: 14, color: "#2d78ff" },
  datePicker: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  infoText: { fontSize: 12, color: "#555", marginBottom: 20, marginTop: 10 },
  updateButton: {
    backgroundColor: "#2d78ff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  updateButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
};

export default EditUserProfile;
