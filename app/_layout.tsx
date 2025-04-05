import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}> {/* Default: No headers */}
      <Stack.Screen name="index" options={{ title: "Landing Page" }} />
      <Stack.Screen name="(tabs)/Home" options={{ title: "Home" }} />
      <Stack.Screen
        name="LogPage"
        options={{
          title: "Log New Catch", // Title for the header
          headerShown: true, // Show header only for LogPage
        }}
      />
    </Stack>
  );
}