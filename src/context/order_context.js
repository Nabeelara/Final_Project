import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./AuthProvider";

const OrdersContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const {user} = useAuth();
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const [formData, setFormData] = useState({
    // name: "",
    // phone_number: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    status: "",
    items: [],
  });

  // TODO
  // 1. Lengkapi fungsi getOrdersById
  // 2. Buatkan fungsi createOrder
  const localUser = JSON.parse(localStorage.getItem("user"));
  console.log(user, localUser);

  const getOrdersByUserId = async () => {
    try {
      const res = await axios.get(
        // `http://localhost:3001/api/orders`, 
        `${process.env.REACT_APP_API_URL}/api/orders`,
        {
          headers: {
            Authorization: `Bearer ${user?.token || localUser?.token}`,
          }
        }
      );
      setOrders(res.data.orders);
      
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch orders. Please try again.");
    }
  };

  // Buat fungsi create order disni
  const createOrder = async () => {
    const url = 
    // `http://localhost:3001/api/orders`
    `${process.env.REACT_APP_API_URL}/api/orders`;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token || localUser?.token}`, // Pastikan menggunakan "Bearer" jika diperlukan
        "Content-Type": "application/json", // Header tambahan untuk format JSON
      },
    };
    const body = {
      ...formData, // Mengirim data form yang telah diisi
    };
    console.log("body",body)
    console.log("formdata",formData)
    console.log("Creating order...");
  
    try {
      const response = await axios.post(url, body, config);
      console.log("Order created successfully:", response.data.data);
  
      // Notifikasi sukses
      toast.success(response.data.message);
  
      // Update state untuk daftar pesanan
      setOrders((prevOrders) => [...prevOrders, response.data.data]);
  
      // Reset form data setelah berhasil
      setFormData({
        // name: "",
        // phone_number: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        status: "",
        items: [],
      });
      
    } catch (error) {
      // Menangkap error dan memberikan informasi
      if (error.response) {
        console.error("Error Response:", error.response.data);
        toast.error(error.response.data.message || "Failed to create order.");
      } 
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        setOrders,
        order,
        formData,
        setFormData,
        getOrdersByUserId,
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
// make sure use
export const useOrderContext = () => {
  return useContext(OrdersContext);
};
