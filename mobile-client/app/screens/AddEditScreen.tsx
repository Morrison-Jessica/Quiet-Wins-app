// app/screens/AddWinScreen.tsx
import { useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";  // params from route tell this screen why it was opened, to add or edit...
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useAPI } from "../../hooks/useAPI"; 



export default function AddEditScreen() {
  const router = useRouter(); // lets us go back
  // == "Read" route params passed to this screen ==
  const params = useLocalSearchParams();

  // If editing, win is passed as a JSON string
  const winParam = params.win as string | undefined;
  // Convert JSON string to object, (winParam) means only ? if it exists
  const win = winParam ? JSON.parse(winParam) : null;
  // const win - js object used when editing an existing win

   // == State holds the input values from the form ==
   const [title, setTitle] = useState("");
   const [category, setCategory] = useState("");
   const [reflection, setReflection] = useState("");

  // CRUD functions from useAPI hook now supports postData and patchData
  const { postData, patchData } = useAPI("/wins"); 

// Runs once when the component mounts or when 'win' changes
useEffect(() => {
  if (win) {  // If editing, pre-fill form with existing win data
    setTitle(win.title);
    setCategory(win.category);
    setReflection(win.reflection);
  }
}, [win]);  // Dependency array ensures it runs when 'win' changes

// =========================== 
// ====== Save function ====== 
// =========================== 
const saveWin = async () => {  // Handles both Add and Edit
  // Collect form data
  const formData = {
    title,
    category,
    reflection,
  };

  try {
    if (win && win._id) {  // if win exists... 
    // =====================
    // ===== Edit mode =====
    // =====================
      await patchData(`/wins/${win._id}`, formData); // PATCH to backend
      Alert.alert("Success", "Win updated successfully!");
    } else {  // if does not exist...
    // ====================
    // ===== Add mode =====
    // ====================
      await postData(formData); // Creat new win & POST to backend
      Alert.alert("Success", "New win created!");

    // Clear form after 
      setTitle("");
      setCategory("");
      setReflection("");
    }
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Something went wrong while saving.");
  }
};

  return (
    <View style={styles.container}>
      {/* Screen title */}
      <Text style={styles.heading}>Quiet Win</Text>

      <ScrollView  style={styles.container}
      keyboardShouldPersistTaps="handled">
        {/* Win Title input */}
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle} // updates title state
          style={styles.input}
        />
        {/* Win Category input */}
        <TextInput
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
          style={styles.input}
        />
        {/* Win Reflection input */}
        <TextInput
          placeholder="Reflection"
          value={reflection}
          onChangeText={(text) => setReflection(text)}
          multiline
          style={[styles.input, styles.textArea]}
        />
      </ScrollView>

      {/* Save button uses saveWin to call correct API method POST vs PATCH */}
      <TouchableOpacity style={styles.button} onPress={saveWin}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,  // for spacing
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,  // for spacing
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,  
    borderRadius: 8,  // rounded corners
    marginBottom: 12,  
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#4f46e5",
    padding: 14,  
    borderRadius: 10,
    marginTop: 10,  
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});