import './App.css';
import Navi from './components/NavHeader.js';
import Footer from './components/Footer.js';
import Game from './components/Game.mjs';


function App() {
  return (
    <div className="App">
      <div><Navi /></div>
      <div className='bodyGame'><Game /></div>
      <div><Footer /></div>
      
    </div>
  );
}

export default App;
