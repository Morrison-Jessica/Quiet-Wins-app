import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Explore</Text>

      <Text style={styles.body}>
        This is your Explore screen. All asset references have been removed.
      </Text>

      <View style={styles.placeholderImage}>
        <Text style={{ textAlign: "center", color: "#555" }}>
          [Image Placeholder]
        </Text>
      </View>

      <Text style={styles.body}>
        You can link to external resources here without referencing deleted images.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20
  },
  body: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },
  placeholderImage: {
    width: 100,
    height: 100,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  }
});
