import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, FlatList, SafeAreaView, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function LogPage() {
  const router = useRouter();
  const [selectedCatches, setSelectedCatches] = useState<string[]>([]); // State to track selected catches

  const handleRegisterCatch = () => {
    router.push("/RegisterCatch"); // Navigate to Register Catch page
  };

  const toggleSelectCatch = (id: string) => {
    if (selectedCatches.includes(id)) {
      setSelectedCatches(selectedCatches.filter((catchId) => catchId !== id));
    } else {
      setSelectedCatches([...selectedCatches, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedCatches.length === catchHistory.length) {
      setSelectedCatches([]); // Deselect all
    } else {
      setSelectedCatches(catchHistory.map((item) => item.id)); // Select all
    }
  };

  const catchHistory = [
    {
      id: "1",
      date: "2024-01-17",
      weight: "18.2",
      location: "North Atlantic",
      fishType: "Cod",
      sizeRange: "40-55",
      redTide: false,
    },
    {
      id: "2",
      date: "2024-01-16",
      weight: "5.8",
      location: "Mediterranean",
      fishType: "Mackerel",
      sizeRange: "20-30",
      redTide: false,
    },
    {
      id: "3",
      date: "2024-01-15",
      weight: "25.5",
      location: "Pacific Ocean",
      fishType: "Tuna",
      sizeRange: "45-60",
      redTide: false,
    },
    {
      id: "4",
      date: "2024-01-12",
      weight: "12.3",
      location: "River Delta",
      fishType: "Salmon",
      sizeRange: "30-40",
      redTide: false,
    },
    {
      id: "5",
      date: "2024-01-10",
      weight: "8.7",
      location: "Lake Michigan",
      fishType: "Bass",
      sizeRange: "25-35",
      redTide: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a56a5" />
      
      
      {/* Catch History Header */}
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeader}>Catch History</Text>
        <Text style={styles.recordCount}>({catchHistory.length} Records)</Text>
        
        <TouchableOpacity style={styles.selectButton} onPress={toggleSelectAll}>
          <Text style={styles.selectButtonText}>Select</Text>
          <View style={styles.radioButton}>
            {selectedCatches.length > 0 && <View style={styles.radioButtonInner} />}
          </View>
        </TouchableOpacity>
      </View>

      {/* Search Box */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search catches..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Catch History List */}
      <FlatList
        data={catchHistory}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => {
          // Alternate between white and light purple for cards
          const isEven = index % 2 === 0;
          
          return (
            <View style={[
              styles.catchCard,
              isEven ? styles.evenCard : styles.oddCard
            ]}>
              <View style={styles.cardContent}>
                <View style={styles.cardLeftColumn}>
                  <Text style={styles.cardLabel}>Date</Text>
                  <Text style={styles.cardValue}>{item.date}</Text>
                  
                  <Text style={[styles.cardLabel, styles.topSpacing]}>Weight (kg)</Text>
                  <Text style={styles.cardValue}>{item.weight}</Text>
                  
                  <Text style={[styles.cardLabel, styles.topSpacing]}>Location</Text>
                  <Text style={styles.cardValue}>{item.location}</Text>
                </View>
                
                <View style={styles.cardRightColumn}>
                  <Text style={styles.cardLabel}>Fish Type</Text>
                  <Text style={styles.cardValue}>{item.fishType}</Text>
                  
                  <Text style={[styles.cardLabel, styles.topSpacing]}>Size Range (cm)</Text>
                  <Text style={styles.cardValue}>{item.sizeRange}</Text>
                  
                  <Text style={[styles.cardLabel, styles.topSpacing]}>Red Tide</Text>
                  <Text style={styles.cardValue}>{item.redTide ? "Yes" : "No"}</Text>
                </View>
                
                <TouchableOpacity 
                  style={styles.selectionCircle}
                  onPress={() => toggleSelectCatch(item.id)}
                >
                  {selectedCatches.includes(item.id) && <View style={styles.selectedCircleInner} />}
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      
      {/* Register Catch Button (Floating) */}
      <TouchableOpacity style={styles.floatingButton} onPress={handleRegisterCatch}>
        <Ionicons name="add-circle" size={28} color="#fff" />
        <Text style={styles.floatingButtonText}>Log New Catch</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a56a5", // Deep blue background as shown in screenshots
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
  },
  subHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  recordCount: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.8,
    flex: 1,
    marginLeft: 5,
  },
  selectButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectButtonText: {
    color: "#fff",
    fontSize: 14,
    marginRight: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  searchButton: {
    padding: 4,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 100, // Extra padding for floating button
  },
  catchCard: {
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: "hidden",
  },
  evenCard: {
    backgroundColor: "#fff",
  },
  oddCard: {
    backgroundColor: "#f0f4ff",
  },
  cardContent: {
    flexDirection: "row",
    padding: 16,
    position: "relative",
  },
  cardLeftColumn: {
    flex: 1,
    marginRight: 8,
  },
  cardRightColumn: {
    flex: 1,
    marginLeft: 8,
  },
  cardLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  cardValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  topSpacing: {
    marginTop: 12,
  },
  selectionCircle: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#aaa",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCircleInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#1a56a5",
  },
  floatingButton: {
    position: "absolute",
    bottom: 30,
    left: 16,
    right: 16,
    backgroundColor: "#1a56a5",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});