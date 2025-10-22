
import CategoryBar from './CategoryBar';

export default function ProductSection() {
  const products = [
    { id: 1, name: 'Terminal Pizza', img: '/assets/iteration-2/pictures/food-1.png' },
    { id: 2, name: 'Position Absolute Acı Pizza', img: '/assets/iteration-2/pictures/food-2.png' },
    { id: 3, name: 'useEffect Tavuklu Burger', img: '/assets/iteration-2/pictures/food-3.png' },
  ];

  return (
    <section className="last-section">
      <p className="last-p">en çok paketlenen menüler</p>
      <h2 className="last-title">Acıktıran Kodlara Doyuran Lezzetler</h2>
      <CategoryBar />
      <div className="cards">
        {products.map(p => (
          <article key={p.id} className="product-card">
            <div className="product-media">
              <img src={p.img} alt={p.name} />
            </div>
            <h3 className="product-title">{p.name}</h3>
            <div className="product-meta">
              <span className="rating">4.9</span>
              <span className="reviews">(200)</span>
              <span className="price">60₺</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
