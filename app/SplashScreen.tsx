import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Text, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ onLoaded }: { onLoaded: () => void }) => {
  const textFade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(1)).current;  // For the logo pulse animation
  const glowScale = useRef(new Animated.Value(1)).current;  // For the glowing border effect

  useEffect(() => {
    // Pulse animation for the logo
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoScale, {
          toValue: 1.1, // Scale up
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(logoScale, {
          toValue: 1, // Scale down
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Glow effect by scaling the border
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowScale, {
          toValue: 1.2,  // Increase the scale for glow effect
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(glowScale, {
          toValue: 1,  // Reset the scale
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Fade in the text after a delay and scale it up
    Animated.parallel([
      Animated.timing(textFade, {
        toValue: 1,
        duration: 1500,
        delay: 3000,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        tension: 50,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate after a longer duration
    const timer = setTimeout(() => {
      onLoaded();
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, [textFade, scale, logoScale, glowScale, onLoaded]);

  return (
    <View style={styles.container}>
      {/* Glowing border effect */}
      <Animated.View
        style={[styles.imageContainer, { transform: [{ scale: glowScale }] }]}  // Apply glow scale
      >
        <Animated.Image
          source={require('../assets/logo_tale.jpg')}
          style={[styles.image, { transform: [{ scale: logoScale }] }]}  // Apply logo pulse animation
        />
      </Animated.View>

      {/* Animated welcome text */}
      <Animated.Text
        style={[
          styles.text,
          {
            opacity: textFade,
            transform: [{ scale }],
          },
        ]}
      >
        Welcome to EcoFin!
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0927ad', // Deep sea blue vibe
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200, // Fixed height for the circular logo
    width: 200,  // Fixed width for the circular logo
    marginBottom: 50, // Space between the image and text
    borderRadius: 100, // Half of the height/width to make it circular
    borderWidth: 8, // Border width for the glowing outline
    borderColor: '#ffcc00', // Default border color
    padding: 10, // Padding around the image
    backgroundColor: 'rgba(255, 204, 0, 0.2)', // Glowing background for the effect
  },
  image: {
    width: 180,  // Slightly smaller width to ensure padding within the circular container
    height: 180, // Same as width for a perfect circle
    borderRadius: 90, // Half of the width/height to make it circular
  },
  text: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    letterSpacing: 1.5,
    textAlign: 'center',
    textShadowColor: '#f5a623', // Glow effect for the text
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10, // Soft glow around text
  },
});

export default SplashScreen;
