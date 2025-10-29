import "./OrderPage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const toppingList = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
    "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno",
    "Sarımsak", "Biber", "Ananas", "Kabak"
  ];

  const toppingCost = toppings.length > 4 ? (toppings.length - 4) * 5 : 0;
  const basePrice = 85.5;
  const total = (basePrice + toppingCost) * quantity;

  const handleToppingChange = (t) => {
    if (toppings.includes(t)) {
      setToppings(toppings.filter(item => item !== t));
    } else if (toppings.length < 10) {
      setToppings([...toppings, t]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!size || !dough) {
      alert("Lütfen pizza boyutu ve hamur seçiniz.");
      return;
    }
    if (note.trim().length < 3) {
      alert("Not alanına en az 3 karakter giriniz.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://reqres.in/api/users",
        { size, dough, toppings, note, quantity, total },
        { headers: { "x-api-key": "reqres-free-v1" } }
      );
      console.log(response.data);
      navigate("/success", {
        state: { size, dough, toppings, total, toppingCost, quantity, note }
      });
    } catch {
      alert("Bir hata oluştu, tekrar deneyiniz.");
    }
    setIsSubmitting(false);
  };

  return (
    <main className="order-page">
      <header className="order-header">
        <h1>Teknolojik Yemekler</h1>
        <div className="banner-wrapper"></div>
      </header>

      <img
        src="/assets/iteration-2/pictures/form-banner.png"
        alt="Pizza Banner"
        className="pizza-banner"
      />

      <div className="urun-text">
        <nav className="breadcrumb">
          <a href="#">Anasayfa</a> • <span>Sipariş Oluştur</span>
        </nav>
        <h2 className="product-name">Position Absolute Acı Pizza</h2>
        <div className="price-rating">
          <span className="price">85.50₺</span>
          <span className="rating">4.9 (200)</span>
        </div>
        <article className="product-text">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </article>
      </div>

      <section className="order-container">
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Boyut Seç <span className="req">*</span></label>
              <div className="options">
                {["S", "M", "L"].map(opt => (
                  <label key={opt}>
                    <input
                      type="radio"
                      name="size"
                      value={opt}
                      checked={size === opt}
                      onChange={(e) => setSize(e.target.value)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Hamur Seç <span className="req">*</span></label>
              <select value={dough} onChange={(e) => setDough(e.target.value)}>
                <option value="" disabled hidden>-Hamur Kalınlığı Seç-</option>
                <option value="ince">İnce</option>
                <option value="orta">Orta</option>
                <option value="kalın">Kalın</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Ek Malzemeler</label>
            <p className="subtext">En Fazla 10 malzeme seçilebilir. İlk 4’ü ücretsiz, sonrası 5₺.</p>

            <div className="toppings-rows">
              {toppingList.map((t, i) => (
                <div
                  key={i}
                  className="topping-row"
                  onClick={() => handleToppingChange(t)}
                >
                  <div className={`checkbox-45 ${toppings.includes(t) ? "on" : ""}`}>
                    {toppings.includes(t) ? "✓" : ""}
                  </div>
                  <span className="topping-text">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Sipariş Notu</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </div>

          <hr className="divider" />

          <div className="order-bottom">
            <div className="counter">
              <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <span className="qty">{quantity}</span>
              <button type="button" onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>

            <div className="summary-box">
              <h3>Sipariş Toplamı</h3>
              <div className="summary-line">
                <span>Seçimler</span><span>{toppingCost.toFixed(2)}₺</span>
              </div>
              <div className="summary-line total">
                <span className="total-label">Toplam</span>
                <span className="total-price">{total.toFixed(2)}₺</span>
              </div>
              <button type="submit" className="btn-order" disabled={isSubmitting}>
                {isSubmitting ? "Gönderiliyor..." : "SİPARİŞ VER"}
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
