import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/DashboardLayout/Home";
import Users from "./pages/DashboardLayout/Users";
import Contac from "./pages/DashboardLayout/Contac";
import UserDetail from "./pages/DashboardLayout/UserDetail";
import Login from "./pages/AuthLayout/Login";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./pages/AuthLayout/Register";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="contac" element={<Contac />} />
        </Route>

        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
