import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// Base API url = Render.com backend url
const API_URL = import.meta.env.VITE_API_URL; // page endpoint

function Home() {
  // State to stores list of wins
    const [wins, setWins] = useState([]);

// ====================
// ==== Fetch wins ====
// ==================== 
  const fetchWins = async () => {  // updates state after deleting
    // const res = await fetch(API_URL); // Calls GET /api/wins
    // const data = await res.json(); // Convert to JSON
    // setWins(data); // Save state
    try {
      const res = await fetch(API_URL);
  
      if (!res.ok) {
        const text = await res.text();
        console.error("GET /wins failed:", res.status, text);
        return;
      }
  
      const data = await res.json();
      setWins(data);
    } catch (err) {
      console.error("fetchWins crashed:", err);
    }

  };

  // Runs once on component mount
  useEffect(() => {
    fetchWins();
  }, []);

// =====================
// ==== Delete wins ====
// ===================== 
// updated behave like error handling
const deleteWin = async (id) => { // Use win ID
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });  // checks response
    if (!response.ok) throw new Error(`Failed to delete win. Status: ${response.status}`);

      // Only parse JSON if response has JSON content
      if (response.headers.get("content-type")?.includes("application/json")) {
        const data = await response.json();
        console.log("Deleted win:", data);
      }
    fetchWins(); // update state function
  } catch (error) {
    console.error("Error deleting win:", error);
    alert("Could not delete win. Check console for details.");
  } 
  };

  return ( // Home page structure
    <div>
      <h1>Quiet Wins</h1>
      <Link to="/new">Add New Win</Link>

      {wins.map((win) => (
        <div key={win._id} data-win>
          <h3>{win.title}</h3>
          <p>{win.category}</p>
          <p>{win.reflection}</p>
          {/* Edit link passes ID */}
          <Link to={`/edit/${win._id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => deleteWin(win._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Home;