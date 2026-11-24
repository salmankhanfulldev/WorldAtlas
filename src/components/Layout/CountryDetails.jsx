import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const loadCountry = async () => {
      try {
        const res = await getCountryIndData(params.id);
        if (active) setCountry(res.data[0]);
      } catch (requestError) {
        if (active) setError("We could not find details for this country.");
        console.error("Unable to load country details:", requestError);
      } finally {
        if (active) setIsLoading(false);
      }
    };

    loadCountry();
    return () => {
      active = false;
    };
  }, [params.id]);

  if (isLoading) return <Loader />;
  if (error) return <section className="empty-state detail-error"><h2>Country unavailable</h2><p>{error}</p><NavLink className="primary-button" to="/country">Back to countries</NavLink></section>;
  return (
    <section className="country-details-card page-shell">
      <div className="detail-card">
        {country && (
          <div className="country-detail-grid">
            <img
              src={country.flags?.svg || country.flags?.png}
              alt={`${country.name.common} flag`}
              className="flag"
            />
            <div className="country-content">
              <span className="eyebrow">{country.region}</span>
              <h2>{country.name.official}</h2>
              <div className="infoContainer">
                <p><span>Native Names</span>{country.name.nativeName ? Object.values(country.name.nativeName).map((item) => item.common).join(", ") : "N/A"}</p>
                <p><span>Sub Region</span>{country.subregion || "N/A"}</p>
                <p><span>Capital</span>{country.capital?.join(", ") || "N/A"}</p>
                <p><span>Top Level Domain</span>{country.tld?.join(", ") || "N/A"}</p>
                <p><span>Currencies</span>{country.currencies ? Object.values(country.currencies).map((item) => item.name).join(", ") : "N/A"}</p>
                <p><span>Languages</span>{country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

// import React from "react";
// import { useParams } from "react-router-dom";
// import { useTransition, useState, useEffect } from "react";
// import { getCountryIndData } from "../../api/postApi";
// const CountryDetails = () => {
//   const params = useParams();
//   const [isPending, startTransition] = useTransition();
//   const [country, setCountry] = useState();
//   useEffect(() => {
//     startTransition(async () => {
//       const res = await getCountryIndData(params.id);
//       // console.log(res);
//       if (res.data === 200) {
//         setCountry(res.data[0]);
//       }
//     });
//   }, []);
//   if (isPending) return <Loader />;
//   console.log(params);
//   return (
//     <>
//       <section className="card country-details-card container">
//         <div className="container-card bg-white-box">
//           {country && (
//             <div className="country-image grid grid two-cols">
//               <img
//                 src={country.flags.png}
//                 alt={country.flags.alt}
//                 className="flags"
//               />
//               <div className="country-content">
//                 <p className="card-title">{country.name.official}</p>
//                 <div className="infoContainer">
//                   <p>
//                     <span className="card-description">Navtive Name:</span>
//                     {Object.keys(country.name.nativeName)
//                       .map((key) => country.name.nativeName[key].common)
//                       .join(",")}
//                   </p>
//                   <p>
//                     <span className="card-description">Population</span>
//                     {country.population.toLocalString()}
//                   </p>
//                    <p>
//                   <span className="card-description"> Region:</span>
//                   {country.region}
//                 </p>
//                 <p>
//                   <span className="card-description"> Sub Region:</span>
//                   {country.subregion}
//                 </p>
//                 <p>
//                   <span className="card-description"> Capital:</span>
//                   {country.capital}
//                 </p>

//                 <p>
//                   <span className="card-description">Top Level Domain:</span>
//                   {country.tld[0]}
//                 </p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default CountryDetails;
