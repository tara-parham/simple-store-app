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
    }
  }
  //return
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border border-1 px-2 "
        type="text"
        name="name"
        value={userInfo.name}
        placeholder="Your name"
        onChange={handleChange}
      />
      {error.name && <strong className="text-red-600">{error.name}</strong>}
      <input
        className="border border-1 px-2 mx-2"
        type="text"
        name="address"
        value={userInfo.address}
        placeholder="Your address"
        onChange={handleChange}
      />
      {error.address && (
        <strong className="text-red-600">{error.address}</strong>
      )}
      <input
        className="border border-1 px-2 mx-2"
        type="tel"
        name="phone"
        value={userInfo.phone}
        placeholder="Your phone"
        onChange={handleChange}
      />
      {error.phone && <strong className="text-red-600">{error.phone}</strong>}
      <button
        className="px-1 border border-rose-950 text-rose-800"
        type="submit"
      >
        Sumbit
      </button>
    </form>
  );
}
