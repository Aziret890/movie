import React, { useEffect } from "react";
import Search from "./Search";
import { useMainContext } from "../../contexts/Contexts";
import "./Search.scss";

function SearchMather() {
  //   const { searchRes } = useMainContext();
  const { seachValue, searchRes, searchValueAxios } = useMainContext();
  useEffect(() => {
    searchValueAxios(seachValue);
  }, [seachValue]);
  console.log(searchRes);
  return (
    <div className="container">
      <div className="grid">
        {searchRes?.map((el, ind) => (
          <Search key={ind} card={el} />
        ))}
      </div>
    </div>
  );
}

export default SearchMather;
