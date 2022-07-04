import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import MenuBar from "./components/MenuBar";
import Pharmacy from "./components/pharmacy/Pharmacy";
import NotFound from "./components/NotFound";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NewMedicine from "./components/pharmacy/NewMedicine";
import UpdateMedicine from "./components/pharmacy/UpdateMedicine";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div>
        <MenuBar />
        <div>
          <Routes>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/pharmacy/new" element={<NewMedicine />}></Route>
            <Route
              path="/pharmacy/update/:id"
              element={<UpdateMedicine />}
            ></Route>
            <Route path="/pharmacy" element={<Pharmacy />}></Route>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
