import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Contac from "./pages/Contac";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="contac" element={<Contac />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
