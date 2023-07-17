import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import AddVideoForm from "./pages/Admin-dash/Form/AddVideoForm";
import { AuthProvider } from "./contexts/AuthContext";
import AdminPage from "./pages/Admin-dash/AdminPage";
import DeleteVideosForm from "./pages/Admin-dash/DeleteVideosForm";

export default function App() {
  const storedToken = localStorage.getItem("token");

  return (
    <AuthProvider initialToken={storedToken}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* <Route
            path="admin"
            element={token && isAdmin ? <AdminPage /> : <Home />}
          /> */}
          <Route path="/addvideos" element={<AddVideoForm />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/deletevideos" element={<DeleteVideosForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
