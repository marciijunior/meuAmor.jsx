import React from 'react';
import Header from './Header.jsx';
import Timer from './Timer.jsx';
import Carrossel from './Carrossel.jsx';
import Texto from './Texto.jsx';
import Desenho from './Desenho.jsx';
import Footer from './Footer.jsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <div className="site-container">
      <Header />
      <main>
        <Timer />
        <Carrossel />
        <Texto />
      </main>
      <Footer />
      <Desenho />
    </div>
  );
}

export default App;