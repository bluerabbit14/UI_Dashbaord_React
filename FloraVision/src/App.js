import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TopSelling from './components/TopSelling';
import Review from './components/Review';
import BestCarousel from './components/BestCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar ></Navbar>
      <Hero></Hero>
      <TopSelling></TopSelling>
      <Review></Review>
      <BestCarousel></BestCarousel>
      <Footer></Footer>
    </>
  );
}
export default App;
