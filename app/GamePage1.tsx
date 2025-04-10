import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useRouter } from "expo-router";

export default function GamePage1() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  // Array of image URIs (replace these with your actual image paths or URLs)
  const images = [
    require("../assets/gameStep1.png"), // Replace with your actual image paths
    require("../assets/gameStep2.png"),
    require("../assets/gameStep3.png"),
    require("../assets/gameStep4.png"),
  ];

  const handleScreenPress = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1); // Go to the next image
    } else {
      router.push("/(tabs)/Leaderboard"); // Redirect to Leaderboard when the last image is clicked
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={styles.container}>
        <Image source={images[currentImageIndex]} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Black background for better contrast
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Adjust image to fit the screen
  },
});