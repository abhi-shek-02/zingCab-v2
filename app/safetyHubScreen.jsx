import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const safetyFeatures = [
  {
    id: "audio",
    title: "Audio Recording",
    description: "Report any safety-related incidents by recording audio",
    icon: { name: "multitrack-audio", library: "MaterialIcons" },
  },
  {
    id: "trip",
    title: "Trip Sharing",
    description: "Share your trip details in real-time with friends and family",
    icon: { name: "road-variant", library: "MaterialCommunityIcons" },
  },
  {
    id: "police",
    title: "Police Assistance",
    description: "Get direct support from local police in case of an emergency",
    icon: { name: "local-police", library: "MaterialIcons" },
  },
  {
    id: "gps",
    title: "GPS Tracking",
    description: "Enjoy real-time GPS tracking for a secure journey",
    icon: { name: "location-history", library: "MaterialIcons" },
  },
  {
    id: "name",
    title: "Change Display Name",
    description: "Protect your privacy by setting a display name",
    icon: { name: "supervised-user-circle", library: "MaterialIcons" },
  },
  {
    id: "support",
    title: "24/7 Safety Support",
    description: "Our team is available round the clock to assist you",
    icon: { name: "support-agent", library: "MaterialIcons" },
  },
  //   {
  //     id: "masking",
  //     title: "Phone Number Masking",
  //     description: "Keep your phone number private and protected",
  //     icon: { name: "road-variant", library: "MaterialCommunityIcons" },
  //   },
  {
    id: "otp",
    title: "OTP Verification",
    description: "Ensure ride authenticity with a One-Time Password",
    icon: { name: "phone-in-talk", library: "MaterialCommunityIcons" },
  },
];

const SafetyHubScreen = () => {
  const navigation = useNavigation();
  const getIconComponent = (icon) => {
    if (typeof icon === "string") {
      return <Image source={{ uri: icon }} style={styles.imageIcon} />;
    }

    switch (icon.library) {
      case "MaterialIcons":
        return (
          <MaterialIcons
            name={icon.name}
            size={30}
            color="#2C66E3"
            style={styles.icon}
          />
        );
      case "MaterialCommunityIcons":
        return (
          <MaterialCommunityIcons
            name={icon.name}
            size={30}
            color="#2C66E3"
            style={styles.icon}
          />
        );
      case "FontAwesome6":
        return (
          <FontAwesome6
            name={icon.name}
            size={30}
            color="#2C66E3"
            style={styles.icon}
          />
        );
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={safetyFeatures}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={{ position: "relative", alignItems: "center" }}>
            {/* Banner Image */}
            <Image
              source={{
                uri: "https://media.istockphoto.com/id/1470035625/photo/driver-transporting-a-business-man-on-a-crowdsourced-taxi.jpg?s=612x612&w=0&k=20&c=HbVWN87JGim9g0CDhh2NHPM8oZ1g4qVGx86vxJ5RM24=",
              }}
              style={{
                width: "100%",
                height: 250,
                resizeMode: "cover",
                // borderBottomLeftRadius: 20,
                // borderBottomRightRadius: 20,
              }}
            />

            {/* Text Overlay */}
            {/* <View
              style={{
                position: "absolute",
                bottom: 20,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign: "center",
                  textShadowColor: "rgba(0, 0, 0, 0.75)",
                  textShadowOffset: { width: 2, height: 2 },
                  textShadowRadius: 5,
                }}
              >
                Your Safety Matters
              </Text>
            </View> */}

            {/* Safety Description */}
            <View style={{ padding: 20, alignItems: "center" }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#2C66E3" }}
              >
                Prioritizing Your Security
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#666",
                  textAlign: "center",
                  marginTop: 5,
                  lineHeight: 22,
                }}
              >
                We are committed to ensuring your rides are secure and
                stress-free. With real-time tracking, emergency support, and
                privacy features, we make your journey safer every step of the
                way.
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("SafetyDetail", {
                id: item.id,
                title: item.title,
                description: item.description,
              })
            }
          >
            {getIconComponent(item.icon)}
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SafetyHubScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA", marginBottom: 95 },
  bannerImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginBottom: 15,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 22,
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#2C66E3",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: { width: 40, height: 40, marginRight: 10 },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: "400", color: "#333" },
  description: { fontSize: 11, color: "#666" },
});
