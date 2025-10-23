import { Link } from 'react-router-dom';
export default function MainSection() {
  
  return (
    <section className="main-section">
      <img src="/assets/iteration-1/home-banner.png" alt="Arka Plan" className="bg" />
      <div className="text">
        <h1>Teknolojik Yemekler</h1>
        <p>fırsatı kaçırma</p>
        <h2>
          KOD ACIKTIRIR <br /> PIZZA, DOYURUR
        </h2>
<Link to="/order" className="btn">
  ACIKTIM
</Link>
      </div>
    </section>
  );
}
