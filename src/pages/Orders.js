import React, { useEffect } from "react";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { useOrderContext } from "context/order_context";
import { useCart } from "react-use-cart";
import { formatPrice } from "helpers/helpers";

const Orders = () => {
  const Container = tw.div`relative bg-gray-100 text-gray-700 -mb-8 -mx-8 px-4 py-8 lg:py-12`;
  const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
  const Card = tw.div`bg-white shadow-lg rounded-lg p-6 mb-6 flex flex-col md:flex-row items-center md:items-start`;
  const Image = tw.img`w-40 h-32 rounded-lg shadow-md object-cover mb-4 md:mb-0 md:mr-6`;
  const Info = tw.div`flex-1 text-gray-800`;
  const Title = tw.h3`text-lg font-semibold mb-2`;
  const Details = tw.p`text-sm text-gray-500 mb-1`;
  const Price = tw.p`text-sm text-pink-500 font-medium`;
  const EmptyMessage = tw.p`text-center text-gray-500 mt-8`;

  const { orders, getOrdersByUserId } = useOrderContext();
  const { cartTotal } = useCart();

  useEffect(() => {
    getOrdersByUserId();
  }, []);

  const calculateTotalPrice = () => {
    return formatPrice(cartTotal);
  };

  return (
    <AnimationRevealPage>
      <Header className="mb-8" />

      <Container>
        <Content>
          {orders.length > 0 ? (
            orders.map((order) => (
              <Card key={order?.id}>
                <Image
                  src={`https://lhxsdxtfgwcmsdsxohdi.supabase.co/storage/v1/object/public/images/${order?.items?.[0]?.product?.images[0]}`}
                  alt={order?.items?.[0]?.product?.name}
                />
                <Info>
                  <Title>{order?.items?.[0]?.product?.name}</Title>
                  <Details>Quantity: {order?.items?.[0]?.quantity}</Details>
                  <Price>
                    Total Price: ${" "}
                    {order?.items?.[0]?.product?.price * order?.items?.[0]?.quantity}
                  </Price>
                </Info>
              </Card>
            ))
          ) : (
            <EmptyMessage>Your cart is empty.</EmptyMessage>
          )}
        </Content>
      </Container>

      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
};

export default Orders;