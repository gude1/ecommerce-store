import React from "react";
import { useNavigate } from "react-router-dom";
import SubHeader from "../../components/SubHeader/SubHeader";
import Button from "../../components/ui/Button/Button";
import CounterInput from "../../components/ui/CounterInput/CounterInput";
import { Console } from "../../utils";
import "./ProductDetail.css";
Console.warn(window.location);

export default function ProductDetail() {
  const navigate = useNavigate();
  return (
    <div>
      <SubHeader title="Product Detail" />
      <div className="slideInUp">
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
            <CounterInput className={"product-details-counterinput"} />
            <Button
              title="Add to Cart"
              className="product-detail-addcartbtn"
              buttonProps={{
                onClick: () =>
                  navigate("/wtwttwt/cart", { state: { goback: true } }),
              }}
            />
            <span className="product-detail-description">
              Trousers (British English), slacks, or pants are an item of
              clothing that may have originated in Central Asia, worn from the
              waist to the ankles, covering both legs separately (rather than
              with cloth extending across both legs as in robes, skirts, and
              dresses). In the United Kingdom, the word pants generally means
              underwear and not trousers.[1] Shorts are similar to trousers, but
              with legs that come down only to around the area of the knee,
              higher or lower depending on the style of the garment. To
              distinguish them from shorts, trousers may be called "long
              trousers" in certain contexts such as school uniform, where
              tailored shorts may be called "short trousers" in the UK.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
