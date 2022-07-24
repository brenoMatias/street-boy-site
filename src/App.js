import './App.css';
import Home from './PAGES/Home/Home'
import { Route, Routes } from 'react-router-dom';
import StreetBoy from './PAGES/StreetBoy/streetBoy';
import Footer from './COMPONENTS/Footer/footer';

function App() {
  return (
    <div className="App">
           <div className='frete'>
                Frete grátis para compras acima de: xx,xx - animação 'pulse' pulsante
            </div>
       <Routes>

          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/streetMasculino" element={ <StreetBoy /> } />


       </Routes>

<Footer />



    </div>
  );
}

export default App;
