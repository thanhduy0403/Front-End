import React, { useCallback, useEffect, useState } from "react";
import Nav from "../header/Nav";
import Banner from "../body/Banner";
import axiosClient from "@/libraries/axiosClient";
import Footer from "../footer/Footer";
import Head from "next/head";
const Getalldiscount = () => {
  const [getalldiscount, setGetalldiscount] = useState([]);
  const getall = useCallback(async () => {
    try {
      const res = await axiosClient.get("http://localhost:3331/discount/2");
      setGetalldiscount(res.data.payload);
      console.log("« res »", res);
    } catch (error) {
      console.log(error);
    }

  }, []);

  useEffect(() => {
    getall();
  }, [getall]);

  return (
    <>
     <Head>
        <title>Giảm Giá Nhiều Nhất</title>
      </Head>
      <Nav />
      <Banner />
      <div className="getallproducts">
        {getalldiscount.length > 0 &&
          getalldiscount.map((product) => {
            return (
              <div>
              
                <div className="cards">
                  <li key={product.id}></li>
                 <div className="sale">sale  {product.discount} %</div>
                  <img className="imgs" src={product.image} alt="" />
                  <div className="inforproducts">
                    <h2 className="nameproducts">{product.name}</h2>
                    <strong> Giá Gốc {product.price} $ </strong>
                    
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

export default Getalldiscount;
