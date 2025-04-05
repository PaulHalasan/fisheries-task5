import { Stack } from "expo-router";

export default function RootLayout() {
  return (
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
    </Stack>
  );
}