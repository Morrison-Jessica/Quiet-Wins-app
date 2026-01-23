import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Base API url = Render.com backend url
const API_URL = 'https://quiet-wins-api.onrender.com/';

function Home() {
  // State to stores list of wins
    const [wins, setWins] = useState([]);

// ====================
// ==== Fetch wins ====
// ==================== 
  const fetchWins = async () => {
    const res = await fetch(API_URL); // Calls GET /api/wins
    const data = await res.json(); // Convert to JSON
    setWins(data); // Save to state
  };

  // Runs once on component mount
  useEffect(() => {
    fetchWins();
  }, []);

// =====================
// ==== Delete wins ====
// ===================== 
const deleteWin = async (id) => { // Use win ID
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' }); // Calls DELETE /api/wins/:id
    // Refresh list
    fetchWins();
  };

  return ( // Home page structure
    <div>
      <h1>Quiet Wins</h1>
      <Link to="/new">Add New Win</Link>

      {wins.map((win) => (
        <div key={win._id}>
          <h3>{win.title}</h3>
          <p>{win.category}</p>
          <p>{win.reflection}</p>
          <button onClick={() => deleteWin(win._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Home;