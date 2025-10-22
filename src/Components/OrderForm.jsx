import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function OrderForm() {
  //state
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [error, setError] = useState({ name: "", address: "", phone: "" });
  //context
  const { setCartItems } = useContext(CartContext);
  //function
  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    if (e.target.value !== "") {
      setError({ name: "", address: "", phone: "" });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (userInfo.name === "") {
      setError({ name: "You must fill the name filed" });
    } else if (userInfo.address === "") {
      setError({ address: "You must fill the address filed" });
    } else if (userInfo.phone === "") {
      setError({ phone: "You must fill the phone filed" });
    } else {
      console.log(userInfo);
      setUserInfo({
        name: "",
        address: "",
        phone: "",
      });
      setCartItems([]);
      alert("You submit your shop successfully");
    }
  }
  //return
  return (
    <form onSubmit={handleSubmit} className="mt-7">
      <h2 className="font-bold text-blue-950 mb-1">User's Information</h2>
      <p className="mb-3 text-blue-950">
        Please enter your information after your cart is full.
      </p>
      <input
        className="border-2 border-blue-950 bg-blue-50 rounded py-1 px-2 mr-2"
        type="text"
        name="name"
        value={userInfo.name}
        placeholder="Your name"
        onChange={handleChange}
      />
      <input
        className="border-2 bg-blue-50 border-blue-950 rounded py-1 px-2 mx-2"
        type="text"
        name="address"
        value={userInfo.address}
        placeholder="Your address"
        onChange={handleChange}
      />

      <input
        className="border-2 bg-blue-50 border-blue-950 rounded py-1 px-2 mx-2"
        type="tel"
        name="phone"
        value={userInfo.phone}
        placeholder="Your phone"
        onChange={handleChange}
      />
      <button
        className="border-2 border-blue-800 bg-blue-200 rounded py-1 px-2 mx-2 cursor-pointer"
        type="submit"
      >
        Sumbit
      </button>
      <p className="mt-2 mx-2">
        {error.name && <strong className="text-red-600">{error.name}</strong>}
        {error.address && (
          <strong className="text-red-600">{error.address}</strong>
        )}
        {error.phone && <strong className="text-red-600">{error.phone}</strong>}
      </p>
    </form>
  );
}
