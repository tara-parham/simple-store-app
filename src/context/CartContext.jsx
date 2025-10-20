import { createContext } from "react";
import ProductList from "../Components/ProductList";
import OrderForm from "../Components/OrderForm";

export const CartContext = createContext();

export default function CartProvider() {
  const [cartItems, setCartItems] = useState([]);
  function addToCart() {}
  function removeFromCart() {}
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      <ProductList />
      <OrderForm />
    </CartContext.Provider>
  );
}
