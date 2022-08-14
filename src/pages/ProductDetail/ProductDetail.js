import React from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import { Console } from "../../utils";
import "./ProductDetail.css";
Console.warn(window.location);

export default function ProductDetail() {
  return (
    <div className="slideInUp">
      <SubHeader title="Product Detail" />
      <div className="product-detail-ctn">
        <div className="product-detail-imgctn">
          <img
            className="product-detail-img"
            src="https://boxinbucket.s3.amazonaws.com/media/uploads/ltt.jpeg"
          />
        </div>
        <div className="product-detail-infoctn">
          <span className="product-detail-name">Slim Fit Cotton Shirt</span>
          <span className="product-detail-amount">₦14,000</span>
        </div>
      </div>
    </div>
  );
}
