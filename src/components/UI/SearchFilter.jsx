import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };
  return (
    <section className="section-searchFilter">
      <label className="search-box">
        <span className="search-label">Search country</span>
        <input
          type="text"
          placeholder="Search for a country..."
          value={search || ""}
          onChange={handleInputChange}
        />
      </label>
      <div className="filter-controls">
        <label>
          <span className="search-label">Region</span>
          <select
            className="select-section"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="all">All regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctica</option>
          </select>
        </label>
        <div className="sort-buttons" aria-label="Sort countries">
          <button type="button" onClick={() => sortCountries("asc")}>A-Z</button>
          <button type="button" onClick={() => sortCountries("des")}>Z-A</button>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
