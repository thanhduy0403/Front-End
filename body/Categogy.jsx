import React, { useCallback, useEffect, useState } from "react";

import axiosClient from "@/libraries/axiosClient";
const Categogy = () => {
  const [listproducts, setListproducts] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const res = await axiosClient.get("http://localhost:3331/category");
      setListproducts(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <div id="category"> </div>
      <div className="category">
        <h1 className="title">Danh Mục Sản Phẩm</h1>
      </div>
      <div className="containercategory">
        <div className="food-product">
          <div className="food">
            {listproducts.length > 0 &&
              listproducts.map((p) => {
                return (
                  <div key={p.id}>
                    <img className="img" src={p.image} alt="" />
                    <h3 className="title">{p.name}</h3>
                    
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categogy;
