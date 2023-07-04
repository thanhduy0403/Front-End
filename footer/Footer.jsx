import React from "react";
import { About, Contact } from "../../data/DataFooter";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="body-footer">
          <div className="d-flex">
            <div className="footer-col">
              {About.map((list, index) => {
                return (
                  <div key={`About ${list.id}`}>
                    <h3>ABOUT US</h3>
                    <a href="#">
                      <span>{list.doc}</span>
                    </a>
                    <p>{list.conten}</p>
                  </div>
                );
              })}
            </div>
            <div className="footer-col">
              {Contact.map((list, index) => {
                return (
                  <div key={`Contact ${list.id}`}>
                    <h3>Contact</h3>
                    <span>Address</span>
                    <p>{list.address}</p>
                    <span>Phone</span>
                    <p>{list.phone}</p>
                    <span>Email</span>
                    <p>{list.email}</p>
                    <span>Working Days/Hours:</span>
                    <p>{list.working}</p>
                  </div>
                );
              })}
            </div>
            <div className="footer-col">
              <h3>CUSTOMER SERVICE</h3>
              <li>
                <a href="">Help & FAQs</a>
              </li>
              <li>
                <a href="">Order Tracking</a>
              </li>
              <li>
                <a href="">Shipping & Delivery</a>
              </li>
              <li>
                <a href="">Orders History</a>
              </li>
              <li>
                <a href="">Advanced Search</a>
              </li>
              <li>
                <a href="">Corporate Sales</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
            </div>
            <div className="footer-col">
              <h3>POPPULAR TAGS</h3>
              <div className="tag">
                <a href="#">Black</a>
                <a href="#">Bule</a>
                <a href="#">Clothes</a>
                <a href="#">Fashion</a>
                <a href="#">Bag</a>
                <a href="#">Hub</a>
                <a href="#">Jean</a>
                <a href="#">Shirt</a>
                <a href="#">Skirt</a>
                <a href="#">Sports</a>
                <a href="#">Sweater</a>
                <a href="#">Winter</a>
              </div>
            </div>
          </div>
          <div className="footer-button">
            <p className="conten-button">
              © Aptech eCommerce. 2022. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
