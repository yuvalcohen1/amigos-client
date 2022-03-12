import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EntryPage from "./pages/EntryPage/EntryPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import { useAppSelector } from "./redux/app/hooks";
import { selectConnectedUser } from "./redux/features/connectedUserSlice";

const App: FC = () => {
  const { value: connectedUser } = useAppSelector(selectConnectedUser);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EntryPage />} />
        {connectedUser && <Route path="/feed" element={<FeedPage />} />}
      </Routes>
    </div>
  );
};

export default App;
