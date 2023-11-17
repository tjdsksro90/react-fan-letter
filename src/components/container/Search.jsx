import React, { useState } from "react";
import { SearchSapn, SearchWrap } from "assets/BasicStyle";

function Search({ search, searchHandler }) {
  return (
    <SearchWrap>
      <SearchSapn>
        <input
          type="text"
          placeholder="search name"
          value={search}
          onChange={searchHandler}
        />
      </SearchSapn>
    </SearchWrap>
  );
}

export default Search;
