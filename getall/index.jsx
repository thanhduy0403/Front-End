import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import axiosClient from "@/libraries/axiosClient";
import Nav from "../header/Nav";
import Banner from "../body/Banner";
import Footer from "../footer/Footer";

const Getall = () => {
  const [get, setGet] = useState([]);
  const getProduct = useCallback(async () => {
    try {
      const res = await axiosClient.get("http://localhost:3331/product/getall");
      console.log('« res »', res);
      setGet(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <>
    <Head>
        <title>Tất Cả Sản Phẩm</title>
      </Head>
    <Nav/>
    <Banner/>
      <div id="Getall"> </div>
      <div className="getallproducts">
        {get.length > 0 &&
          get.map((product) => {
            <div key={product.id}></div>
            return (
              <div>
                <div className="cards">
                  
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
      <Footer/>
    </>
  );
};

export default Getall;
