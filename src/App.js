import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import Homepage from "./components/Pages/Homepage/Homepage";
import Login from "./components/Pages/Login/Login";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
