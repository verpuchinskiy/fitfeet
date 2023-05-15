import "./app.scss";
import { BottomSection } from "./components/BottomSection";
import { Hero } from "./components/Hero";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { Section4 } from "./components/Section4";
import { ShopSection } from "./components/ShopSection";

function App() {
  return (
    <div className="fullpage_container">
      <div className="section nav_hero">
        <Hero />
      </div>
      <div className="section">
        <Section2 />
      </div>
      <div className="section">
        <Section3 />
      </div>
      <div className="section">
        <Section4 />
      </div>
      <div className="section">
        <ShopSection />
      </div>
      <div className="section">
        <BottomSection />
      </div>
    </div>
  );
}

export default App;
