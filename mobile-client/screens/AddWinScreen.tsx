// app/screens/AddWinScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useAPI } from "../hooks/useAPI"; 

interface Win {
  _id: string;
  title: string;
  category: string;
  reflection: string;
  created_at: string;
}

export default function AddWinScreen({ navigation }: any) {
  // State holds the input values
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [reflection, setReflection] = useState("");

  // Get postData from useAPI for creating new wins
  const { postData } = useAPI<Win[]>("/wins");

  // Function to handle form submission
  const handleSubmit = async () => {
    if (!title || !category || !reflection) {
      Alert.alert("Error", "Please fill out all fields"); // Form validation
      return;
    }

    // Send new win to API
    await postData({
      title,
      category,
      reflection,
      created_at: new Date().toISOString(), // Timestamp
    });

    // Navigate back to the explore screen after adding
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle} // Updates state on typing
        placeholder="Enter win title"
      />

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}  // Updates state on typing
        placeholder="Enter category"
      />

      <Text style={styles.label}>Reflection</Text>
      <TextInput
        style={[styles.input, { height: 100 }]} // Taller input for reflections
        value={reflection}
        onChangeText={setReflection}  // Updates state on typing
        placeholder="Write your reflection"
        multiline  // "TextArea"
      />

      {/* Submit button */}
      <Button title="Add Win" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,            // Fills the screen
    padding: 20,        // Space around content
    backgroundColor: "#f5f5f5", // Light background
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    backgroundColor: "#fff",
  },
});
