import React from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import IconButton from "../../components/ui/IconButton/IconButton";
import Input from "../../components/ui/Input/Input";

import "./Search.css";

function Search({}) {
  return (
    <div>
      <SubHeader title="Search Product" />
      <div className="slideInUp">
        <div
          className="flex-row"
          style={{
            justifyContent: "center",
            // border: "1px solid red",
            alignItems: "center",
          }}
        >
          <Input
            placeholder={"Search products"}
            label={"Search Products "}
            containerStyle={{
              width: "100%",
              maxWidth: "350px",
              margin: "16px 0px",
            }}
            inputProps={{
              className: "searchinput",
            }}
            rightComponent={
              <IconButton name={"search"} className="searchinput-btn" />
            }
            labelClassName="searchinput-label"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
