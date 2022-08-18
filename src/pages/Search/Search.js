import React from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import Input from "../../components/ui/Input/Input";

import "./Search.css";

function Search({}) {
  return (
    <div>
      <SubHeader title="Search Product" />
      <div className="slideInUp">
        <Input
          placeholder={"Search products"}
          label={"Search Products "}
          containerStyle={{
            width: "100%",
            maxWidth: "350px",
            margin: "16px auto",
          }}
          inputProps={{
            className: "searchinput",
          }}
          labelClassName="searchinput-label"
        />
      </div>
    </div>
  );
}

export default Search;
