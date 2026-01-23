import { BrowserRouter, Routes, Route } from 'react-router-dom';
// APP.jsx now Routes only - no logic
import Home from './pages/Home';
import NewWin from './pages/NewWin';

// Function sets up Routing for app
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page - lists wins */}
        <Route path="/" element={<Home />} />

        {/* Page creates New Win */}
        <Route path="/new" element={<NewWin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
