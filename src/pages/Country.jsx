import React, { useCallback, useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";
const Country = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");
  const loadCountries = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await getCountryData();
      setCountries(response.data);
    } catch (requestError) {
      setError("Countries could not be loaded. Please check your connection and try again.");
      console.error("Unable to load countries:", requestError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  //For Search Country
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  //For Filter Country
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };
  //Main Logic for Search and Country
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  return (
      <section className="country-section page-shell">
        <div className="page-heading">
          <span className="eyebrow">Global directory</span>
          <h2>Explore Countries</h2>
          <p>Search and discover nations across every continent.</p>
        </div>
        {error ? (
          <div className="directory-message" role="alert">
            <h3>We couldn't load the country directory</h3>
            <p>{error}</p>
            <button type="button" className="primary-button" onClick={loadCountries}>
              Try again
            </button>
          </div>
        ) : (
          <>
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />
        <div className="directory-summary" aria-live="polite">
          <span>{isLoading ? "Loading countries..." : `${filterCountries.length} countries`}</span>
          <span>Independent nations & territories</span>
        </div>
        {isLoading ? (
          <div className="directory-loading">
            <Loader />
            <p>Gathering country information...</p>
          </div>
        ) : filterCountries.length > 0 ? (
          <ul className="country-grid">
            {filterCountries.map((country) => (
              <CountryCard country={country} key={country.cca2} />
            ))}
          </ul>
        ) : (
          <div className="directory-message">
            <h3>No countries found</h3>
            <p>Try a different search term or region.</p>
            <button
              type="button"
              className="text-button"
              onClick={() => {
                setSearch("");
                setFilter("all");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
          </>
        )}
      </section>
  );
};

export default Country;
