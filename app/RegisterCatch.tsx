import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

// 👇 Clean Dropdown Component
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
          {selected || "Select catch source"}
        </Text>
        <Ionicons name={showOptions ? "chevron-up" : "chevron-down"} size={20} />
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
  const [catchSource, setCatchSource] = useState("Pond");
  const [redTide, setRedTide] = useState(false);
  const [compliance, setCompliance] = useState(false);
  const [catchDateTime, setCatchDateTime] = useState(""); // Single text input for date and time

  const handleSubmit = () => {
    // Placeholder for form submission logic
    console.log("Catch log submitted");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register Catch</Text>

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
        <View style={styles.mapPlaceholder}>
          <Ionicons name="map" size={50} color="#888" />
          <Text style={styles.mapText}>Map integration placeholder</Text>
        </View>
      </View>

      {/* Fish Species */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Fish Species</Text>
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
          <TextInput style={styles.sizeInput} placeholder="Min" keyboardType="numeric" />
          <TextInput style={styles.sizeInput} placeholder="Max" keyboardType="numeric" />
        </View>
      </View>

      {/* Catch Date and Time */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Catch Date and Time</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter date and time (e.g., 2025-04-05 14:30)"
          value={catchDateTime}
          onChangeText={setCatchDateTime}
        />
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
          <Ionicons name="cloud-upload-outline" size={20} color="#fff" />
          <Text style={styles.uploadButtonText}>Upload Documents</Text>
        </TouchableOpacity>
      </View>

      {/* Checkboxes */}
      <View style={styles.formGroup}>
        <View style={styles.checkboxContainer}>
          <Checkbox value={redTide} onValueChange={setRedTide} />
          <Text style={styles.checkboxLabel}>Red Tide present during catch</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox value={compliance} onValueChange={setCompliance} />
          <Text style={styles.checkboxLabel}>
            I confirm this catch complies with fishing regulations (no endangered / gravid marine life)
          </Text>
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Catch Log</Text>
      </TouchableOpacity>
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
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  mapPlaceholder: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  mapText: {
    fontSize: 14,
    color: "#888",
    marginTop: 10,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  sizeRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sizeInput: {
    width: "48%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#333",
    marginLeft: 10,
    flex: 1,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  // Clean Dropdown Styles
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: "#333",
  },
  dropdownList: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
  },
});