import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);
  return (
    <div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name}, {item.price}
          </li>
        ))}
      </ul>
      <p className="pb-3 pt-1">Total: {total.toLocaleString("en-US")}</p>
    </div>
  );
}
