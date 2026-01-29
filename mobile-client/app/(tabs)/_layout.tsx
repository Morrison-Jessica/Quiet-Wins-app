import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,  // Show top header
        tabBarActiveTintColor: "blue", 
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"  // corresponds to index.tsx
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />

      {/* Explore Tab */}
      <Tabs.Screen
        name="explore"  // corresponds to explore.tsx
        options={{
          title: "Explore",
          tabBarLabel: "Explore",
        }}
      />
    </Tabs>
  );
}
