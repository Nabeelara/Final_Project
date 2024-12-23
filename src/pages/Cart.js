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

  const Container = tw.div`relative bg-gray-200 text-gray-700 px-4 md:px-12 py-8 lg:py-12`;
  const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
  const {cartTotal, items, updateItemQuantity, removeItem, emptyCart} = useCart();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleUpdateQuantity = (id, newQuantity, maxQuantity) => {
    if (newQuantity > maxQuantity) {
      Swal.fire({
        title: "Error",
        text: `Quantity cannot axceed the maximum stock of ${maxQuantity}.`,
        icon: "error",
        confirmButtonText: "OK",
      });
    } else if (newQuantity > 0) {
      updateItemQuantity(id, newQuantity);
    } 
  };

  const calculateRemainingStock = (maxQuantity, currentQuantity) => {
    return maxQuantity - currentQuantity;
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  const handleEmptyCart = () => {
    emptyCart();
  };

  const calculateTotalPrice = () => {
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

console.log("item",items)

  return (
    <AnimationRevealPage>
      <Header />

      <Container className=" flex flex-col justify-center items-center ">
        {items.length > 0 ? (
          <>
            <div className="flex md:flex-row flex-col">
              {items.map((cartItem) => (
              <div key={cartItem.id} className="flex items-center w-full border-b py-4">
                <div className="flex items-center space-x-4 w-3/4">
                  <img
                    src={`https://lhxsdxtfgwcmsdsxohdi.supabase.co/storage/v1/object/public/images/${cartItem?.images[0]}`}
                    alt={cartItem.name}
                    className="w-[100px] h-[80px] md:w-[200px] md:h-[160px] object-cover"
                  />
                  <div>
                    <h3 className="md:text-lg font-semibold">{cartItem.name}</h3>
                    <p className="text-gray-600">{formatPrice(cartItem.price)}</p>
                    <p className="text-gray-500">Remaining stock: {calculateRemainingStock}</p>
                  </div>
                </div>
            
                <div className="flex items-center text-sm md:text-base space-x-4 w-1/4 justify-end">
                  <button
                    onClick={() => handleUpdateQuantity(cartItem.id, cartItem.quantity - 1, cartItem.maxQuantity)}
                    className="px-2 py-1 bg-gray-100 hover:bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span className="font-semibold">{cartItem.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(cartItem.id, cartItem.quantity + 1, cartItem.maxQuantity)}
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
            </div>

            <div className="flex justify-between text-sm md:text-base lg:text-lg items-center w-full mt-8">
              <button
                onClick={handleEmptyCart}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Remove All Items
              </button>
              <button
                  onClick={renderCheckoutBtn}
                  className="px-6 py-2 bg-[#1893D0] hover:bg-[#2CB8E3] text-white rounded"
              >
                  {user ? "Checkout Items" : "Login to Checkout"}
              </button>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold">Total Price: {calculateTotalPrice()}</h2>
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
