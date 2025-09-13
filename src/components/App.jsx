import React from 'react';

// Importando todos os componentes
import Header from './Header.jsx';
import Timer from './Timer.jsx';
import Carrossel from './Carrossel.jsx';
import Texto from './Texto.jsx';
import Desenho from './Desenho.jsx';
// O componente Corrente foi removido daqui
import Footer from './Footer.jsx';

// Importa os estilos do Swiper (Carrossel)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <>
      <Header />
      <main>
        <Texto />
        {/* A tag <Corrente /> foi removida daqui */}
        <Timer />
        <Carrossel />
      </main>
      <Footer />
      <Desenho />
    </>
  );
}

export default App;