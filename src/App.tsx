import React, { FC, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import EntryPage from "./pages/EntryPage/EntryPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import { useAppDispatch, useAppSelector } from "./redux/app/hooks";
import {
  getConnectedUserSync,
  selectConnectedUser,
} from "./redux/features/connectedUserSlice";

const App: FC = () => {
  const { value: connectedUser } = useAppSelector(selectConnectedUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const previouslyConnectedUser = JSON.parse(
      localStorage.getItem("connectedUser") as string
    );
    if (previouslyConnectedUser) {
      dispatch(getConnectedUserSync(previouslyConnectedUser));
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={connectedUser ? <Navigate to="/feed" /> : <EntryPage />}
        />
        <Route path="/feed" element={connectedUser && <FeedPage />} />
      </Routes>
    </div>
  );
};

export default App;
