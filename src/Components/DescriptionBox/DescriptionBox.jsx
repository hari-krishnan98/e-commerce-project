import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to ShopEase, your one-stop destination for the latest trends
          in fashion, electronics, home goods, and more. Enjoy seamless shopping
          with exclusive deals, top-notch customer service, and fast delivery.
          Happy shopping!
        </p>
        <p>
          "Discover unbeatable prices and a vast selection of products at
          TrendyCart. From stylish apparel to cutting-edge electronics, we have
          everything you need. Shop with confidence and experience exceptional
          customer service and swift shipping. Join the TrendyCart family
          today!"
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
