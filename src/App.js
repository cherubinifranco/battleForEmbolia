import "./App.css";
import Hero from "./sections/Hero";
import Footer from "./Layout/Footer";
import Features from "./sections/Features";
import Community from "./sections/Community";
import PressKit from "./sections/PressKit";
import FinalCTA from "./sections/FinalCTA";
import MediaGallery from "./sections/MediaGallery";
import Navbar from "./Layout/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MediaGallery />
      <Features />
      <Community />
      <PressKit />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
