import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Plagarism from './components/Plagarism';
import HowtoUsePlagarism from './components/HowtoUsePlagarism';
import Result from './components/Result';
import FreeOnlinePrivacy from './components/FreeOnlinePrivacy';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <header id="header">
        <Header />
      </header>
      <main>
        <Plagarism />
        <HowtoUsePlagarism />
        <Result />
        <FreeOnlinePrivacy />
        <Contact />
        <About />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
