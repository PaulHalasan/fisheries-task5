import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Leaderboard() {
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState("daily");

  const top3Users = [
    { name: "Paul", points: 120, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_George_Pacers.jpg/800px-Paul_George_Pacers.jpg" },
    { name: "Mark", points: 110, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWhOSRpQ5ZDnN0A7fCvvDfSsX8myvZ8CVD-EOz4qOIuZOTdyFof6kGG-mlRVSUfGrC4PlAtcVQ78PTFmomsOAIEA" },
    { name: "Anthony", points: 100, image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_2720,h_1530,x_636,y_146/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/dallas_basketball/01jr1rxdhyhwxtgjznrz.jpg" },
  ];

  const top10Users = [
    { name: "Troy", points: 120, image: "https://assets.puzzlefactory.com/puzzle/345/244/original.webp" },
    { name: "Andre", points: 110, image: "https://static01.nyt.com/images/2016/06/02/sports/02ARATON/02ARATON-superJumbo-v2.jpg" },
    { name: "Sophia", points: 100, image: "https://lumiere-a.akamaihd.net/v1/images/pp_sofiathefirstthefloatingpalace_herobanner_mobile_205_3e801767.jpeg?region=0,0,640,480" },
    { name: "Dianne", points: 90, image: "https://kidscreen.com/wp/wp-content/uploads/2024/08/sofia-the-first.jpg" },
    { name: "Allen", points: 85, image: "https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_v7qJ1Mm642zEcGLlreIiCoYZQSaaiE8itafoggujN-Avb4YggczFkZ7SpQrzJ3131vcfDTWTqPXRYfn0B5TQC88ELcwsUD40sekK-WEd1E=w1200-h630-p-k-no-nu" },
    { name: "Jhayvee", points: 80, image: "https://pbs.twimg.com/profile_images/1180459624463339521/Qtnbh-Yt_400x400.jpg" },
    { name: "LeBron", points: 75, image: "https://athlonsports.com/.image/t_share/MjEyNzQzMzYyNjY1NTIyODE2/usatsi_24866687.jpg" },
    { name: "James", points: 70, image: "https://athlonsports.com/.image/t_share/MjEwMzY4OTU1MjI1NzQ0OTc0/usa-los-angeles-clippers-guard-james-harden-1-gestures-in-the-second-quarter-against-the-denver-nuggets-at-ball-arena.jpg" },
    { name: "Isvery", points: 65, image: "https://i1.sndcdn.com/artworks-9R6zUytOmPor6P2n-8tUdCw-t1080x1080.jpg" },
    { name: "John", points: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIESbrRy2Kc3trweDtLYkDeANMFWWlj5fiRQ&s" },
  ];

  // Function to get medal color based on position
  const getMedalColor = (index: number) => {
    switch(index) {
      case 0: return '#FFD700'; // Gold for 1st
      case 1: return '#C0C0C0'; // Silver for 2nd
      case 2: return '#CD7F32'; // Bronze for 3rd
      default: return 'transparent';
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>

      {/* Top 3 Leaderboard with Tabs */}
      <View style={styles.top3Container}>
        <View style={styles.tabs}>
          {["daily", "weekly", "monthly"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.top3HorizontalList}>
          {top3Users.map((user, index) => (
            <View key={index} style={[styles.top3HorizontalItem, { borderColor: getMedalColor(index), borderWidth: 2 }]}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: user.image }} style={styles.userImageLarge} />
                <View style={[styles.medalBadge, { backgroundColor: getMedalColor(index) }]}>
                  <Text style={styles.medalText}>{index + 1}</Text>
                </View>
              </View>
              <Text style={styles.top3Name}>{user.name}</Text>
              <Text style={styles.top3Points}>{user.points} pts</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Start Game Button */}
      <TouchableOpacity
        style={styles.startGameButton}
        onPress={() => router.push("/GamePage1")} // Redirect to GamePage1
      >
        <Text style={styles.startGameButtonText}>Start Game</Text>
      </TouchableOpacity>

      {/* Top 10 Leaderboard */}
      <View style={styles.top10Container}>
        <Text style={styles.top10Title}>Top 10 Leaderboard</Text>
        {top10Users.map((user, index) => (
          <View key={index} style={[styles.top10Row, index % 2 === 0 ? styles.evenRow : null]}>
            <Text style={[styles.top10Index, index < 3 ? styles.topThreeText : null]}>{index + 1}.</Text>
            <Image source={{ uri: user.image }} style={styles.top10Image} />
            <Text style={styles.top10Name}>{user.name}</Text>
            <View style={styles.pointsContainer}>
              <Text style={styles.top10Points}>{user.points} pts</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#0927ad", 
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0927ad", // Blue color
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: 'rgba(9, 39, 173, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  top3Container: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#0927ad", // Blue shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(9, 39, 173, 0.1)',
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25, // More rounded
    backgroundColor: "#e0e6ff", // Light blue
    borderWidth: 1,
    borderColor: 'rgba(9, 39, 173, 0.2)',
  },
  activeTab: {
    backgroundColor: "#0927ad", // Blue
  },
  tabText: {
    fontSize: 14,
    color: "#0927ad", // Blue
    fontWeight: "600",
  },
  activeTabText: {
    color: "#fff", // White
    fontWeight: "bold",
  },
  top3HorizontalList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  top3HorizontalItem: {
    alignItems: "center",
    backgroundColor: "#fff", // White
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    width: "30%", // Each container takes 30% of the width
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  userImageLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#ffbf00", // Yellow-orange border
  },
  medalBadge: {
    position: 'absolute',
    bottom: 0,
    right: -5,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  medalText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  top3Name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0927ad", // Blue
    marginBottom: 5,
    textAlign: "center",
  },
  top3Points: {
    fontSize: 14,
    color: "#ffbf00", // Yellow-orange
    fontWeight: "600",
    textAlign: "center",
  },
  startGameButton: {
    backgroundColor: "#ffbf00", // Yellow-orange
    paddingVertical: 16,
    borderRadius: 25, // More rounded
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#ffbf00", // Yellow-orange shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  startGameButtonText: {
    color: "#0927ad", // Blue text
    fontSize: 18,
    fontWeight: "bold",
  },
  top10Container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#0927ad", // Blue shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(9, 39, 173, 0.1)',
  },
  top10Title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0927ad", // Blue
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ffbf00", // Yellow-orange border
  },
  top10Row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e6ff", // Light blue
  },
  evenRow: {
    backgroundColor: 'rgba(9, 39, 173, 0.03)', // Very light blue tint for even rows
  },
  top10Index: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0927ad", // Blue
    marginRight: 10,
    width: 30,
    textAlign: 'center',
  },
  topThreeText: {
    color: "#ffbf00", // Yellow-orange for top 3
  },
  top10Image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#ffbf00", // Yellow-orange border
  },
  top10Name: {
    fontSize: 16,
    color: "#0927ad", // Blue
    flex: 1, // Ensures the name takes up available space
    fontWeight: "500",
  },
  pointsContainer: {
    backgroundColor: 'rgba(255, 191, 0, 0.15)', // Light yellow-orange background
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  top10Points: {
    fontSize: 14,
    color: "#0927ad", // Blue
    fontWeight: "600",
  },
});