const categories = [
  { id: 1, title: 'YENİ! Kore', icon: '/assets/iteration-2/icons/1.svg' },
  { id: 2, title: 'Pizza', icon: '/assets/iteration-2/icons/2.svg' },
  { id: 3, title: 'Burger', icon: '/assets/iteration-2/icons/3.svg' },
  { id: 4, title: 'Kızartmalar', icon: '/assets/iteration-2/icons/4.svg' },
  { id: 5, title: 'Fast food', icon: '/assets/iteration-2/icons/5.svg' },
  { id: 6, title: 'Gazlı İçecek', icon: '/assets/iteration-2/icons/6.svg' },
];

export default function CategoryBar() {
  return (
    <section className="category-wrap">
      <nav className="category-bar" aria-label="Kategoriler">
        {categories.map(cat => (
          <a key={cat.id} className="cat" href={`#${cat.title.toLowerCase()}`} title={cat.title}>
            <img src={cat.icon} alt={`${cat.title} ikon`} />
            <span>{cat.title}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
