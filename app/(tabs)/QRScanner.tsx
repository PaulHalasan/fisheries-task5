import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from "react-native";

export default function QRScanner() {
  const scanLineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanLineAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scanLineAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scanLineAnim]);

  const scanLineTranslateY = scanLineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  const handleScanQRCode = () => {
    console.log("Scan QR Code button pressed");
  };

  const handleGenerateQRCode = () => {
    console.log("Generate QR Code button pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan your QR Code</Text>

      <View style={styles.scannerFrame}>
        {/* Static QR code placeholder (replace with camera later) */}
        <Image
          source={require("../../assets/fake-qr.png")} // Use your QR placeholder image
          style={styles.qrCode}
        />
        {/* Animated Scan Line */}
        <Animated.View
          style={[
            styles.scanLine,
            { transform: [{ translateY: scanLineTranslateY }] },
          ]}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleScanQRCode}>
        <Ionicons name="scan" size={20} color="#fff" />
        <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleGenerateQRCode}>
        <Ionicons name="qr-code" size={20} color="#fff" />
        <Text style={styles.buttonText}>Generate QR Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "linear-gradient(to bottom right, #004aad, #007aff)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#003f7d",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  scannerFrame: {
    width: 220,
    height: 220,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#00bfff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    marginBottom: 30,
  },
  qrCode: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  scanLine: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 3,
    backgroundColor: "#FFD700",
    opacity: 0.8,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFC107",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 15,
    elevation: 3,
  },
  buttonText: {
    color: "#003f7d",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
