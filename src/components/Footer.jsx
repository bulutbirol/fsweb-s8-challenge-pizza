export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-card">
            <img src="/assets/iteration-2/footer/logo-footer.svg" className="footer-logo" />
            <div className="contact-item">
              <img src="/assets/iteration-2/footer/icons/icon-1.png" />
              <span>341 Londonderry Road,<br />Istanbul Türkiye</span>
            </div>
            <div className="contact-item">
              <img src="/assets/iteration-2/footer/icons/icon-2.png" />
              <span>aciktim@teknolojikyemekler.com</span>
            </div>
            <div className="contact-item">
              <img src="/assets/iteration-2/footer/icons/icon-3.png" />
              <span>+90 216 123 45 67</span>
            </div>
          </div>

          <div className="footer-card">
            <h3>Hot Menü</h3>
            <a href="#">Terminal Pizza</a>
            <a href="#">5 Kişilik Hackathlon Pizza</a>
            <a href="#">useEffect Tavuklu Pizza</a>
            <a href="#">Beyaz Console Frosty</a>
            <a href="#">Testler Geçti Mutlu Burger</a>
            <a href="#">Position Absolute Acı Burger</a>
          </div>

          <div className="footer-instagram">
            <h3>Instagram</h3>
            {[0, 1, 2, 3, 4, 5].map(i => (
              <img key={i} src={`/assets/iteration-2/footer/insta/li-${i}.png`} alt={`insta-${i}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2023 Teknolojik Yemekler.</p>
        <i className="fa-brands fa-twitter" style={{ color: '#ffffff' }}></i>
      </div>
    </footer>
  );
}
