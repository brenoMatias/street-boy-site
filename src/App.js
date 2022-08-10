import './App.css';
import Home from './PAGES/Home/Home'
import { Route, Routes } from 'react-router-dom';
import StreetBoy from './PAGES/StreetBoy/streetBoy'
import StreetGirl from './PAGES/StreetGirl/streetGirl';
import Footer from './COMPONENTS/Footer/footer';
import PagCertificate from './COMPONENTS/SellCertificate/certificate'
import TshirtPage from './PAGES/Categories/Tshirts/TshirtPage';
import AboutUs from './PAGES/QuemSomos/aboutUs'
import FlipCard from './COMPONENTS/FlipCards/flipCard';

function App() {
  return (
    <div className="App">
           <div className='frete'>
                Frete grátis para compras acima de: xx,xx - animação 'pulse' pulsante
            </div>

            <div className='help'> 
            h1 ajuda 
            <h1> Topo da pagina</h1>

            <h1> link wpp</h1></div>
       <Routes>

          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/streetBoy" element={ <StreetBoy /> } />
          <Route exact path="/streetGirl" element={ <StreetGirl /> } />
          <Route exact path="/streetBoy/tshirts" element={ <TshirtPage  /> } />
          <Route exact path="/sobre" element= { <AboutUs /> } />
          <Route exact path="/card" element={ <FlipCard />} />



       </Routes>

       <Footer />
       <PagCertificate />

       <div className='poweredby'>
         <h1> 
           Desenvolvido por Dream Mirror 
           <> incone da Dream e link</>
         </h1>
       </div>



    </div>
  );
}

export default App;
