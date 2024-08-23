import "./App.css";
import Hero from "./components/Hero";
import Hightlights from "./components/Hightlights";
import Navbar from "./components/Navbar";

const App = () => {
  return <main className="overflow-hidden">
    <Navbar/>
    <Hero/>
    <Hightlights/>
  </main>
};

export default App;
