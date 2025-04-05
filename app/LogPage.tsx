import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, FlatList } from "react-native";
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
      date: "2025-04-01",
      weight: "15 kg",
      location: "Lake Paradise",
      fishType: "Bass, Trout",
      sizeRange: "20-35 cm",
      redTide: false,
    },
    {
      id: "2",
      date: "2025-04-03",
      weight: "10 kg",
      location: "Ocean Breeze",
      fishType: "Salmon, Tuna",
      sizeRange: "25-40 cm",
      redTide: true,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Register Catch Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegisterCatch}>
        <Text style={styles.registerButtonText}>Register Catch</Text>
      </TouchableOpacity>

      {/* Catch History Header */}
      <Text style={styles.header}>Catch History</Text>

      {/* Search Box */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Catches"
          placeholderTextColor="#888"
        />
      </View>

      {/* Select All Button */}
      <TouchableOpacity style={styles.selectAllButton} onPress={toggleSelectAll}>
        <Text style={styles.selectAllButtonText}>
          {selectedCatches.length === catchHistory.length ? "Deselect All" : "Select All"}
        </Text>
      </TouchableOpacity>

      {/* Catch History List */}
      <FlatList
        data={catchHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.catchContainer,
              selectedCatches.includes(item.id) && styles.selectedCatch,
            ]}
            onPress={() => toggleSelectCatch(item.id)}
          >
            <Text style={styles.catchText}>Date: {item.date}</Text>
            <Text style={styles.catchText}>Weight: {item.weight}</Text>
            <Text style={styles.catchText}>Location: {item.location}</Text>
            <Text style={styles.catchText}>Fish Types: {item.fishType}</Text>
            <Text style={styles.catchText}>Size Range: {item.sizeRange}</Text>
            <View
              style={[
                styles.tideBadge,
                item.redTide ? styles.redTide : styles.noRedTide,
              ]}
            >
              <Text style={styles.tideText}>
                {item.redTide ? "Red Tide" : "No Red Tide"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  registerButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
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
  selectAllButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  selectAllButtonText: {
    color: "#007BFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  catchContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedCatch: {
    borderWidth: 2,
    borderColor: "#007BFF",
  },
  catchText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  tideBadge: {
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  redTide: {
    backgroundColor: "red",
  },
  noRedTide: {
    backgroundColor: "green",
  },
  tideText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});