import "./App.css";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <section className="p-5 ">
      <CartProvider />
    </section>
  );
}

export default App;
