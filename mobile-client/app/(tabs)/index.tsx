import { ScrollView, View, Text, StyleSheet } from "react-native";

// Home Screen - Dashboard of Quiet Wins
export default function HomeScreen() {
  return (
    // Scrollable container to prevent screen overflow
    <ScrollView contentContainerStyle={styles.container}>
      {/* Page Header */}
      <Text style={styles.header}>Quiet Wins Dashboard</Text>

      {/* Card showing today's wins */}
      <View style={styles.card}>
        <Text>Today's Wins: 3</Text>
      </View>

      {/* Card showing weekly wins */}
      <View style={styles.card}>
        <Text>Weekly Wins: 10</Text>
      </View>

      {/* Placeholder card for other stats */}
      <View style={styles.card}>
        <Text>Monthly Wins: 25</Text>
      </View>
    </ScrollView>
  );
}

// Styles for Home screen
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,           // Expands ScrollView 
    padding: 20,           // Outer spacing
    backgroundColor: "#f4f4f4", // Light background
  },
  header: {
    fontSize: 28,          // Big font
    fontWeight: "bold",    // Bold text
    marginBottom: 20,      // Space below header
  },
  card: {
    width: "100%",         // Full width
    padding: 15,           // Inner spacing
    marginBottom: 10,      // Space between cards
    backgroundColor: "#fff", // White background
    borderRadius: 10,      // Rounded corners
  },
});
