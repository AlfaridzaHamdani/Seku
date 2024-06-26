import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import InsZone from "./Pages/InsZone";
import Products from "./Pages/Products";
import About from "./Pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insZone" element={<InsZone />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
