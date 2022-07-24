import './App.css';
import Hero1 from './COMPONENTS/Heroes/hero1/hero1';
import Hero2 from './COMPONENTS/Heroes/hero2/hero2';
import { Route, Routes } from 'react-router-dom';
import StreetBoy from './PAGES/StreetBoy/streetBoy';

function App() {
  return (
    <div className="App">
           <div className='frete'>
                Frete grátis para compras acima de: xx,xx - animação 'pulse' pulsante
            </div>
       <Routes>

          <Route exact path="/" element={ <Hero1 /> } />
          <Route exact path="/streetMasculino" element={ <StreetBoy /> } />


       </Routes>




    </div>
  );
}

export default App;
