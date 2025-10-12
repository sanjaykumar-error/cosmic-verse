import Navbar from "./components/Navbar";
import"./App.css";
import Home from "./components/Home";
import Astronomy from "./components/Astronomy";
import Planets from "./components/Planets";
import Astrology from "./components/Astrology";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-black">
      <Navbar />
      <Home />
      <Astronomy />
      <Planets />
      <Astrology />
      <ContactUs />
    </div>
  );
}