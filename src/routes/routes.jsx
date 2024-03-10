import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/Login";
import { UserHome } from "../pages/UserHome";
import { Register } from "../pages/Register";
// import { LoginContext } from "./contexts/LoginContext";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserHome" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
};
