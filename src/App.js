import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About"
import Strategies from "./components/strategies/Strategies"
import PriceTable from "./components/price/Price"

function App() {
  return (
    <div>
     <Header />
     <Hero />
     <About />
     <Strategies />
     <PriceTable />
    </div>
  );
}

export default App;
