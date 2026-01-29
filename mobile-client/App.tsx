// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Wraps the entire app to enable navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Stack-based navigation
import ExploreScreen from "./app/(tabs)/explore"; // Screen to view all wins
import saveWin from "./screens/AddEditScreen";   // Screen to add new/edit win


// Create a stack navigator instance
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer - app wrapper for navigation context on all screens
    <NavigationContainer>
      {/* Stack.Navigator - stack based (push/pop screens) defines the navigation flow */}
      <Stack.Navigator
        initialRouteName="Explore" // Start the app on the explore screen
        screenOptions={{
          headerStyle: { backgroundColor: "#f0f0f0" }, // Header styling
          headerTintColor: "#000", // Header text color
          headerTitleStyle: { fontWeight: "bold" }, // Header title bold
        }}
      >
        {/* Each Stack.Screen is a CRUD based route in the app */}
        <Stack.Screen
          name="Explore" // Route name
          component={ExploreScreen} // Component to render
          options={{ title: "All Quiet Wins" }} // Header title
        />
        <Stack.Screen
          name="AddWin"  
          component={saveWin}  // Create a new win
          options={{ title: "Add a New Win" }}
        />
        <Stack.Screen
          name="EditWin"  
          component={saveWin}  // Update/delete existing win
          options={{ title: "Edit Win" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
