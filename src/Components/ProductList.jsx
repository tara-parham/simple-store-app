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
      <form onSubmit={hanldeSubmit} className="mb-5">
        <h2 className="font-bold mb-2 text-teal-800">
          Please add the products
        </h2>
        <input
          className="border-2 border-teal-800 rounded py-1 px-2 mr-2 bg-teal-50"
          name="name"
          placeholder="Product's name"
          type="text"
          value={inputData.name}
          onChange={handleChange}
        />
        <input
          className="border-2 border-teal-800 rounded py-1 px-2 mx-2 bg-teal-50"
          name="price"
          placeholder="Product's price"
          type="number"
          value={inputData.price}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="border-2 border-teal-600 bg-teal-200 rounded py-1 px-2 mx-2 cursor-pointer"
        >
          Add
        </button>
      </form>
    </section>
  );
}
