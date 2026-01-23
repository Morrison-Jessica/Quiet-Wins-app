// ORIGINAL LOGIC - NOW IN PAGE COMPONENTS

// import { useEffect, useState } from 'react';

// const API_URL = 'https://quiet-wins-api.onrender.com/';

// function App() {
  // const [wins, setWins] = useState([]);
  // const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('');
  // const [reflection, setReflection] = useState('');
// // Fetch wins
//   const fetchWins = async () => {
//     const res = await fetch(API_URL);
//     const data = await res.json();
//     setWins(data);
//   };
// useEffect(() => {
//     fetchWins();
//   }, []);
// Create win
//   const handleSubmit = async (e) => {
//     e.preventDefault();
// await fetch(API_URL, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title, category, reflection }),
//     });
// setTitle('');
//     setCategory('');
//     setReflection('');
//     fetchWins();
//   };
// Delete win
  // const deleteWin = async (id) => {
  //   await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  //   fetchWins();
  // };
// return (
//     <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
//       <h1>Quiet Wins</h1>
// <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
// <input
//           placeholder="Category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           required
//         />
// <textarea
//           placeholder="Reflection (optional)"
//           value={reflection}
//           onChange={(e) => setReflection(e.target.value)}
//         />
// <button type="submit">Add Win</button>
//       </form>
// <hr />
{/* {wins.map((win) => (
        <div key={win._id}>
          <h3>{win.title}</h3>
          <p><strong>{win.category}</strong></p>
          <p>{win.reflection}</p>
          <button onClick={() => deleteWin(win._id)}>Delete</button>
          <hr />
        </div>
      ))} */}
    {/* </div>
  );
}
export default App; */}
