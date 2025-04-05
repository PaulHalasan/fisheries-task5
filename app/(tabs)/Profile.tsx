import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  const handleRouteToLeaderboard = () => {
    router.replace("/Leaderboard");
  };

  const handleUploadDocumentation = () => {
    console.log("Upload Documentation button clicked");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        {/* User Profile Container */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIESbrRy2Kc3trweDtLYkDeANMFWWlj5fiRQ&s" }}
            style={styles.userImage}
          />
          <Text style={styles.userName}>John Buyuyog Jr.</Text>
          <Text style={styles.userLocation}>From: Liloan, Cebu (Philippines)</Text>
          <Text style={styles.userBoat}>Boat Name: San Sebastian II</Text>
          <View style={styles.badgesContainer}>
            <View style={styles.badge}>
              <Ionicons name="checkmark-circle" size={16} color="green" />
              <Text style={styles.badgeText}>Certified Trader</Text>
            </View>
            <View style={styles.badge}>
              <Ionicons name="shield-checkmark" size={16} color="purple" />
              <Text style={styles.badgeText}>100% Traceable</Text>
            </View>
          </View>
        </View>

        {/* Fishing Equipment Container */}
        <View style={styles.equipmentContainer}>
          <Text style={styles.equipmentTitle}>Fishing Equipment</Text>
          <Text style={styles.equipmentName}>Cleto Reyes</Text>
          <Text style={styles.equipmentGrade}>Grading: A+</Text>
          <ProgressBar progress={0.85} color="green" style={styles.progressBar} />
          <Text style={styles.equipmentNote}>
            Note: Eco-Score based on by-catch reduction and sustainable fishing processes.
          </Text>
        </View>

        {/* Leaderboard Container */}
        <View style={styles.leaderboardContainer}>
          <Text style={styles.leaderboardText}>Your Regional Rank: #7</Text>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => handleRouteToLeaderboard()}
          >
            <Text style={styles.viewButtonText}>View</Text>
          </TouchableOpacity>
        </View>

        {/* EU Regulation Compliance Container */}
        <View style={styles.complianceContainer}>
          <Text style={styles.complianceTitle}>EU Regulation Compliance</Text>
          <View style={styles.complianceBadge}>
            <Ionicons name="checkmark-circle" size={16} color="green" />
            <Text style={styles.complianceBadgeText}>Compliant</Text>
          </View>
          <View style={styles.complianceChecklist}>
            {[
              "Accredited Importer of Fish and Fishery/Aquatic Products",
              "Registered for Establishment of Shells and Shellcrafts",
              "Fishing Zone Authorization",
              "Quota Management",
            ].map((item, index) => (
              <View key={index} style={styles.complianceItem}>
                <Ionicons name="checkmark-circle-outline" size={16} color="green" />
                <Text style={styles.complianceItemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Rewards Program */}
        <View style={styles.rewardsContainer}>
          <View style={styles.rewardsHeader}>
            <Text style={styles.rewardsTitle}>Rewards Program</Text>
            <View style={styles.pointsBadge}>
              <Text style={styles.pointsBadgeText}>60 pts</Text>
            </View>
          </View>
          <View style={styles.uploadContainer}>
            <Text style={styles.uploadTitle}>Upload Proof of Catch</Text>
            <Text style={styles.uploadDescription}>
              Upload your catch documentation to earn 50 points
            </Text>
            <TouchableOpacity style={styles.uploadButton} onPress={handleUploadDocumentation}>
              <Ionicons name="cloud-upload-outline" size={16} color="#fff" />
              <Text style={styles.uploadButtonText}>Upload Documentation</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.redeemContainer}>
            <Text style={styles.redeemTitle}>Redeem Your Points</Text>
            {[
              {
                title: "Registration Certification",
                description: "Fast-track your municipal registration process.",
                cost: "200 points",
              },
              {
                title: "Fuel Subsidy",
                description:
                  "Get 5% discount on your next fuel purchase (on approved/sanctioned fuel supplier/s).",
                cost: "500 points",
              },
              {
                title: "EU Certification Fee Voucher",
                description: "Claim your EU Certification for free.",
                cost: "1000 points",
              },
            ].map((reward, index) => (
              <View key={index} style={styles.rewardItem}>
                <Text style={styles.rewardTitle}>{reward.title}</Text>
                <Text style={styles.rewardDescription}>{reward.description}</Text>
                <View style={styles.rewardBadge}>
                  <Text style={styles.rewardBadgeText}>{reward.cost}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  profileContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
    maxWidth: 370,
    marginBottom: 15, // Consistent spacing between containers
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  userLocation: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  userBoat: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
  },
  badgesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  badgeText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 5,
  },
  equipmentContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
    maxWidth: 400,
    marginBottom: 15, // Consistent spacing
  },
  equipmentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  equipmentName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  equipmentGrade: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  equipmentNote: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
    textAlign: "left",
  },
  leaderboardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
    maxWidth: 400,
    marginBottom: 15, // Consistent spacing
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leaderboardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  viewButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  viewButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  complianceContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
    maxWidth: 370,
    marginBottom: 15, // Consistent spacing
  },
  complianceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  complianceBadge: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  complianceBadgeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginLeft: 5,
  },
  complianceChecklist: {
    marginTop: 10,
  },
  complianceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  complianceItemText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 10,
  },
  rewardsContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
    maxWidth: 400,
    marginBottom: 15, // Consistent spacing
  },
  rewardsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  rewardsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  pointsBadge: {
    backgroundColor: "#007BFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  pointsBadgeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  uploadContainer: {
    marginBottom: 20,
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  uploadDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
  redeemContainer: {
    marginTop: 20,
  },
  redeemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  rewardItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  rewardDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  rewardBadge: {
    backgroundColor: "#007BFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  rewardBadgeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});