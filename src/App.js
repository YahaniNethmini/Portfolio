import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Screens/About"; // Ensure correct path to About component
import Skills from "./Screens/Skills"; // Ensure correct path to Skills component
import Certificates from "./Screens/Certificates"; // Ensure correct path to Certificates component
import Projects from "./Screens/Projects"; // Ensure correct path to Projects component
import Education from "./Screens/Education"; // Ensure correct path to Education component
import Contact from "./Screens/Contact";

function App() {
    return (
        <Router>
          <div>
            <Routes>
                <Route index element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} /> {/* Use lowercase for paths */}
                <Route path="/certificates" element={<Certificates />} /> {/* Use lowercase for paths */}
                <Route path="/projects" element={<Projects />} /> {/* Use lowercase for paths */}
                <Route path="/education" element={<Education />} /> {/* Use lowercase for paths */}
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </div>
        </Router>
    );
}

export default App;
