import { useState, useEffect } from "react";

// ** NOTE - EVERY fetch must use API_BASE + endpoint!!
const API_BASE = "https://quiet-wins-api.onrender.com/api";

// Generic API hook for CRUD
export const useAPI = <T,>(endpoint: string) => {
  // State holds API data (GET results)
  const [data, setData] = useState<T | null>(null);
  // Tracks loading state
  const [loading, setLoading] = useState(true);

 // =============================
 // ======= GET ALL ITEMS =======
 // =============================
  const fetchData = async () => {
    try {
      const response = await fetch(`${API_BASE}${endpoint}`);
    // GET request
    // Check if the request was successful
    if (!response.ok) {
      console.error("GET error:", response.status, response.statusText);
      setData([] as T); // fallback to empty array
      return;
    }
    // Parse JSON directly (if response is ok)
    const json = await response.json();
    setData(json);

    } catch (error) {
      console.error("GET error:", error);
      setData([] as T); // fallback if fetch itself fails
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // ========= POST ITEM ========
  // ============================
  const postData = async (body: Partial<T>) => {
    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), // Send data to API
      });

      await response.json(); 
      fetchData();  // Refresh list after create
    } catch (error) {
      console.error("POST error:", error);
    }
  };

  // ===============================
  // ======= PATCH/EDIT ITEM =======
  // ===============================
  const patchData = async (id: string, body: Partial<T>) => {
    try {
      const response = await fetch(`${API_BASE}${endpoint}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log("PATCH URL:", `${API_BASE}${endpoint}/${id}`);
      console.log("PATCH body:", body);
      console.log("PATCH status:", response.status, response.statusText);

      if (!response.ok) {
        const text = await response.text(); 
        console.error("PATCH failed:", text);
        return;
      }
  
      const updated = await response.json();
      console.log("PATCH success response:", updated);


      fetchData(); // Refresh list after update
    } catch (error) {
      console.error("PATCH error:", error);
    }
  };

  // ============================
  // ======= DELETE ITEM ========
  // ============================
  const deleteData = async (id: string) => {
    try { 
      await fetch(`${API_BASE}${endpoint}/${id}`, {
        method: "DELETE",
      });

      fetchData(); // Refresh list after delete
    } catch (error) {
      console.error("DELETE error:", error);
    }
  };

  // Run GET on first load or when endpoint changes
  useEffect(() => {
    fetchData();
  }, [endpoint]);

  // Everything the app can use
  return {
    data,
    loading,
    fetchData,
    postData,
    patchData,
    deleteData,
  };
};
