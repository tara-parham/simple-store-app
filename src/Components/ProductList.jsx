import { useContext, useState } from "react";
import OrderForm from "./OrderForm";
import { CartContext } from "../context/CartContext";
export default function ProductList() {
  //state
  const [products, setProducts] = useState([]);
  const [inputData, setInputData] = useState({ name: "" });
  //context
  const { addToCart } = useContext(CartContext);
  //functions
  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function deleteProduct(pname) {
    const newList = products.filter((item) => pname !== item.name);
    setProducts(newList);
  }
  function hanldeSubmit(e) {
    e.preventDefault();
    if (inputData.name.trim() === "") {
      alert("Pleae fill the field");
      return;
    }
    setProducts([...products, inputData]);
    addToCart(inputData);
    setInputData({ name: "" });
  }
  //return
  return (
    <section>
      <form onSubmit={hanldeSubmit}>
        <input
          className="border border-1 px-2"
          name="name"
          placeholder="Product"
          type="text"
          value={inputData.name}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="m-2 px-1 border border-green-800 text-green-600"
        >
          Add
        </button>
      </form>
      <div>
        <ul>
          {products.map((item) => (
            <li>
              {item.name}
              <button
                className="m-2 px-1 border border-rose-950 text-rose-800"
                onClick={() => deleteProduct(item.name)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <OrderForm />
    </section>
  );
}
