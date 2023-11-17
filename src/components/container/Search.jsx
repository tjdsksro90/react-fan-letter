import React, { useContext, useState } from "react";
import { SearchSapn, SearchWrap } from "assets/BasicStyle";
import { FamilyContext } from "context/Context";

function Search() {
  const contextData = useContext(FamilyContext);
  return (
    <SearchWrap>
      <SearchSapn>
        <input
          type="text"
          placeholder="search name"
          value={contextData.search}
          onChange={contextData.searchHandler}
        />
      </SearchSapn>
    </SearchWrap>
  );
}

export default Search;
