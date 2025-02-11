import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage, LoginPage, SignupPage, SaveListPage, SearchResultsPage } from "./pages";
import { Header } from "../src/components"

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/savelist" element={<SaveListPage />} />
          <Route path="/results" element={<SearchResultsPage />} />
        </Routes>
      </Router>
  );
}

export default App;
