import React from "react";

function Search({onchangeSearch,searchNotes}) {
  const handleSearch = (e) => {
    onchangeSearch(e.target.value)
  }
  return (
    <div className="filter">
      <input onChange={handleSearch} value={searchNotes} id="search-bar" type="text" placeholder="Search Notes" />
    </div>
  );
}

export default Search;
