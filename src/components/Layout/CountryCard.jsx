import React from "react";
import { NavLink } from "react-router-dom";
const CountryCard = ({ country }) => {
  const { flags, name, region, capital } = country;
  return (
    <li className="country-card">
      <NavLink to={`/country/${encodeURIComponent(name.common)}`} className="country-card-link" aria-label={`Explore ${name.common}`}>
        <div className="flag-wrap">
          <img src={flags?.png || flags?.svg} alt={`${name.common} flag`} />
        </div>
        <div className="country-info">
          <p className="country-name">{name.common}</p>
          <div className="country-meta">
            <p><span>Region</span>{region || "N/A"}</p>
            <p><span>Capital</span>{capital?.[0] || "N/A"}</p>
            <p><span>Languages</span>{Object.values(country.languages || {}).slice(0, 2).join(", ") || "N/A"}</p>
          </div>
          <span className="card-action">View country <b>→</b></span>
        </div>
      </NavLink>
    </li>
  );
};

export default CountryCard;
