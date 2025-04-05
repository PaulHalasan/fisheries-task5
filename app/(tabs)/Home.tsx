import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Hourly"); // State to track the active tab
  const [activeFishingTab, setActiveFishingTab] = useState("Nearby");

  const handleLogNewCatch = () => {
    router.push("/LogPage"); // Navigate to LogPage
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Weather Container */}
      <View style={styles.weatherContainer}>
        <Text style={styles.weatherHeader}>Weather</Text>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a city or municipality"
            placeholderTextColor="#888"
          />
        </View>

        {/* Tabs for Hourly and Weekly Forecast */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Hourly" && styles.activeTab]}
            onPress={() => setActiveTab("Hourly")}
          >
            <Text style={[styles.tabText, activeTab === "Hourly" && styles.activeTabText]}>
              Hourly Forecast
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Weekly" && styles.activeTab]}
            onPress={() => setActiveTab("Weekly")}
          >
            <Text style={[styles.tabText, activeTab === "Weekly" && styles.activeTabText]}>
              Weekly Forecast
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content for Hourly and Weekly Forecast */}
        {activeTab === "Hourly" ? (
          <View style={styles.forecastContainer}>
            <Text style={styles.forecastText}>
              <Ionicons name="sunny" size={16} color="#FFA500" /> 10:00 AM - Sunny, 28°C
            </Text>
            <Text style={styles.forecastText}>
              <Ionicons name="cloudy" size={16} color="#888" /> 11:00 AM - Cloudy, 27°C
            </Text>
            <Text style={styles.forecastText}>
              <Ionicons name="rainy" size={16} color="#00BFFF" /> 12:00 PM - Rainy, 25°C
            </Text>
          </View>
        ) : (
          <View style={styles.forecastContainer}>
            <Text style={styles.forecastText}>
              <Ionicons name="sunny" size={16} color="#FFA500" /> Monday - Sunny, High: 30°C, Low: 22°C
            </Text>
            <Text style={styles.forecastText}>
              <Ionicons name="cloudy" size={16} color="#888" /> Tuesday - Cloudy, High: 28°C, Low: 21°C
            </Text>
            <Text style={styles.forecastText}>
              <Ionicons name="rainy" size={16} color="#00BFFF" /> Wednesday - Rainy, High: 26°C, Low: 20°C
            </Text>
          </View>
        )}
      </View>

      {/* Log New Catch Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogNewCatch}>
        <Ionicons name="add-circle-outline" size={24} color="white" />
        <Text style={styles.buttonText}>Log New Catch</Text>
      </TouchableOpacity>

      {/* Fishing Spot Container */}
      <View style={styles.fishingSpotContainer}>
        <Text style={styles.fishingSpotHeader}>Fishing Spot</Text>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a fishing spot"
            placeholderTextColor="#888"
          />
        </View>

        {/* Tabs for Nearby Spots and Favorites */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeFishingTab === "Nearby" && styles.activeTab]}
            onPress={() => setActiveFishingTab("Nearby")}
          >
            <Text style={[styles.tabText, activeFishingTab === "Nearby" && styles.activeTabText]}>
              Nearby Spots
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeFishingTab === "Favorites" && styles.activeTab]}
            onPress={() => setActiveFishingTab("Favorites")}
          >
            <Text style={[styles.tabText, activeFishingTab === "Favorites" && styles.activeTabText]}>
              Favorites
            </Text>
          </TouchableOpacity>
        </View>

        {/* Fishing Spot Details */}
        {activeFishingTab === "Nearby" ? (
          <View style={styles.spotContainer}>
            <Text style={styles.spotName}>Lake Paradise</Text>
            <Text style={styles.spotDetail}>Distance: 5 km</Text>
            <Text style={styles.spotDetail}>Fish Types: Bass, Trout</Text>
            <Text style={styles.spotDetail}>Best Time: 6:00 AM - 9:00 AM</Text>
            <View style={[styles.tideBadge, styles.risingTide]}>
              <Text style={styles.tideText}>Rising Tide</Text>
            </View>
            <TouchableOpacity style={styles.directionsButton}>
              <Ionicons name="map" size={16} color="white" />
              <Text style={styles.directionsButtonText}>Directions</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.spotContainer}>
            <Text style={styles.spotName}>Ocean Breeze</Text>
            <Text style={styles.spotDetail}>Distance: 10 km</Text>
            <Text style={styles.spotDetail}>Fish Types: Salmon, Tuna</Text>
            <Text style={styles.spotDetail}>Best Time: 4:00 PM - 7:00 PM</Text>
            <View style={[styles.tideBadge, styles.highTide]}>
              <Text style={styles.tideText}>High Tide</Text>
            </View>
            <TouchableOpacity style={styles.directionsButton}>
              <Ionicons name="map" size={16} color="white" />
              <Text style={styles.directionsButtonText}>Directions</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },
  weatherContainer: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  weatherHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#007BFF",
  },
  tabText: {
    fontSize: 16,
    color: "#888",
  },
  activeTabText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  forecastContainer: {
    marginTop: 10,
  },
  forecastText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  fishingSpotContainer: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  fishingSpotHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  spotContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 15,
  },
  spotName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  spotDetail: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  tideBadge: {
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  risingTide: {
    backgroundColor: "green",
  },
  highTide: {
    backgroundColor: "orange",
  },
  lowTide: {
    backgroundColor: "red",
  },
  tideText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  directionsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    width: "35%",
  },
  directionsButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});