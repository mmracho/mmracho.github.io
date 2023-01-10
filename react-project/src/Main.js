// Import Components
import Navi from './components/Navi';
import App from './App';
import './Main.css';
import Home from './components/Home';
import Footer from './components/Footer';

function main() {
  return (
    <div>
      <h1><Navi /></h1>
      <Home />
      <div className='content-wrap'>
      <Footer />
      </div>
    </div>
  );
}

export default main;
