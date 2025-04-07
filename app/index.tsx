import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

export default function LandingPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login logic here
    router.replace("/(tabs)/Home");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0927ad" />

      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
        <Text style={styles.primaryButtonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or continue with</Text>

      <TouchableOpacity style={styles.facebookButton} onPress={handleLogin}>
        <Text style={styles.altButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={handleLogin}>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0927ad",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 34,
    color: "#ffffff",
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#cfd9ff",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    backgroundColor: "#1c3eea",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    color: "#fff",
    marginBottom: 16,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: "#ffbf00",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 24,
  },
  primaryButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  orText: {
    color: "#ffffff",
    marginBottom: 16,
    fontSize: 14,
  },
  facebookButton: {
    backgroundColor: "#3b5998",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  altButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  googleButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  googleButtonText: {
    color: "#DB4437",
    fontSize: 16,
    fontWeight: "600",
  },
});
