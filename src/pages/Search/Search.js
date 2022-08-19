import React from "react";
import Product from "../../components/Product/Product";
import SubHeader from "../../components/SubHeader/SubHeader";
import Button from "../../components/ui/Button/Button";
import IconButton from "../../components/ui/IconButton/IconButton";
import Input from "../../components/ui/Input/Input";
import "../Home/Home.css";
import "./Search.css";

function Search({}) {
  const renderSearhResult = () => {};

  return (
    <div>
      <SubHeader title="Search Product" />
      <div className="search-area">
        <Input
          placeholder={"Search products"}
          label={"Search Products"}
          className="searchinput-ctn"
          inputProps={{
            className: "searchinput",
            type: "search",
          }}
          rightComponent={
            <IconButton name={"search"} className="searchinput-btn" />
          }
          labelClassName="searchinput-label"
        />
      </div>
      <div className="slideInUp">
        <div className="productlist-ctn">
          <div className="search-emptyctn">
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "105px" }}
            >
              report
            </span>
            <h4>Sorry! Couldn't find the product you were looking For!!!</h4>
            <p>
              Please check if you have misspelt something or try searching with
              other words.
            </p>
            <Button title="Go Home" className="search-emptybtn" />
          </div>
          {/* <Product className={"product"} />
          <Product className={"product"} />
          <Product className={"product"} />
          <Product className={"product"} />
          <Product className={"product"} />
          <Product className={"product"} />
          <Product className={"product"} />
          <Product className={"product"} /> */}
        </div>
      </div>
    </div>
  );
}

export default Search;
