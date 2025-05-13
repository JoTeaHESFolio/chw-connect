import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import AddEntry from "./pages/AddEntry";
import Participants from "./pages/Participants";
import Resources from "./pages/Resources";
import "./index.css";

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddEntry />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
