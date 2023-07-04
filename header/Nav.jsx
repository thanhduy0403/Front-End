import React from "react";
import { Link } from "react-scroll/modules";
import { useRouter } from "next/router";
const Nav = () => {
  const router = useRouter();
  function backHome() {
    router.push("/myhome");
  }
  return (
    <>
      <div id="home"></div>
      <div className="containerr">
        <div className="header-logo">Fresh Fruits</div>
        <input
          className="search"
          type="text"
          placeholder="Nhập Sản Phẩm Tìm Kiếm"
        />
        <div className="header-nav">
          <ul>
            <li>
              <Link href="/myhome" className="linkproducts" onClick={backHome}>
                Trang Chủ
              </Link>
              <Link
                className="linkproducts"
                activeClass="active"
                to="category"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Danh Mục
              </Link>
              <Link
                className="linkproducts"
                activeClass="active"
                to="hotproduct"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Giảm Giá
              </Link>
              <Link
                className="linkproducts"
                activeClass="active"
                to="allproduct"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Sản Phẩm
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
