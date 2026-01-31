// app/(tabs)/explore.tsx
// ExploreScreen displays all Quiet Wins from the API in a list
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAPI } from "../../hooks/useAPI";  // Hook to fetch API data
import { useRouter } from "expo-router";
// useRouter to move forward/back between screens



interface Win {
  _id: string;        // MongoDB unique id
  title: string;      // Win title
  category: string;   // Win category
  reflection: string; // Win text
  created_at: string;  // Timestamp
}

export default function ExploreScreen() {
  const router = useRouter(); // For navigation 

  // Fetch data from backend (read only)
  const { data, loading, fetchData } = useAPI<Win[]>("/wins");  

  // Loading indicator while waiting
  if (loading) return <Text>Loading...</Text>;

  return (
    // View wrapper - one Parent container for return
    <View style={{ flex: 1 }}>  
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("screens/AddEditScreen")}
          // push = go forward onto the stack
        >
          <Text style={styles.addButtonText}>+ Add Win</Text>
        </TouchableOpacity>
      </View>

      
    {/* FlatList renders scrollable list of wins */}
      <FlatList<Win> style={{ flex: 1 }}
        data={data || []} // Ensures data is always an array, avoids runtime errors
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
    </View>

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
  addButton: {
    backgroundColor: "#4f46e5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  addButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  
});
