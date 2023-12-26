import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Background from "./components/Background";
import "./App.css";

function App() {
  return (
    <div className={`mt-nav-height`}>
      <Navbar />
      <HeroSection />
      <Background />
    </div>
  );
}

export default App;
