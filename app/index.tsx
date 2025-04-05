import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // ✅ Use Expo Router for navigation


export default function LandingPage() {
  const router = useRouter();

  const handleSignUp = () => {
    router.replace("/(tabs)/Home"); // 👈 Navigates into the tab layout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App!</Text>

      {/* Default Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Sign Up with Facebook Button */}
      <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up with Facebook</Text>
      </TouchableOpacity>

      {/* Sign Up with Google Button */}
      <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up with Google</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  facebookButton: {
    backgroundColor: "#4267B2", // Facebook blue
  },
  googleButton: {
    backgroundColor: "#DB4437", // Google red
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});