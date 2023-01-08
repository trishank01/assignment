import './App.css';
import HeaderNavBar from './components/headerNavBar/HeaderNavBar';
import About from './sections/aboutSection/About';
import Details from './sections/detailSection/Details';
import HeroSection from './sections/heroSection/HeroSection';


function App() {
  return (
  <div>
     <HeaderNavBar/>
     <HeroSection/>
     <About/>
     <Details/>
  </div>
  );
}

export default App;
