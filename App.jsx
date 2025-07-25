import NavBar from "./components/NavBar";
import Hero from './components/Hero';
import HeroHeader from "./components/HeroHeader";
import Footer from "./components/Footer";
import PreviousInterventions from './components/PreviousInterventions';
function App(){

return(
  <>
    <NavBar role="client"/>
    <Hero/>
    <HeroHeader></HeroHeader>
    <PreviousInterventions></PreviousInterventions>
    <Footer></Footer>
  </>
);
}
export default App