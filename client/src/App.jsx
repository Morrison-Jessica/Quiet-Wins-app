import { BrowserRouter, Routes, Route } from 'react-router-dom';
// APP.jsx now Routes only - no logic
import Home from './pages/Home';
import NewWin from './pages/NewWin';
import EditWin from './pages/EditWin';
import './styles.css';


// Function sets up Routing for app
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page - lists wins */}
        <Route path="/" element={<Home />} />

        {/* Page create New Win */}
        <Route path="/new" element={<NewWin />} />

        {/* Edit existing win by ID */}
        <Route path="/edit/:id" element={<EditWin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
