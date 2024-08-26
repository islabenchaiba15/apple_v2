import "./App.css";
import Chip from "./components/Chip";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hightlights from "./components/Hightlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import * as Sentry from "@sentry/react";

// Name the component function
function App() {
  
  return (
    <main className="overflow-hidden">
      <div className="">
        <Navbar />
        <Hero />
        <Hightlights />
        <Model />
        <Features />
        <Chip />
        <Footer />
      </div>
    </main>
  );
}

// Export the named component wrapped with Sentry
export default Sentry.withProfiler(App);
