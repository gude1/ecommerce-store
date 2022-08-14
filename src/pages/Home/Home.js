import React from "react";
import Product from "../../components/Product/Product";
import "../../App.css";
import "./Home.css";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import SubHeader from "../../components/SubHeader/SubHeader";
import { Console, relativePath } from "../../utils";
export default function Home() {
  let { storeId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <SubHeader show />
      <div className="productlist-ctn slideInUp">
        <Product
          className={"product"}
          src={
            "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.webp?s=612x612&w=is&k=20&c=M-zkBx55YCn_UZg9cyuVMm1nS_PhSKGqoVybgO1Dp0Y="
          }
          onBtnClick={() => {
            Console.warn(relativePath());

            navigate(`/${relativePath()}/product/244242`, {
              state: { goback: true },
            });
          }}
        />
        <Product
          className={"product"}
          src={
            "https://media.istockphoto.com/id/1174472274/photo/connection-with-nature.webp?s=612x612&w=is&k=20&c=w1X2_iZd6p2vThXzYABvIMxwjJ9_kHoasLGxmff-xBM="
          }
        />
        <Product
          className={"product"}
          src={
            "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.webp?s=612x612&w=is&k=20&c=WZZoms0dBlmanqXPkG61DA8js67F7rLZ8CA33ymxxj4="
          }
        />
        <Product className={"product"} />
        <Product className={"product"} />
        <Product className={"product"} />
        <Product className={"product"} />
      </div>
      <div className="loader-ctn">
        <ThreeCircles
          color="#4764e6"
          width={80}
          height={80}
          wrapperClass="loader"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    </div>
  );
}
