import { createContext, useState } from "react";
import ProductList from "../Components/ProductList";
import OrderForm from "../Components/OrderForm";
import Cart from "../Components/Cart";

export const CartContext = createContext();

export default function CartProvider() {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }
  function removeFromCart(productName) {
    const updatedList = cartItems.filter((item) => item.name !== productName);
    setCartItems(updatedList);
  }
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      <ProductList />
      <Cart />
      <OrderForm />
    </CartContext.Provider>
  );
}
