import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";

// Clean Dropdown Component
function CleanDropdownPicker({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowOptions(!showOptions)}
        style={styles.dropdownButton}
      >
        <Text style={styles.dropdownButtonText}>
          {selected.toLowerCase() || "Select catch source"}
        </Text>
        <Ionicons name={showOptions ? "chevron-up" : "chevron-down"} size={20} color="#1a56a5" />
      </TouchableOpacity>

      {showOptions && (
        <View style={styles.dropdownList}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => {
                onSelect(option);
                setShowOptions(false);
              }}
              style={styles.dropdownItem}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

export default function RegisterCatch() {
  const router = useRouter();
  const [catchSource, setCatchSource] = useState("Pond");
  const [redTide, setRedTide] = useState(false);
  const [compliance, setCompliance] = useState(false);
  const [catchDateTime, setCatchDateTime] = useState("-/-/- --:--");
  const [minSize, setMinSize] = useState("");
  const [maxSize, setMaxSize] = useState("");

  const handleSubmit = () => {
    console.log("Catch log submitted");
    router.push("/LogPage");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1a56a5" />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Catch Source Dropdown */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Catch Source</Text>
          <CleanDropdownPicker
            options={["Pond", "River", "Sea", "Lake"]}
            selected={catchSource}
            onSelect={setCatchSource}
          />
        </View>

        {/* Location on Map */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Location on Map</Text>
          <View style={styles.mapContainer}>
            <Image
              source={require("../assets/maps.png")}
              style={styles.mapImage}
              defaultSource={require("../assets/maps.png")}
            />
          </View>
        </View>

        {/* Fish Species */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Species of Fish</Text>
          <TextInput style={styles.input} placeholder="Enter fish species" />
        </View>

        {/* Total Weight */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Total Weight (kg)</Text>
          <TextInput style={styles.input} placeholder="Enter total weight" keyboardType="numeric" />
        </View>

        {/* Size Range */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Size Range (cm)</Text>
          <View style={styles.sizeRangeContainer}>
            <TextInput
              style={styles.sizeInput}
              placeholder="Min"
              keyboardType="numeric"
              value={minSize}
              onChangeText={setMinSize}
            />
            <TextInput
              style={styles.sizeInput}
              placeholder="Max"
              keyboardType="numeric"
              value={maxSize}
              onChangeText={setMaxSize}
            />
          </View>
        </View>

        {/* Catch Date and Time */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Catch Date & Time</Text>
          <View style={styles.dateTimeContainer}>
            <TextInput
              style={styles.dateTimeInput}
              placeholder="-/-/- --:--"
              value={catchDateTime}
              onChangeText={setCatchDateTime}
            />
            <TouchableOpacity style={styles.calendarButton}>
              <Ionicons name="calendar-outline" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Depth of Catch */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Depth of Catch (m)</Text>
          <TextInput style={styles.input} placeholder="Enter depth" keyboardType="numeric" />
        </View>

        {/* Upload Documents */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Upload Documents</Text>
          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons name="cloud-upload-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Checkboxes */}
        <View style={styles.formGroup}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={redTide}
              onValueChange={setRedTide}
              color={redTide ? "#1a56a5" : undefined}
            />
            <Text style={styles.checkboxLabel}>Red Tide Present During Catch</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={compliance}
              onValueChange={setCompliance}
              color={compliance ? "#1a56a5" : undefined}
            />
            <Text style={styles.checkboxLabel}>
              I confirm this catch complies with fishing regulations (no endangered/pregnant fish)
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* 🔵 Styled Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Catch Log</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#1a56a5",
  },
  container: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 100,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 8,
  },
  mapContainer: {
    height: 180,
    backgroundColor: "#e8f4ff",
    borderRadius: 8,
    overflow: "hidden",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
  input: {
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    fontSize: 16,
  },
  sizeRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sizeInput: {
    width: "48%",
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    fontSize: 16,
  },
  dateTimeContainer: {
    flexDirection: "row",
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    alignItems: "center",
  },
  dateTimeInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#fff",
  },
  calendarButton: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadButton: {
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 10,
    flex: 1,
  },
  // 🔵 Submit Button
  submitButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  submitButtonText: {
    color: "#1a56a5",
    fontSize: 16,
    fontWeight: "bold",
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    height: 48,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: "#333",
  },
  dropdownList: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#fff",
    zIndex: 1000,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
});
