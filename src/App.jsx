import React from 'react';
import MainSection from './components/MainSection';
import CategoryBar from './components/CategoryBar';
import PromoGrid from './components/PromoGrid';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

export default function App() {
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
