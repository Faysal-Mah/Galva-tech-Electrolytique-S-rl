import React from 'react';
import { HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Sectors from './pages/Sectors';
import Quality from './pages/Quality';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Home id="home" />
        <About id="apropos" />
        <Services id="services" />
        <Sectors id="secteurs" />
        <Quality id="qualite" />
        <Contact id="contact" />
      </Layout>
    </HashRouter>
  );
};

export default App;