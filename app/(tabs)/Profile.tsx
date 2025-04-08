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
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* User Profile Container - Shown at top if needed */}
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
              <Ionicons name="checkmark-circle" size={16} color="#4AFF83" />
              <Text style={styles.badgeText}>Certified Trader</Text>
            </View>
            <View style={styles.badge}>
              <Ionicons name="shield-checkmark" size={16} color="#4AFF83" />
              <Text style={styles.badgeText}>100% Traceable</Text>
            </View>
          </View>
        </View>

        {/* Fishing Equipment Container */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Fishing Equipment</Text>
          <View style={styles.sectionContent}>
            <View style={styles.equipmentHeader}>
              <Text style={styles.equipmentName}>Longline</Text>
              <Text style={styles.equipmentGrade}>A+</Text>
            </View>
            <ProgressBar progress={0.85} color="#4AFF83" style={styles.progressBar} />
            <Text style={styles.equipmentNote}>
              Eco-Score based on by-catch reduction and sustainable fishing practices
            </Text>
          </View>
        </View>

        {/* Leaderboard Container */}
        <View style={styles.sectionContainer}>
          <View style={styles.leaderboardHeader}>
            <Ionicons name="trophy" size={20} color="#FFBF00" style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Leaderboard</Text>
          </View>
          <View style={styles.leaderboardContent}>
            <Text style={styles.leaderboardText}>Your regional rank: #7</Text>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => handleRouteToLeaderboard()}
            >
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* EU Regulation Compliance Container */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>EU Regulation Compliance - Yellowfin Tuna</Text>
          <View style={styles.complianceStatus}>
            <Ionicons name="checkmark-circle" size={20} color="#4AFF83" />
            <Text style={styles.complianceStatusText}>Compliant</Text>
          </View>
          <View style={styles.complianceChecklist}>
            {[
              "Accredited Importer of Fish and Fishery/Aquatic Products",
              "Registered for Establishment of Shells and Shellcrafts",
              "Fishing Zone Authorization",
              "Quota Management",
            ].map((item, index) => (
              <View key={index} style={styles.complianceItem}>
                <Ionicons name="checkmark-circle" size={18} color="#4AFF83" />
                <Text style={styles.complianceItemText}>{item}</Text>
                {index !== 3 ? (
                  <TouchableOpacity style={styles.complianceViewButton}>
                    <Text style={styles.complianceViewButtonText}>View</Text>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.quotaUsage}>
                    <Text style={styles.quotaUsageText}>85% Used</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Rewards Program */}
        <View style={styles.sectionContainer}>
          <View style={styles.rewardsHeader}>
            <Text style={styles.sectionTitle}>Rewards Program</Text>
            <View style={styles.pointsBadge}>
              <Text style={styles.pointsBadgeText}>60 points</Text>
            </View>
          </View>
          
          {/* Upload Proof of Catch */}
          <View style={styles.uploadContainer}>
            <View style={styles.uploadHeader}>
              <Ionicons name="cloud-upload-outline" size={18} color="#FFFFFF" />
              <Text style={styles.uploadTitle}>Upload Proof of Catch</Text>
            </View>
            <Text style={styles.uploadDescription}>
              Upload your catch documentation to earn 50 points
            </Text>
            <TouchableOpacity 
              style={styles.uploadButton} 
              onPress={handleUploadDocumentation}
            >
              <Ionicons name="cloud-upload-outline" size={18} color="#FFFFFF" />
              <Text style={styles.uploadButtonText}>Upload Documentation</Text>
            </TouchableOpacity>
          </View>

          {/* Redeem Your Points */}
          <View style={styles.redeemContainer}>
            <Text style={styles.redeemTitle}>Redeem Your Points</Text>
            {[
              {
                icon: "document-text-outline",
                title: "Registration Certification",
                description: "Fast-track your municipal registration process",
                cost: "200 points",
              },
              {
                icon: "flash-outline",
                title: "Fuel Subsidy",
                description: "Get 5% discount on your next fuel purchase",
                cost: "500 points",
              },
              {
                icon: "ribbon-outline",
                title: "EU Certification Fee",
                description: "Claim your EU Certification for free",
                cost: "1000 points",
              },
            ].map((reward, index) => (
              <View key={index} style={styles.rewardItem}>
                <View style={styles.rewardItemContent}>
                  <View style={styles.rewardItemLeft}>
                    <Ionicons name={reward.icon} size={18} color="#FFFFFF" style={styles.rewardIcon} />
                    <View style={styles.rewardTextContainer}>
                      <Text style={styles.rewardTitle}>{reward.title}</Text>
                      <Text style={styles.rewardDescription}>{reward.description}</Text>
                      <View style={styles.rewardPointsContainer}>
                        <Text style={styles.rewardPoints}>{reward.cost}</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.playGameButton}>
                    <Text style={styles.playGameButtonText}>Play game</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* Recent Activity */}
          <View style={styles.recentActivityContainer}>
            <Text style={styles.recentActivityTitle}>Recent Activity</Text>
            <View style={styles.activityItem}>
              <Ionicons name="checkmark-circle" size={18} color="#4AFF83" />
              <View style={styles.activityDetails}>
                <Text style={styles.activityTitle}>Catch Verification Completed</Text>
                <Text style={styles.activityDate}>March 18, 2023</Text>
              </View>
              <Text style={styles.activityPoints}>+50 points</Text>
            </View>
            <View style={styles.activityItem}>
              <Ionicons name="remove-circle" size={18} color="#FFBF00" />
              <View style={styles.activityDetails}>
                <Text style={styles.activityTitle}>Registration Fee Discount Redeemed</Text>
                <Text style={styles.activityDate}>March 10, 2023</Text>
              </View>
              <Text style={styles.activityPointsNegative}>-200 points</Text>
            </View>
            <View style={styles.activityItem}>
              <Ionicons name="cloud-upload" size={18} color="#FFFFFF" />
              <View style={styles.activityDetails}>
                <Text style={styles.activityTitle}>Proof of Catch Uploaded</Text>
                <Text style={styles.activityDate}>March 5, 2023</Text>
              </View>
              <Text style={styles.activityPoints}>+25 points</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#0927ad", // Main dark blue background color
  },
  container: {
    flexGrow: 1,
    padding: 15,
  },
  // User Profile section
  profileContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#FFBF00",
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  userLocation: {
    fontSize: 16,
    color: "#E0E0E0",
    marginBottom: 5,
  },
  userBoat: {
    fontSize: 16,
    color: "#E0E0E0",
    marginBottom: 15,
  },
  badgesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  badgeText: {
    fontSize: 14,
    color: "#FFFFFF",
    marginLeft: 5,
  },

  // Common section container
  sectionContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 15,
    padding: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  sectionIcon: {
    marginRight: 8,
  },
  sectionContent: {
    marginTop: 5,
  },

  // Fishing Equipment section
  equipmentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  equipmentName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  equipmentGrade: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4AFF83",
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  equipmentNote: {
    fontSize: 14,
    color: "#E0E0E0",
    marginTop: 8,
  },

  // Leaderboard section
  leaderboardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 40,
  },
  leaderboardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leaderboardText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  viewButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  viewButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },

  // Compliance section
  complianceStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  complianceStatusText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4AFF83",
    marginLeft: 8,
  },
  complianceChecklist: {
    marginTop: 5,
  },
  complianceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    justifyContent: "space-between",
  },
  complianceItemText: {
    fontSize: 14,
    color: "#FFFFFF",
    marginLeft: 8,
    flex: 1,
  },
  complianceViewButton: {
    backgroundColor: "#FFBF00",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  complianceViewButtonText: {
    color: "#0927ad",
    fontSize: 14,
    fontWeight: "bold",
  },
  quotaUsage: {
    backgroundColor: "rgba(255, 191, 0, 0.3)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  quotaUsageText: {
    color: "#FFBF00",
    fontSize: 14,
    fontWeight: "500",
  },

  // Rewards section
  rewardsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  pointsBadge: {
    backgroundColor: "#FFBF00",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  pointsBadgeText: {
    color: "#0927ad",
    fontSize: 14,
    fontWeight: "bold",
  },

  // Upload section
  uploadContainer: {
    marginBottom: 20,
  },
  uploadHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 8,
  },
  uploadDescription: {
    fontSize: 14,
    color: "#E0E0E0",
    marginBottom: 12,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4269F5",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  uploadButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },

  // Redeem section
  redeemContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  redeemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  rewardItem: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
  },
  rewardItemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rewardItemLeft: {
    flexDirection: "row",
    flex: 1,
  },
  rewardIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  rewardTextContainer: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  rewardDescription: {
    fontSize: 14,
    color: "#E0E0E0",
    marginBottom: 8,
  },
  rewardPointsContainer: {
    alignSelf: "flex-start",
  },
  rewardPoints: {
    fontSize: 14,
    color: "#FFBF00",
    fontWeight: "500",
  },
  playGameButton: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  playGameButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },

  // Recent Activity section
  recentActivityContainer: {
    marginTop: 10,
  },
  recentActivityTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  activityDetails: {
    flex: 1,
    marginLeft: 8,
  },
  activityTitle: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  activityDate: {
    fontSize: 12,
    color: "#BBBBBB",
  },
  activityPoints: {
    fontSize: 14,
    color: "#4AFF83",
    fontWeight: "500",
  },
  activityPointsNegative: {
    fontSize: 14,
    color: "#FFBF00",
    fontWeight: "500",
  },
});