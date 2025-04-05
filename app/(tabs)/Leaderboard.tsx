import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("daily");

  const top3Users = [
    { name: "Paul", points: 120, image: "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/466467809_8881716878540595_3042077161625861999_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2FeSCPTfLdYQ7kNvwGHiq35&_nc_oc=AdkxOOSg1z-hiQXcyPmGcRVN-FIH4GLxCs95e2AJCU9_ycRJsl69a-Hxte2S8gNBE-s&_nc_zt=23&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=vfiP3zLm4aafnxa3RmwxpA&oh=00_AYFd2MutJr5tOyhy-RpIvzjKZgu0JDHVvlSmPACVbsSHLw&oe=67F6E2FF" },
    { name: "Mark", points: 110, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWhOSRpQ5ZDnN0A7fCvvDfSsX8myvZ8CVD-EOz4qOIuZOTdyFof6kGG-mlRVSUfGrC4PlAtcVQ78PTFmomsOAIEA" },
    { name: "Anthony", points: 100, image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_2720,h_1530,x_636,y_146/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/dallas_basketball/01jr1rxdhyhwxtgjznrz.jpg" },
  ];

  const top10Users = [
    { name: "Troy", points: 120, image: "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-1/456411542_2241116916239213_6984442457575898856_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=fw9gHsv9MHgQ7kNvwEE-ru1&_nc_oc=AdlJ5DLyYcRx1gIDN2nRezFMuJlJAuwaMbCfEoKdjqnws6KO7r0iNut71hFNpgFdlT8&_nc_zt=24&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=Ia1TSLadB6t4Qimrq2xxJA&oh=00_AYGyO3W4skN58rFd9bKY8F1eCY7qZEIfiJdOQxpWn3nl9g&oe=67F6EB57" },
    { name: "Andre", points: 110, image: "https://static01.nyt.com/images/2016/06/02/sports/02ARATON/02ARATON-superJumbo-v2.jpg" },
    { name: "Sophia", points: 100, image: "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-1/412297195_7020227551395635_8348619827124997117_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=d_HyaletUY4Q7kNvwF_caNl&_nc_oc=AdnzyS0nccoTro9trbLGJSVLZIqfydwUj5TJZTQaM6i5sYM0B6iOJI2oIA3qdKIgdVw&_nc_zt=24&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=nnfdssu5wplNZgRF2rmv-g&oh=00_AYH7Vu25r8jqZbsCsRCN9ZhSrz4iIEi6TM8ogyg6VMFawA&oe=67F71603" },
    { name: "Dianne", points: 90, image: "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/325602114_706130461194356_6262320091712666542_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ZdwBqnkhWkwQ7kNvwEybZ_a&_nc_oc=AdlqqIfRmL_Gu3-E21M_IHKzZeJmpmQ5Ix8swIx8iWAikgwpIe4TDsH7s-mUgMSpYaE&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=nnfdssu5wplNZgRF2rmv-g&oh=00_AYHjxtKLJlLQWXDJeYcxm5DxVGaGKWmyhbARqivKw790ng&oe=67F715A5" },
    { name: "Allen", points: 85, image: "https://scontent.fmnl8-4.fna.fbcdn.net/v/t39.30808-1/458702145_8202883243098183_4069054334308669515_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=J6Nui2be10wQ7kNvwG5s_A4&_nc_oc=Adm55NHMOBPgH2EslCRX1nL4i-yvh0yDyFsN81Yy9Bwk8GfLehWP_acDPgrFLvnPqyI&_nc_zt=24&_nc_ht=scontent.fmnl8-4.fna&_nc_gid=ZLdIKSoj7M9s5TrByCt8Vw&oh=00_AYEzATUVHgmP9Spm84eCRQiE5DgkbUxcAE6PsfssgqFmtg&oe=67F6ED51" },
    { name: "Jhayvee", points: 80, image: "https://scontent.fmnl8-4.fna.fbcdn.net/v/t39.30808-6/429884564_7288080277911822_6348959973845439226_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ei5RkCcsCHcQ7kNvwHRYqg0&_nc_oc=Adk5097OlM-g2LVl1m8TzQh4oUc0NlNi_bBOcsL_P3qKV94FYS5wA1mW4uloxaPlsPM&_nc_zt=23&_nc_ht=scontent.fmnl8-4.fna&_nc_gid=BS1hS2n5Xxw-XjbTDR4wqg&oh=00_AYGQ5El9XeRlwZCSmRFMpR8uIz4KVEj1UITArlT4WFJhPw&oe=67F716F7" },
    { name: "LeBron", points: 75, image: "https://athlonsports.com/.image/t_share/MjEyNzQzMzYyNjY1NTIyODE2/usatsi_24866687.jpg" },
    { name: "James", points: 70, image: "https://athlonsports.com/.image/t_share/MjEwMzY4OTU1MjI1NzQ0OTc0/usa-los-angeles-clippers-guard-james-harden-1-gestures-in-the-second-quarter-against-the-denver-nuggets-at-ball-arena.jpg" },
    { name: "Isvery", points: 65, image: "https://i1.sndcdn.com/artworks-9R6zUytOmPor6P2n-8tUdCw-t1080x1080.jpg" },
    { name: "John", points: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIESbrRy2Kc3trweDtLYkDeANMFWWlj5fiRQ&s" },
  ];

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
            <View key={index} style={styles.top3HorizontalItem}>
              <Image source={{ uri: user.image }} style={styles.userImageLarge} />
              <Text style={styles.top3Name}>{user.name}</Text>
              <Text style={styles.top3Points}>{user.points} pts</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Start Game Button */}
      <TouchableOpacity style={styles.startGameButton}>
        <Text style={styles.startGameButtonText}>Start Game</Text>
      </TouchableOpacity>

      {/* Top 10 Leaderboard */}
      <View style={styles.top10Container}>
        <Text style={styles.top10Title}>Top 10 Leaderboard</Text>
        {top10Users.map((user, index) => (
          <View key={index} style={styles.top10Row}>
            <Text style={styles.top10Index}>{index + 1}.</Text>
            <Image source={{ uri: user.image }} style={styles.top10Image} />
            <Text style={styles.top10Name}>{user.name}</Text>
            <Text style={styles.top10Points}>{user.points} pts</Text>
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
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  top3Container: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
  },
  activeTab: {
    backgroundColor: "#007BFF",
  },
  tabText: {
    fontSize: 14,
    color: "#333",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  top3HorizontalList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  top3HorizontalItem: {
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width: "30%", // Each container takes 30% of the width
  },
  userImageLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  top3Name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  top3Points: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  startGameButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  startGameButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  top10Container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  top10Title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  top10Row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  top10Index: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginRight: 10,
  },
  top10Image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  top10Name: {
    fontSize: 16,
    color: "#333",
    flex: 1, // Ensures the name takes up available space
  },
  top10Points: {
    fontSize: 14,
    color: "#555",
  },
});