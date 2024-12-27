import React, { useEffect, useState } from "react";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatPrice } from "helpers/helpers";
import { FaStar, FaStarHalf, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useProductsContext } from "context/product_context";
import Swal from "sweetalert2";

const DetailProduct = () => {
  const { id } = useParams();
  const { addItem, items, updateItemQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const {product, getProductById, setProduct} = useProductsContext();
  const [showModal, setShowModal] = useState(false);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorId, setSelectedColorId] = useState(null);

  const handleColorClick = (color) => {
    setQuantity(1);
    setSelectedColor(color);
  };
  const changeMainImage = (index) => {
    setMainImageIndex(index);
  };

  const openModal = () => {
  if (product) {
    setSelectedItem({
      ...product,
      selectedFlavour: selectedColor, // Simpan warna yang dipilih
      selectedFlavourId: selectedColorId, // Simpan ID flavour yang dipilih
    });
    setShowModal(true);
  } else {
    console.log("Product not found");
  }
};
  

  const navigate = useNavigate();
  const Container = tw.div`relative bg-orange-100 text-gray-700 -mb-8 px-8 py-20 lg:py-24 `;
  const Content = tw.div`content mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between`;
  const ProductImage = tw.img`w-full lg:w-[500px] h-64 lg:h-[400px] object-cover rounded-md mb-8 lg:mb-0`;
  const ProductInfo = tw.div`text-center lg:text-left lg:w-1/2 my-auto`;
  const Title = tw.h2`text-3xl font-semibold mb-2`;
  const Description = tw.p`text-gray-600 mb-4 font-bold text-lg`;
  const RatingReviews = tw.p`text-gray-500 mb-4`;
  const Price = tw.p`text-xl font-semibold mt-4`;
  const AddToCartButton = tw.button`bg-red-500 text-white px-6 py-3 rounded-md mt-4 hover:bg-red-700 transition duration-300`;
  const ModalContainer = tw.div`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`;
  const ModalContent = tw.div`bg-white p-8 rounded-lg text-center`;
  const QuantityControl = tw.div`flex space-x-4 my-4 items-center justify-center md:justify-normal`;
  const QuantityButton = tw.button`text-2xl font-bold focus:outline-none`;
  const QuantityDisplay = tw.div`text-2xl font-bold`;
  const CancelButton = tw.button`text-sm mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md ml-5 focus:outline-none cursor-pointer`;
  const [maxQuantity, setMaxQuantity] = useState(0);

  const handleAddToCart = () => {
    // Periksa apakah item yang dipilih dan warna telah dipilih
    if (selectedItem && selectedColor) {
      const quantityNumber = Number(quantity); // Konversi kuantitas ke tipe Number

      // Periksa apakah kuantitas melebihi stok yang tersedia
      // if (quantityNumber > product.stock) {
      //   toast.error("Stok Tidak Tersedia", {
      //     position: "top-center",
      //     autoClose: 3000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });
      //   return; // Hentikan eksekusi jika kuantitas melebihi stok
      // }

      const priceNumber = parseFloat(selectedItem.price); // Konversi harga ke tipe Number
      const cartItemId = `${selectedItem.id}-${selectedColor}`; // ID unik berdasarkan ID produk dan warna yang dipilih

      // Periksa apakah item dengan warna yang sama sudah ada di keranjang
      if (items.some((item) => item.id === cartItemId)) {
        // Jika item dengan warna yang sama sudah ada di keranjang, perbarui kuantitasnya
        const existingItem = items.find((item) => item.id === cartItemId);
        const newQuantity = Number(existingItem.quantity) + quantityNumber;

        // Periksa apakah kuantitas baru melebihi stok
        if (newQuantity > product?.stock) {
          toast.error("Jumlah melebihi stok yang tersedia!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return; // Hentikan eksekusi jika kuantitas baru melebihi stok
        }

        updateItemQuantity(cartItemId, newQuantity);
      } else {
        // Jika item dengan warna yang sama belum ada di keranjang, tambahkan sebagai entri baru
        addItem(
          {
            ...selectedItem,
            price: priceNumber,
            color: selectedColor,
            id: `${selectedItem.id} - ${selectedColor}`, // Pastikan ID item dalam keranjang unik
            trueId: selectedItem.id,
            color_id: selectedColorId,
          },
          quantityNumber
        );
      }

      setQuantity(1); // Reset kuantitas setelah menambahkan ke keranjang
      setSelectedColor(null); // Reset warna yang dipilih setelah menambahkan ke keranjang

      // Tampilkan pesan sukses bahwa item berhasil ditambahkan ke keranjang
      toast.success(
        `Added ${quantityNumber} ${selectedItem.title}(s) to the cart`,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      // Tutup modal setelah item berhasil ditambahkan ke keranjang
      setShowModal(false);
    } else {
      // Jika pengguna tidak memilih warna, tampilkan pesan peringatan
      toast.error("Pilih Rasa Terlebih Dahulu!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setShowModal(false);
    }
  };
  

  useEffect(() => {
    // Your code here
    getProductById(id);
    // const findProduct = data.find((item) => item.id.toString() === id);
    // console.log('findProduct', findProduct)
    // setProduct(findProduct);
  }, [id]);
  console.log("priduct",product);

  const handleChangePrice = () => {
    return product?.price * quantity;
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, Math.min(maxQuantity, newQuantity))); // Ensure quantity is within the allowed 
  };
  
  // useEffect(() => {
  //   const updatedPrice = handleChangePrice();
  //   setProduct((prevProduct) => ({ ...prevProduct, updatedPrice }));
  // }, [quantity, product.price]);

  return (
    <AnimationRevealPage>
      <Header/>

      <Container className="flex justify-center item-center ">
        <Content>
          <div className="md:flex justify-center gap-8">
            <div>
              <button
                className="bg-gray-500 p-2 text-white rounded mb-4"
                onClick={() => navigate(-1)}
              >
                Back to products
              </button>
              {Array.isArray(product?.images) && product?.images?.length > 0 && (
                <>
                  <ProductImage
                      src={`https://lhxsdxtfgwcmsdsxohdi.supabase.co/storage/v1/object/public/images/${product.images[mainImageIndex]}`}
                      alt={product?.name}
                  />
                </>
              )}
              {Array.isArray(product?.images) && product?.images?.length > 1 && (
                <div className="grid grid-cols-5 sm:gap-2 mt-4 ">
                  {product?.images.map((image, index) => (
                    <img
                      key={index}
                      src={`https://lhxsdxtfgwcmsdsxohdi.supabase.co/storage/v1/object/public/images/${image}`}
                      alt={`${product?.name} - ${index + 1}`}
                      className={`h-20 w-20 rounded cursor-pointer ${
                        index === mainImageIndex
                          ? "border-2 border-yellow-500"
                          : ""
                      }`}
                      onClick={() => changeMainImage(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            <ProductInfo>
              <Title>{product.name}</Title>
              <RatingReviews>
                <div className="flex items-center justify-center md:justify-normal">
                  {product?.stars}
                  <span className=" flex mx-2">
                    {[...Array(5)].map((_, index) => {
                      const starValue = index + 1;
                      const isHalfStar =
                        starValue - 0.5 === Math.floor(product?.rating);

                      return (
                        <span key={index} className="my-auto ">
                          {starValue <= product?.rating ? (
                            isHalfStar ? (
                              <FaStarHalf style={{ color: "#fbbf24" }} />
                            ) : (
                              <FaStar style={{ color: "#fbbf24" }} />
                            )
                          ) : (
                            <FaStar style={{ color: "#d1d5db" }} />
                          )}
                        </span>
                      );
                    })}
                  </span>
                  | Reviews:
                </div>
              </RatingReviews>
              <Description>Description: </Description>
              <div>
                <p className="mb-2">{product?.description} </p>
                <p className="mb-2">Stock : {product?.flavours?.reduce((acc, flavour) => acc + flavour.quantity, 0)}</p>
                <p className="mb-2">Company : {product?.company}</p>
                <hr className="my-4 h-1 border bg-gray-500" />

                <div className="flex">
                  <p className="my-auto mr-4">Flavours : </p>
                  {Array.isArray(product?.flavours) && (
                    <div className="flex space-x-2">
                      {product?.flavours.map((flavour, index) => (
                        <div
                          key={index}
                          className={`relative w-8 h-8 rounded-full cursor-pointer border-2 ${
                            selectedColor === flavour.color
                              ? "border-red-500"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: flavour.color }}
                          onClick={() => {handleColorClick(flavour.color);
                            setSelectedColorId(flavour.id);
                            setMaxQuantity(flavour.quantity)}}
                        >
                          {selectedColor === flavour.color && (
                            <FaCheck
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                              size={16}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <Price>{formatPrice(handleChangePrice())}</Price>
              <QuantityControl>
                <QuantityButton
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  -
                </QuantityButton>
                <QuantityDisplay>{quantity}</QuantityDisplay>
                <QuantityButton
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </QuantityButton>
              </QuantityControl>
              <AddToCartButton onClick={openModal}>Add to Cart</AddToCartButton>
            </ProductInfo>
          </div>
        </Content>
      </Container>
      {showModal && (
        <>
          <ModalContainer>
            <ModalContent>
              <h2 tw="text-2xl font-semibold mb-4">
                Are you sure want add this item to cart?
              </h2>
              <p>Name : {selectedItem.name}</p>
              <p>Quantity : {quantity}</p>
              <button
                className="text-sm cursor-pointer bg-green-500 text-white px-6 py-3 mt-8 rounded-md hover:bg-green-700"
                onClick={() => handleAddToCart()}
              >
                Add
              </button>
              <CancelButton onClick={() => setShowModal(false)}>
                Cancel
              </CancelButton>
            </ModalContent>
          </ModalContainer>
        </>
      )}

      <Footer background={"bg-white"} />
    </AnimationRevealPage>
  );
};

export default DetailProduct;
