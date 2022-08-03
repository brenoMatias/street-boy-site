import './App.css';
import Home from './PAGES/Home/Home'
import { Route, Routes } from 'react-router-dom';
import StreetBoy from './PAGES/StreetBoy/streetBoy';
import Footer from './COMPONENTS/Footer/footer';
import PagCertificate from './COMPONENTS/SellCertificate/certificate'

function App() {
  return (
    <div className="App">
           <div className='frete'>
                Frete grátis para compras acima de: xx,xx - animação 'pulse' pulsante
            </div>

            <div className='help'> 
            h1 ajuda 
            <h1> link wpp</h1></div>
       <Routes>

          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/streetMasculino" element={ <StreetBoy /> } />

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
