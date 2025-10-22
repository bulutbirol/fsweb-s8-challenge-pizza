export default function PromoGrid() {
  return (
    <div className="container">
      <section className="promo-grid">
        <article className="card-large bg-red">
          <div className="card-content">
            <h1 className="title">Özel<br />Lezzetus</h1>
            <p className="subtitle">Position: Absolute Acı Burger</p>
            <a className="btn" href="#">SİPARİŞ VER</a>
          </div>
        </article>

        <article className="card-small bg-dark">
          <div className="card-content">
            <h2 className="card-title">Hackathlon<br />Burger Menü</h2>
            <a className="btn" href="#">SİPARİŞ VER</a>
          </div>
        </article>

        <article className="card-small2 bg-sand">
          <div className="card-content">
            <h2 className="card-title"><span className="em">Çoooook</span> hızlı<br />npm gibi kurye</h2>
            <a className="btn" href="#">SİPARİŞ VER</a>
          </div>
        </article>
      </section>
    </div>
  );
}
