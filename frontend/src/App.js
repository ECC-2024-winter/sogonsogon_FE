import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
