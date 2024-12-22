import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../helpers/helpers";
import { FaCheck } from "react-icons/fa";
import axios from "axios";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();
  const user = JSON.parse(localStorage.getItem("user"));
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        // "http://localhost:3001/api/categories",
        `${process.env.REACT_APP_API_URL}/api/categories`
      );
      const category = response.data.data.map((item) => item.name);
      setCategories(["all", ...category]);

    } catch(err) {
      console.log(err);
    }
  }

  useEffect (() => {
    getCategories()
  }, [])
  const colors = getUniqueValues(all_products, "colors");
  const companies = getUniqueValues(all_products, "company"); 


  return (
    <Wrapper>
       <div className="content">
         <form onSubmit={(e) => e.preventDefault()}>
           {/* search input */}
           <div className="form-control">
             <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              onChange={updateFilters}
              className="search-input"
            />
          </div>
          {/* end of search input */}
          {/* category */}
          <div className="form-control justify-start">
            <h5 className="font-bold">Category</h5>
            <div>
              {categories &&
                categories.map((c, index) => {
                  return (
                    <button
                      key={index}
                      onClick={updateFilters}
                      type="button"
                      name="category"
                      className={`${
                        category === c.toLowerCase() ? "active" : null
                      }`}
                    >
                       {c}
                     </button>
                  );
                })}
            </div>
          </div>
          {/* end of category */}
          {/* company */}
          <div className="form-control ">
            <h5 className="font-bold">Company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company text-sm"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of company */}
          {/* colors */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
  margin-bottom: 1.25rem; /* Default margin bawah */

  h5 {
    margin-bottom: 0.5rem; /* Margin bawah untuk elemen <h5> */
  }

  /* Atur lebar default */
  width: 100%; 
  max-width: 600px; /* Batas maksimum lebar untuk layar besar */
}

/* Responsivitas untuk layar lebih kecil */
@media (max-width: 768px) {
  .form-control {
    margin-bottom: 1rem; /* Kurangi margin bawah */
    width: 90%; /* Lebar dikurangi menjadi 90% dari kontainer */
    max-width: 500px; /* Kurangi batas maksimum lebar */
  }

  .form-control h5 {
    margin-bottom: 0.4rem; /* Kurangi margin bawah untuk <h5> */
  }
}

/* Responsivitas untuk layar sangat kecil */
@media (max-width: 480px) {
  .form-control {
    margin-bottom: 0.75rem; /* Margin bawah lebih kecil */
    width: 80%; /* Lebar dikurangi menjadi 80% dari kontainer */
    max-width: 300px; /* Kurangi batas maksimum lebar lebih jauh */
  }

  .form-control h5 {
    margin-bottom: 0.3rem; /* Margin bawah lebih kecil untuk <h5> */
  }
}

.search-input {
  padding: 0.5rem;
  background: white;
  border-radius: 10px;
  border: 2px solid pink;
  letter-spacing: var(--spacing);
  font-size: 1rem;
  width: 100%; /* Default width untuk fleksibilitas */
  max-width: 400px; /* Batas maksimum lebar */
}

/* Gaya saat input difokuskan */
.search-input:focus {
  border-color: #f14376; /* Ubah warna border saat fokus */
  outline: none; /* Hapus outline default */
}

/* Responsivitas untuk layar lebih kecil */
@media (max-width: 768px) {
  .search-input {
    width: 90%; /* Kurangi lebar menjadi 90% dari kontainer */
    max-width: 300px; /* Batasi lebar maksimum */
  }
}

/* Responsivitas untuk layar sangat kecil */
@media (max-width: 480px) {
  .search-input {
    width: 80%; /* Kurangi lebar menjadi 80% dari kontainer */
    max-width: 250px; /* Batasi lebar maksimum */
  }
}

  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
    margin-top: 6px;
    font-size: 15px;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: white;
    border-radius: 8px;
    background: #F8C3D7;
    padding: 0.25rem 0.5rem;
    width: 125px;
    height: 30px;
    &:hover {
      background: #E94A78;
    }
  }
  
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }

  /* Atur gaya slider utama */
input[type="range"] {
  -webkit-appearance: none; /* Hilangkan gaya default di WebKit */
  width: 100%; /* Sesuaikan lebar */
  height: 6px; /* Ketebalan track */
  background: #ddd; /* Warna track */
  border-radius: 5px; /* Membuat track melengkung */
  outline: none; /* Hilangkan border default */
  transition: background 0.3s ease-in-out;
}

/* Ganti warna track ketika di-hover atau aktif */
input[type="range"]:hover {
  background: #ccc; /* Warna ketika slider di-hover */
}

/* Gaya untuk thumb (tombol geser) */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; /* Hilangkan gaya default */
  appearance: none; /* Untuk browser modern */
  width: 16px; /* Ukuran thumb */
  height: 16px;
  background: #2cb8e3; /* Warna thumb */
  border-radius: 50%; /* Thumb berbentuk lingkaran */
  cursor: pointer; /* Pointer berubah menjadi tangan */
  transition: background 0.3s ease-in-out;
}

/* Ganti warna thumb saat di-hover */
input[type="range"]::-webkit-slider-thumb:hover {
  background: #1a8fb7; /* Warna thumb ketika di-hover */
}

/* Style untuk Firefox */
input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: #2cb8e3;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

/* Style untuk track Firefox */
input[type="range"]::-moz-range-track {
  background: #ddd;
  border-radius: 5px;
  height: 6px;
}

/* IE & Edge */
input[type="range"]::-ms-thumb {
  width: 16px;
  height: 16px;
  background: #2cb8e3;
  border-radius: 50%;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 6px 0;
  color: transparent;
}

`;

export default Filters;
