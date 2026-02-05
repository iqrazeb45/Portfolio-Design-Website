import { Routes, Route } from "react-router-dom"; // no need for Router here
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Education" element={<Education />} />
      </Routes>

    </>
  );
}

export default App;
