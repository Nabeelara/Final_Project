import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { formatPrice } from "helpers/helpers";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useOrderContext } from "context/order_context";

const Checkout = () => {
  const { handleSubmit } = useForm();
  const { items, emptyCart } = useCart();

  // Todo
  // Panggil state dan juga fungsi createOrder dari ordercontext
  const {createOrder, formData, setFormData} = useOrderContext();

  const handleInputChange = (e) => {
  const {name, value} = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
  };

  const handleCheckOut = async () => {
    const res = await createOrder();
    emptyCart();
  }

  const calculateProductTotal = () => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  useEffect(() => {
    const updateOrderItems = items.map((item) => ({
      productId: item.trueId,
      quantity: parseFloat(item.quantity),
      colorId: item.color_id,
    }));

    setFormData((prevState) => ({
      ...prevState,
      items: updateOrderItems,
    }));
  }, []);

  // if (!user) {
  //   return <Navigate to="/login"/>
  // }

  return (
    <AnimationRevealPage>
      <Header className="mb-8" />
      {/* Your Code Here */}
      <div className="bg-pink-50 min-h-screen py-10">
        <div className="text-3xl text-center font-bold text-[#2DB7E3] mb-8">
          Where do you want to send your order?
          <form  
          onSubmit={handleSubmit(handleCheckOut)}
          className="space-y-6 text-pink-600 mt-8"
          >
            {/* <div>
              <label htmlFor="name">
                <span className="font-semibold">Name : </span>
              </label>
              <input 
              type="text"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="phone_number">
                <span className="font-semibold">Phone Number : </span>
              </label>
              <input 
              type="text"
              value={formData.phone_number}
              name="phone_number"
              onChange={handleInputChange}
              />
            </div> */}

      <div>
        <label htmlFor="address" className="block font-medium mb-2">
          Address:
        </label>
        <input
          type="text"
          value={formData.address}
          name="address"
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          placeholder="Enter your address"
        />
      </div>

      <div>
        <label htmlFor="city" className="block font-medium mb-2">
          City:
        </label>
        <input
          type="text"
          value={formData.city}
          name="city"
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          placeholder="Enter your city"
        />
      </div>

      <div>
        <label htmlFor="country" className="block font-medium mb-2">
          Country:
        </label>
        <input
          type="text"
          value={formData.country}
          name="country"
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          placeholder="Enter your country"
        />
      </div>
            
      <div>
        <label htmlFor="postal_code" className="block font-medium mb-2">
          Postal Code:
        </label>
        <input
          type="text"
          value={formData.postal_code}
          name="postal_code"
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          placeholder="Enter your postal code"
        />
      </div>
            
      <button
        type="submit"
        className="w-full py-3 mt-6 bg-pink-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-all"
      >
        Order Now
      </button>
          </form>
        </div>
      </div>

      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
};

export default Checkout;
