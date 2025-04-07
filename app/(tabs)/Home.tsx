import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Hourly");
  const [activeFishingTab, setActiveFishingTab] = useState("Nearby");
  const [activeTimeTab, setActiveTimeTab] = useState("Now");
  const [activeAnalyticsTab, setActiveAnalyticsTab] = useState("Weekly");

  const handleLogNewCatch = () => {
    router.push("/LogPage");
  };

  // Weather forecast data
  const weatherData = [
    { 
      time: "12 AM", 
      temp: "19°", 
      icon: require("../../assets/weather/cloudy.png"), 
      precipitation: "30%", 
      active: false 
    },
    { 
      time: "Now", 
      temp: "19°", 
      icon: require("../../assets/weather/cloudy.png"), 
      precipitation: "", 
      active: true 
    },
    { 
      time: "2 AM", 
      temp: "18°", 
      icon: require("../../assets/weather/rainy-day.png"), 
      precipitation: "", 
      active: false 
    },
    { 
      time: "3 AM", 
      temp: "19°", 
      icon: require("../../assets/weather/rainy-day.png"), 
      precipitation: "", 
      active: false 
    },
    { 
      time: "4 AM", 
      temp: "19°", 
      icon: require("../../assets/weather/cloudy.png"), 
      precipitation: "", 
      active: false 
    },
  ];

  // Fishing spots data
  const fishingSpots = [
    { 
      name: "Blue Harbor", 
      distance: "3.2 mi", 
      fishTypes: "Tuna, Mackarel", 
      bestTime: "2AM - 6AM", 
      tide: "Rising",
      tideColor: "#4CD964",
      percentage: "78%"
    },
    { 
      name: "Rocky Point", 
      distance: "5.7 mi", 
      fishTypes: "Skipjack, Snapper", 
      bestTime: "7PM - 11PM", 
      tide: "High",
      tideColor: "#FF9500",
      percentage: "65%"
    },
    { 
      name: "Sunset Pier", 
      distance: "4.2 mi", 
      fishTypes: "Flounder, Crab", 
      bestTime: "4PM - 9PM", 
      tide: "Low",
      tideColor: "#FF3B30",
      percentage: "53%"
    }
  ];

  // Best catch times data with fish names and images
  const bestCatchTimes = [
    { 
      time: "12 AM", 
      fish: "Flounder", 
      chance: "65%", 
      active: false, 
      color: "#FFD700",
      image: require("../../assets/fish/flounder.png")
    },
    { 
      time: "Now", 
      fish: "Clownfish", 
      chance: "15%", 
      active: true, 
      color: "#FF6347",
      image: require("../../assets/fish/clownfish.png")
    },
    { 
      time: "2 AM", 
      fish: "Tuna", 
      chance: "75%", 
      active: false, 
      color: "#00BFFF",
      image: require("../../assets/fish/yellowfin-tuna.png")
    },
    { 
      time: "3 AM", 
      fish: "Bass", 
      chance: "85%", 
      active: false, 
      color: "#808080",
      image: require("../../assets/fish/bass.png")
    },
    { 
      time: "4 AM", 
      fish: "Crab", 
      chance: "88%", 
      active: false, 
      color: "#FF4500",
      image: require("../../assets/fish/crab.png")
    },
  ];

  // Tide data for chart
  const tideData = {
    labels: ["12AM", "6AM", "12PM", "6PM", "12AM"],
    datasets: [
      {
        data: [43.91, 52.14, 39.57, 50.86, 47.5],
        color: () => `rgba(255, 204, 0, 1)`,
        strokeWidth: 2
      }
    ]
  };

  // Catch analytics data
  const catchAnalyticsData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [90, 80, 90, 60, 50, 10, 55],
        color: () => `rgba(50, 100, 200, 0.6)`,
        strokeWidth: 2
      },
      {
        data: [25, 45, 55, 30, 55, 85, 40],
        color: () => `rgba(255, 204, 0, 0.6)`,
        strokeWidth: 2
      }
    ]
  };

  return (
    <View style={styles.mainContainer}>  
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* Weather Container */}
          <View style={styles.blueContainer}>
            <Text style={styles.headerText}>Weather</Text>
            
            <View style={styles.searchBox}>
              <Ionicons name="search" size={20} color="#fff" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search for a city or airport"
                placeholderTextColor="#8AA1D0"
              />
            </View>

            {/* Tabs for Hourly and Weekly Forecast */}
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                style={[styles.weatherTab, activeTab === "Hourly" && styles.activeWeatherTab]}
                onPress={() => setActiveTab("Hourly")}
              >
                <Text style={[styles.weatherTabText, activeTab === "Hourly" && styles.activeWeatherTabText]}>
                  Hourly Forecast
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.weatherTab, activeTab === "Weekly" && styles.activeWeatherTab]}
                onPress={() => setActiveTab("Weekly")}
              >
                <Text style={[styles.weatherTabText, activeTab === "Weekly" && styles.activeWeatherTabText]}>
                  Weekly Forecast
                </Text>
              </TouchableOpacity>
            </View>

            {/* Weather Forecast Cards */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.weatherCardsContainer}>
              {weatherData.map((item, index) => (
                <View 
                  key={index} 
                  style={[
                    styles.weatherCard, 
                    item.active && styles.activeWeatherCard
                  ]}
                >
                  <Text style={styles.weatherCardTime}>{item.time}</Text>
                  <Image source={item.icon} style={styles.weatherIcon} />
                  {item.precipitation && <Text style={styles.precipitationText}>{item.precipitation}</Text>}
                  <Text style={styles.temperatureText}>{item.temp}</Text>
                </View>
              ))}
            </ScrollView>

            {/* Log New Catch Button */}
            <TouchableOpacity style={styles.logButton} onPress={handleLogNewCatch}>
              <Ionicons name="add-circle-outline" size={24} color="white" />
              <Text style={styles.logButtonText}>Log New Catch</Text>
            </TouchableOpacity>
          </View>

          {/* Fishing Spots Container */}
          <View style={styles.blueContainer}>
            <View style={styles.searchBox}>
              <Ionicons name="search" size={20} color="#fff" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search for a fishing spot"
                placeholderTextColor="#8AA1D0"
              />
            </View>

            {/* Tabs for Nearby Spots and Favorites */}
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                style={[styles.weatherTab, activeFishingTab === "Nearby" && styles.activeWeatherTab]}
                onPress={() => setActiveFishingTab("Nearby")}
              >
                <Text style={[styles.weatherTabText, activeFishingTab === "Nearby" && styles.activeWeatherTabText]}>
                  Nearby spot
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.weatherTab, activeFishingTab === "Favorites" && styles.activeWeatherTab]}
                onPress={() => setActiveFishingTab("Favorites")}
              >
                <Text style={[styles.weatherTabText, activeFishingTab === "Favorites" && styles.activeWeatherTabText]}>
                  Favorites
                </Text>
              </TouchableOpacity>
            </View>

            {/* Fishing Spot Cards */}
            {fishingSpots.map((spot, index) => (
              <View key={index} style={styles.fishingSpotCard}>
                <View style={styles.fishingSpotHeader}>
                  <Text style={styles.fishingSpotName}>{spot.name}</Text>
                  <Text style={styles.fishingSpotDistance}>{spot.distance}</Text>
                </View>
                
                <View style={styles.fishingSpotDetails}>
                  <Text style={styles.fishingSpotText}>Current: {spot.fishTypes}</Text>
                  <View style={[styles.percentageBadge, {backgroundColor: spot.tideColor}]}>
                    <Text style={styles.percentageText}>{spot.percentage}</Text>
                  </View>
                </View>
                
                <View style={styles.fishingSpotDetails}>
                  <Text style={styles.fishingSpotText}>Best time to catch: {spot.bestTime}</Text>
                  <Text style={styles.tideText}>Tide: <Text style={{color: spot.tideColor}}>{spot.tide}</Text></Text>
                </View>
                
                <View style={styles.fishingSpotActions}>
                  <TouchableOpacity style={styles.directionsButton}>
                    <Ionicons name="navigate" size={16} color="white" />
                    <Text style={styles.directionsText}>Directions</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity>
                    <Text style={styles.seeMoreText}>See more..</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* Best Catch Times Container */}
          <View style={styles.blueContainer}>
            <Text style={styles.headerText}>Best Catch Times</Text>
            
            {/* Fish Time Cards with Images */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.weatherCardsContainer}>
              {bestCatchTimes.map((item, index) => (
                <View 
                  key={index} 
                  style={[
                    styles.weatherCard, 
                    item.active && styles.activeWeatherCard
                  ]}
                >
                  <Text style={styles.weatherCardTime}>{item.time}</Text>
                  <Image source={item.image} style={styles.fishImage} />
                  <Text style={styles.fishNameText}>{item.fish}</Text>
                  <Text style={styles.temperatureText}>{item.chance}</Text>
                </View>
              ))}
            </ScrollView>
            
            {/* Tide Forecast */}
            <View style={styles.tideContainer}>
              <View style={styles.centeredHeader}>
                <Text style={styles.subHeaderText}>Tide Forecast</Text>
                <Text style={styles.tideTimeText}>Next High Tide: 4:35PM</Text>
              </View>
              
              <LineChart
                data={tideData}
                width={350}
                height={150}
                chartConfig={{
                  backgroundGradientFrom: "#1E4289",
                  backgroundGradientTo: "#1E4289",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 0
                  },
                  propsForDots: {
                    r: "5",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={styles.chart}
              />
              
              <View style={styles.legendContainer}>
                <Ionicons name="arrow-forward" size={14} color="yellow" />
                <Text style={styles.legendText}>High tide chance</Text>
              </View>
            </View>
          </View>
          
          {/* Catch Analytics Container */}
          <View style={styles.blueContainer}>
            <View style={styles.centeredHeader}>
              <Text style={styles.headerText}>Catch Analytics</Text>
              <TouchableOpacity 
                style={[
                  styles.analyticsToggle,
                  activeAnalyticsTab === "Weekly" && styles.activeAnalyticsToggle
                ]}
              >
                <Text style={styles.analyticsToggleText}>Weekly</Text>
              </TouchableOpacity>
            </View>
            
            <LineChart
              data={catchAnalyticsData}
              width={350}
              height={220}
              chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "5",
                  strokeWidth: "2"
                }
              }}
              bezier
              style={styles.analyticsChart}
            />
            
            <View style={styles.yearLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, {backgroundColor: "rgb(50, 100, 200)"}]} />
                <Text style={styles.yearText}>2021</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, {backgroundColor: "rgb(255, 204, 0)"}]} />
                <Text style={styles.yearText}>2020</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#0D2B67",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#0D2B67",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 70, // Added padding for nav bar
  },
  blueContainer: {
    width: "100%",
    padding: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  centeredHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E4289",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  weatherTab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeWeatherTab: {
    borderBottomColor: "white",
  },
  weatherTabText: {
    fontSize: 14,
    color: "#8AA1D0",
  },
  activeWeatherTabText: {
    color: "white",
  },
  weatherCardsContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  weatherCard: {
    width: 70,
    height: 130,
    backgroundColor: "#1E4289",
    borderRadius: 20,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  activeWeatherCard: {
    backgroundColor: "#4963AC",
  },
  weatherCardTime: {
    color: "white",
    fontSize: 13,
  },
  weatherIcon: {
    width: 32,
    height: 32,
    marginVertical: 5,
  },
  precipitationText: {
    color: "white",
    fontSize: 12,
  },
  temperatureText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  fishImage: {
    width: 32,
    height: 32,
    marginVertical: 3,
  },
  fishNameText: {
    color: "white",
    fontSize: 11,
    textAlign: "center",
  },
  logButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  logButtonText: {
    color: "white",
    marginLeft: 8,
    fontSize: 16,
  },
  fishingSpotCard: {
    backgroundColor: "#1E4289",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  fishingSpotHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  fishingSpotName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  fishingSpotDistance: {
    fontSize: 14,
    color: "white",
  },
  fishingSpotDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  fishingSpotText: {
    fontSize: 14,
    color: "white",
  },
  tideText: {
    fontSize: 14,
    color: "white",
  },
  fishingSpotActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  directionsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D2B67",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  directionsText: {
    color: "white",
    marginLeft: 5,
    fontSize: 14,
  },
  seeMoreText: {
    color: "white",
    fontSize: 14,
  },
  percentageBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
  },
  percentageText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  tideContainer: {
    marginVertical: 15,
    alignItems: "center",
  },
  tideHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
  },
  tideTimeText: {
    color: "white",
    fontSize: 14,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  legendContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendText: {
    color: "white",
    marginLeft: 5,
    fontSize: 12,
  },
  analyticsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  analyticsToggle: {
    backgroundColor: "#FFBF00",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  activeAnalyticsToggle: {
    backgroundColor: "#FFBF00",
  },
  analyticsToggleText: {
    color: "black",
    fontWeight: "bold",
  },
  analyticsChart: {
    marginHorizontal: -15,
    borderRadius: 16,
    marginBottom: 10,
    alignSelf: "center",
  },
  yearLegend: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  yearText: {
    color: "white",
    fontSize: 14,
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: "#0D2B67",
    height: 60,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    borderTopWidth: 1,
    borderTopColor: "#1E4289",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});