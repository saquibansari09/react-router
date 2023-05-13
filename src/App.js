import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About} />
        <Route path="/service" exact Component={Service} />
        <Route path="/blogs" exact Component={Blogs} />
        <Route path="/contact" exact Component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
