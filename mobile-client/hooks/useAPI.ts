import { useState, useEffect } from "react";

// Hook to fetch data from API endpoint
export const useAPI = <T,>(endpoint: string) => {
  // Holds the data returned from API
  const [data, setData] = useState<T | null>(null);   //  TypeScript now knows data is T
  // Tracks loading state for UI feedback
  const [loading, setLoading] = useState(true);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(endpoint); // Call API
      const json = await response.json();     // Parse JSON response
      setData(json);                           // Save data to state
    } catch (error) {
      console.error(error);                    // Log any errors
    } finally {
      setLoading(false);                       // Stop loading spinner
    }
  };

  // Runs fetchData() when the hook is first used or endpoint changes
  useEffect(() => {
    fetchData();
  }, [endpoint]);

  // Return data, loading state, and fetchData for manual refresh
  return { data, loading, fetchData };
};
