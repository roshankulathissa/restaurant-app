import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Navbar />
      <Contact />
      <Work />
    </div>
  );
}

export default App;
