import React from 'react';
import './index.css';
import MainSection from './components/MainSection';
import CategoryBar from './components/CategoryBar';
import PromoGrid from './components/PromoGrid';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <MainSection />

      <CategoryBar />

      <PromoGrid />

      <ProductSection />

      <Footer />
    </>
  );
}

export default App;
