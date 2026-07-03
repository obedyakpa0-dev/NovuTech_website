import { Routes, Route } from "react-router-dom";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Team     from "./pages/Team";
import Projects from "./pages/Projects";
import Contact  from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/"         element={<Home />}     />
      <Route path="/about"    element={<About />}    />
      <Route path="/team"     element={<Team />}     />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact"  element={<Contact />}  />
    </Routes>
  );
}
