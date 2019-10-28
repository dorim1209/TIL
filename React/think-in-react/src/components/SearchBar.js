import React from "react";

const SearchBar = ({ handleKeywordChange, handlechecked }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search…"
        onChange={e => {
          handleKeywordChange(e.target.value);
        }}
      />
      <p>
        <input type="checkbox" onChange={handlechecked} />
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
