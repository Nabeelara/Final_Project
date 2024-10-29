import React from "react";
import { useCart } from "react-use-cart";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { formatPrice } from "helpers/helpers";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const Cart = () => {
  // Panggil fungsi dan state yang diperlukan dari useCart
  // const { cartTotal } 

  const Container = tw.div`relative bg-gray-200 text-gray-700 px-12 py-8 lg:py-12`;
  const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
  const {cartTotal, items, updateItemQuantity, removeItem, emptyCart} = useCart();
  const navigate = useNavigate();
  console.log(items);

  const user = JSON.parse(localStorage.getItem("user"));
  const totalPrice = cartTotal 
  console.log(totalPrice)

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateItemQuantity(id,Math.max(1, Math.min(10, newQuantity)))
    } 
    // Your code here
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
    // Your code here
  };

  const handleEmptyCart = () => {
    // Your code here
    emptyCart();
  };

  const calculateTotalPrice = () => {
    // Your code here
    return formatPrice(cartTotal);
  };

  // const renderCheckoutBtn = 
  const renderCheckoutBtn = () => {
      if (user) {
          navigate("/checkout"); // Arahkan ke halaman checkout jika sudah login
      } else {
          navigate("/login"); // Arahkan ke halaman login jika belum login
  }
      if (user) {
        Swal.fire({
          title: 'Added!',
          text: `Your Item is on process.`,
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
};

  return (
    <AnimationRevealPage>
      <Header className="mb-8" />

      <Container className=" flex flex-col justify-center items-center ">
        {items.length > 0 ? (
          <>
            {items.map((cartItem) => (
              <div key={cartItem.id} className="flex items-center w-full border-b py-4">
                <div className="flex items-center space-x-4 w-3/4">
                  <img
                    src={cartItem.imageSrc}
                    alt={cartItem.name}
                    className="w-[200px] h-[160px] object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{cartItem.name}</h3>
                    <p className="text-gray-600">{formatPrice(cartItem.price)}</p>
                  </div>
                </div>
            
                <div className="flex items-center space-x-4 w-1/4 justify-end">
                  <button
                    onClick={() => handleUpdateQuantity(cartItem.id, cartItem.quantity - 1)}
                    className="px-2 py-1 bg-gray-100 hover:bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span className="font-semibold">{cartItem.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(cartItem.id, cartItem.quantity + 1, cartItem.stock)}
                    className="px-2 py-1 bg-gray-100 hover:bg-gray-300 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(cartItem.id)}
                    className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                  >
                    <AiOutlineDelete/>
                  </button >
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center w-full mt-8">
              <button
                onClick={handleEmptyCart}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Remove All Items
              </button>
              <button
                  onClick={renderCheckoutBtn}
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
              >
                  {user ? "Checkout Items" : "Login to Checkout"}
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Total Price: {calculateTotalPrice()}</h2>
            </div>
          </>
         ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </Container>
      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
};

export default Cart;
