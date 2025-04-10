// layout.tsx
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import SplashScreen from './SplashScreen'; // Import the SplashScreen component

export default function RootLayout() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSplashScreenLoaded = () => {
    setIsLoaded(true); // Once the splash screen has finished, show the landing page
  };

  return (
    <>
      {!isLoaded ? (
        <SplashScreen onLoaded={handleSplashScreenLoaded} /> // Show splash screen first
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ title: "Landing Page" }} />
          <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
          <Stack.Screen
            name="LogPage"
            options={{
              title: "Log New Catch",
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="RegisterCatch"
            options={{
              title: "Register Catch",
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Certifications"
            options={{
              title: "Certifications",
              headerShown: true,
            }}
          />
        </Stack>
      )}
    </>
  );
}
