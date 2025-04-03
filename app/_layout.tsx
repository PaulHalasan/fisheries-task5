import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Landing Page" }} />
      <Stack.Screen name="Home" options={{ title: "Home" }} />
    </Stack>
  );
}
