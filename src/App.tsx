import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { useAppSelector } from "./redux/app/hooks";
import { selectUser } from "./redux/slices/userSlice";

const App: FC = () => {
  const user = useAppSelector(selectUser);

  return (
    <div className="App">
      <Routes>
        {!user && <Route path="/sign-in" element={<SignInPage />} />}
        {!user && <Route path="/sign-up" element={<SignUpPage />} />}
      </Routes>
    </div>
  );
};

export default App;
