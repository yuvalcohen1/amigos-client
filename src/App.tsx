import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/SignInPage/SignInPage";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </div>
  );
};

export default App;
