import React from 'react';

// Importando todos os componentes
import Header from './Header.jsx';
import Timer from './Timer.jsx';
import Carrossel from './Carrossel.jsx';
import Texto from './Texto.jsx';
import Desenho from './Desenho.jsx';
import Footer from './Footer.jsx';

// Importa os estilos do Swiper (Carrossel)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    // Esta é a nossa "tela" principal que vai ocupar 100% da altura
    <div className="site-container">
      <Header />
      {/* A tag <main> agora vai crescer para preencher o espaço restante */}
      <main>
        <Texto />
        <Timer />
        <Carrossel />
      </main>
      <Footer />
      <Desenho />
    </div>
  );
}

export default App;