import React, { useCallback, useEffect, useState } from "react";

import axiosClient from "@/libraries/axiosClient";
import { useRouter } from "next/router";

const Allproduct = () => {
  const router = useRouter();
  function handleProducts() {
    router.push("/getall");
  }
  const [getlists, setGetlists] = useState([]);
  const getProduct = useCallback(async () => {
    try {
      const res = await axiosClient.get(
        "http://localhost:3331/product/getlist"
      );

      setGetlists(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <>
      <div id="allproduct"> </div>
      <div className="titleallproducts">
        <h1 className="title">Tất Cả Các Sản Phẩm</h1>
      </div>
      <div className="getproduct">
        {getlists.length > 0 &&
          getlists.map((product) => {
            return (
              <div>
                <div className="cards">
                  <li key={product.id}></li>
                  <img className="imgs" src={product.image} alt="" />
                  <div className="inforproducts">
                    <h2 className="nameproducts">{product.name}</h2>
                    <h5> Giá Gốc {product.price} $ </h5>
                    <h3 className="discountedPrice">
                      {" "}
                      Giá Bán {product.discountedPrice} ${" "}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <button className="allproducts" onClick={handleProducts}>
        {" "}
        <h2>XEM THÊM SẢN PHẨM</h2>
      </button>
    </>
  );
};

export default Allproduct;
