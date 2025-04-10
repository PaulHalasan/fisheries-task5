import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Certifications() {
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>John Buyuyog Jr.'s Certificates</Text>
      <View style={styles.certificatesContainer}>
        {/* Certificate 1 */}
        <TouchableOpacity
          style={styles.certificateItem}
          onPress={() => openLink("https://www.bfar.da.gov.ph/downloadable-forms/")}
        >
          <Ionicons name="ribbon-outline" size={24} color="#FFD700" style={styles.icon} />
          <Text style={styles.certificateText}>
            Accredited Importer of Fish and Fishery/Aquatic Products
          </Text>
        </TouchableOpacity>

        {/* Certificate 2 */}
        <TouchableOpacity
          style={styles.certificateItem}
          onPress={() => openLink("https://www.bfar.da.gov.ph/downloadable-forms/")}
        >
          <Ionicons name="shield-checkmark-outline" size={24} color="#4AFF83" style={styles.icon} />
          <Text style={styles.certificateText}>
            Registered for Establishments of Shells and Shellcrafts
          </Text>
        </TouchableOpacity>

        {/* Certificate 3 */}
        <TouchableOpacity
          style={styles.certificateItem}
          onPress={() => openLink("https://www.bfar.da.gov.ph/downloadable-forms/")}
        >
          <Ionicons name="medal-outline" size={24} color="#FFBF00" style={styles.icon} />
          <Text style={styles.certificateText}>Traders Badge Holder</Text>
        </TouchableOpacity>

        {/* Notice */}
        <Text style={styles.notice}>
          Official certifications can be verified on the official NGO websites that awarded them.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0927ad",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    textAlign: "center",
  },
  certificatesContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    padding: 20,
  },
  certificateItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  certificateText: {
    fontSize: 16,
    color: "#FFFFFF",
    flex: 1,
  },
  notice: {
    marginTop: 20,
    fontSize: 14,
    color: "#FFBF00",
    textAlign: "center",
    fontStyle: "italic",
  },
});