import { useState, useEffect } from "react";


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
      const response = await fetch(endpoint); // GET request
      const json = await response.json();     // Convert response to JSON
      setData(json);                          // Save data to state
    } catch (error) {
      console.error("GET error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // ========= POST ITEM ========
  // ============================
  const postData = async (body: Partial<T>) => {
    try {
      const response = await fetch(endpoint, {
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
      await fetch(`${endpoint}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

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
      await fetch(`${endpoint}/${id}`, {
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
