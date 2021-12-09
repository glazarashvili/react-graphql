import "./App.css";
import CharactersList from "./pages/CharactersList";
import CharacterDetail from "./pages/CharacterDetail";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/characters" />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
