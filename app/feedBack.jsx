import React, { useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import CustomLoader from "../components/ui/CustomLoader";

const FeedBack = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Ensures the loader stays for at least 2 seconds
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://forms.gle/yFY9A1SQVszz1gcq7" }}
        onLoadStart={() => setLoading(true)}
        onLoad={handleLoad} // Calls the function with delay
      />

      {loading && (
        <View style={styles.loader}>
          <CustomLoader size="large" color="#0057FF" />
        </View>
      )}
    </View>
  );
};

export default FeedBack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
});
