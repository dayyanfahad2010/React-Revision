import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="p-6 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer/>
    </div>
  );
}

export default App;