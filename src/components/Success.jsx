import { useLocation, useNavigate } from "react-router-dom";
import "./Success.css";
import Footer from "./Footer";

export default function Success() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return <h2>Geçersiz işlem.</h2>;
    }

    const { size, dough, toppings, total, toppingCost, quantity, note } = state;

    return (
        <main className="success-page">
            <div className="success-content">
                <h1>Teknolojik Yemekler</h1>
                <h3 className="tagline">lezzetin yolda</h3>
                <h2 className="title">SİPARİŞ ALINDI<hr /></h2>

                <div className="details">
                    <h3>Position Absolute Acı Pizza</h3>
                    <p>Boyut: {size}</p>
                    <p>Hamur: {dough}</p>
                    <p>Adet: {quantity}</p>
                    <p>Ek Malzemeler: {toppings.join(", ")}</p>
                     <p>Sipariş Notu: {note}</p>
                    <div className="summary">
                        <h3>Sipariş Toplamı:</h3>
                        <p>Seçimler: {toppingCost.toFixed(2)}₺</p>
                        <p>Toplam: {total.toFixed(2)}₺</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
