import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  MainPage,
  LoginPage,
  SignupPage,
  SaveListPage,
  SearchResultsPage,
  DetailPage,
  InFolderPage,
  AccountPage,
  AccountEditPage,
  Authentification,
} from './pages';
import { useState } from 'react';
import { Header } from '../src/components';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/auth" element={<Authentification />} /> */}
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/savelist" element={<SaveListPage />} />
        <Route path="/results/:search" element={<SearchResultsPage />} />
        <Route path="/detail/:placeName" element={<DetailPage />} />
        <Route path="/folder/:folderName" element={<InFolderPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/myinfo" element={<AccountEditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
