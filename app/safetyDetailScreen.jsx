// safetyDetailScreen
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const SafetyDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id, title, description } = route.params;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      {/* Content */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default SafetyDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  backButton: { marginBottom: 20 },
  backText: { fontSize: 16, color: "#007bff" },
  title: { fontSize: 22, fontWeight: "bold", color: "#333", marginBottom: 10 },
  description: { fontSize: 16, color: "#555" },
});
