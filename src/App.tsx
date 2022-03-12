import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EntryPage from "./pages/EntryPage/EntryPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EntryPage />} />
      </Routes>
    </div>
  );
}

export default App;
