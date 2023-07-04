import axiosClient from "@/libraries/axiosClient";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Hotproduct = () => {
  const router = useRouter();
  function handleGetalldiscount(){
    router.push("/getalldiscount")
  }
  const [getdiscount, setGetdiscount] = useState([]);
  const getlist = useCallback(async () => {
    try {
      const res = await axiosClient.get("http://localhost:3331/discount/1");
      setGetdiscount(res.data.payload)
    } catch (error) {
      
    }
  },[]);

  useEffect(() => {
    getlist();
  }, [getlist]);

  return (
    <>
      <div className="cate" id="hotproduct"></div>
      <div className="titleallproducts">
        <h1 className="title">Giảm Giá Nhiều Nhất</h1>
      </div>
      <div className="getproduct">
        {getdiscount.length > 0 &&
          getdiscount.map((product) => {
            return (
              <div>
                <div className="cards">
                  <li key={product.id}></li>
                  <div className="sale">sale {product.discount} %</div>
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
      <button className="allproducts" onClick={handleGetalldiscount}><h2>Xem Thêm Sản Phẩm</h2></button>
    </>
  );
};

export default Hotproduct;
