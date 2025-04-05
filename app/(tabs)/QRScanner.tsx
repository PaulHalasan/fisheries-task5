import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function QRScanner() {
  const handleScanQRCode = () => {
    // Placeholder for Scan QR Code functionality
    console.log("Scan QR Code button pressed");
  };

  const handleGenerateQRCode = () => {
    // Placeholder for Generate QR Code functionality
    console.log("Generate QR Code button pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to QR Scanner Page!</Text>

      {/* Scan QR Code Button */}
      <TouchableOpacity style={styles.button} onPress={handleScanQRCode}>
        <Ionicons name="scan" size={24} color="white" />
        <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>

      {/* Generate QR Code Button */}
      <TouchableOpacity style={styles.button} onPress={handleGenerateQRCode}>
        <Ionicons name="qr-code" size={24} color="white" />
        <Text style={styles.buttonText}>Generate QR Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row", // Align icon and text horizontally
    alignItems: "center", // Center items vertically
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});