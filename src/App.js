import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About"
import Strategies from "./components/strategies/Strategies"
import PriceTable from "./components/price/Price"
import Comments from "./components/comments/Comments"
import Info from "./components/info/Info"

function App() {
  return (
    <div>
     <Header />
     <Hero />
     <About />
     <Strategies />
     <PriceTable />
     <Comments />
     <Info />
    </div>
  );
}

export default App;
