// filepath: e:\CAWIL_AI_TASK5\cawil-task5-fisheries\app\Home.tsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
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