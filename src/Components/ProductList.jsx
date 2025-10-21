import { useContext, useState } from "react";
import OrderForm from "./OrderForm";
import { CartContext } from "../context/CartContext";
export default function ProductList() {
  //state
  const [products, setProducts] = useState([]);
  const [inputData, setInputData] = useState({ name: "", price: "" });
  //context
  const { addToCart } = useContext(CartContext);
  //functions
  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function hanldeSubmit(e) {
    e.preventDefault();
    if (inputData.name.trim() === "") {
      alert("Pleae fill the field");
      return;
    }
    setProducts([...products, inputData]);
    addToCart(inputData);
    setInputData({ name: "", price: "" });
  }
  //return
  return (
    <section>
      <form onSubmit={hanldeSubmit}>
        <input
          className="border border-1 px-2"
          name="name"
          placeholder="Product's name"
          type="text"
          value={inputData.name}
          onChange={handleChange}
        />
        <input
          className="border border-1 px-2"
          name="price"
          placeholder="Product's price"
          type="number"
          value={inputData.price}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="m-2 px-1 border border-green-800 text-green-600"
        >
          Add
        </button>
      </form>
    </section>
  );
}
