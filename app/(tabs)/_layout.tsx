import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: "transparent", // important: make it transparent so the gradient shows
          borderTopWidth: 0, // optional: remove top border if you want a clean look
          position: "absolute", // to ensure background fits
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["#4196E3", "#0C2DB0"]} // adjust gradient colors here
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTab : null}>
              <Ionicons name="home-outline" size={size} color={focused ? "#000" : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="QRScanner"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTab : null}>
              <Ionicons name="qr-code-outline" size={size} color={focused ? "#000" : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Leaderboard"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTab : null}>
              <Ionicons name="podium-outline" size={size} color={focused ? "#000" : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTab : null}>
              <Ionicons name="person-outline" size={size} color={focused ? "#000" : color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: "#FFBF00", // Yellow circle
    padding: 10, // Add padding to center the icon
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30, // Adjust top-left corner
    borderTopRightRadius: 30, // Adjust top-right corner
    borderBottomLeftRadius: 30, // Adjust bottom-left corner
    borderBottomRightRadius: 5, // Adjust bottom-right corner
  },
});