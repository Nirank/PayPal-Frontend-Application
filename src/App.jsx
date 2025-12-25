// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // ADD THIS
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import HomePage from "./pages/Home";

function App() {
  return (
    <AuthProvider> {/* WRAP WITH THIS */}
      <Router>
        <Routes>
          {/* Public routes without layout */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          </Routes>
      </Router>
    </AuthProvider> /* ADD THIS */
  );
}

export default App;