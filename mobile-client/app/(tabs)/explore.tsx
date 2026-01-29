// app/(tabs)/explore.tsx
// ExploreScreen displays all Quiet Wins from the API in a list

import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAPI } from "../../hooks/useAPI";  // Hook to fetch API data


interface Win {
  _id: string;        // MongoDB unique id
  title: string;      // Win title
  category: string;   // Win category
  reflection: string; // Win text
  created_at: string;  // Timestamp
}

export default function ExploreScreen() {
  // Fetch data from backend 
  const { data, loading, fetchData } = useAPI<Win[]>("/wins");

  // Loading indicator while waiting
  if (loading) return <Text>Loading...</Text>;

  return (
    // FlatList renders scrollable list of wins
    <FlatList<Win> style={{ flex: 1 }}
      data={data || []} // Ensure data is always an array, avoids runtime errors
      keyExtractor={(item) => item._id} // Unique key for each item
      contentContainerStyle={styles.container} // Padding around list 
      renderItem={({ item }) => (
        <View style={styles.card}> 
          {/* Display win title */}
          <Text style={styles.title}>{item?.title}</Text>

          {/* Display win category */}
          <Text>{item.category}</Text>

          {/* Display the reflection text */}
          <Text>{item.reflection}</Text>

          {/* Optional: example Edit button */}
          <TouchableOpacity onPress={() => console.log("Edit win:", item._id)}>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>
      )}
        // Pull-to-refresh props
        refreshing={loading}
        onRefresh={fetchData}
    />
  );
}

// Simple styles for the FlatList and items
const styles = StyleSheet.create({
  container: {
    padding: 20, // Space around the whole list
  },
  card: {
    backgroundColor: "#fff",   // White background for each win card
    padding: 15,               // Inner padding for content
    marginBottom: 10,          // Space between cards
    borderRadius: 10,          // Rounded corners
  },
  title: {
    fontWeight: "bold",        // Bold for title
    marginBottom: 5,           // Space under title
  },
  edit: {
    color: "blue",             // Visual cue for button
    marginTop: 5,              // Space above the button
  },
});
