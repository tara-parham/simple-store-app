import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);
  return (
    <div>
      <p className="my-2 font-bold text-violet-800">Shopping Cart Items</p>
      <ul className="border-2 border-violet-900 bg-violet-50 w-100 mb-3">
        {cartItems.map((item, index) => (
          <li key={index} className="p-2">
            - {item.name}: {item.price}
            <button
              className="m-2 px-1 border border-rose-950 text-rose-800 cursor-pointer bg-rose-50"
              onClick={() => removeFromCart(item.name)}
            >
              Delete
            </button>
          </li>
        ))}
        <p className="p-2 font-bold">Total: {total.toLocaleString("en-US")}</p>
      </ul>
    </div>
  );
}
