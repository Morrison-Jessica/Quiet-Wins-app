import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Redirects user

// Render.com backend url
const API_URL = 'https://quiet-wins-api.onrender.com/api/wins';

function NewWin() {
     // Redirects user after submitting form
    const navigate = useNavigate();

    // Controls form state
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [reflection, setReflection] = useState('');
  
    // Handles form submission
    const handleSubmit = async (e) => {
      e.preventDefault();  // Prevent page refresh
  
    // Send POST request to backend API
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Tells server sending JSON
        body: JSON.stringify({ title, category, reflection }),
        
      });
      console.log({ title, category, reflection });

    // Redirects back to home page after saving
      navigate('/');
    };
  
    return (
      <div>
        <h2>New Quiet Win</h2>
  
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
  
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            required
          />
  
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Reflection"
          />
  
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
  
  export default NewWin;


// GET    /api/wins
// POST   /api/wins
// PUT    /api/wins/:id
// DELETE /api/wins/:id
