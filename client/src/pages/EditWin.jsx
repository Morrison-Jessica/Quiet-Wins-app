import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Redirects and gets URL params

const API_URL = import.meta.env.VITE_API_URL;

function EditWin() {
  // Get ID from URL (/edit/:id)
  const { id } = useParams();

  // Used to redirect after update
  const navigate = useNavigate();

  // Form state (same as NewWin)
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [reflection, setReflection] = useState('');

  // Fetch existing win data when page loads
  useEffect(() => {
    const fetchWin = async () => {
      const res = await fetch(`${API_URL}/${id}`);
      const data = await res.json();

      // Populate form with existing values
      setTitle(data.title);
      setCategory(data.category);
      setReflection(data.reflection);
    };

    fetchWin();
  }, [id]);

  // Handle update submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // PUT request updates existing record
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        category,
        reflection,
      }),
    });

    // Go back home after update
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Quiet Win</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditWin;
