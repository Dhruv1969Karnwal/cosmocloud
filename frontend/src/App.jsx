import { Route, Routes } from "react-router-dom";
import Create from "./Pages/Create";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

export default function App() {
  return (
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile/:id" element={<Profile />} />
         </Routes>
  )
}