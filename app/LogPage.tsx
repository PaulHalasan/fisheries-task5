import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function LogPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Log New Catch Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});