import React from "react";
import CountryFact from "../api/countryData.json";
const About = () => {
  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">
          Here are the Interesting Facts <br /> We're Proud Of
        </h2>
        <div className="gradient-cards">
          {CountryFact.map((country) => {
            const { id, countryName, captial, population, interestingFact } =
              country;
            return (
              <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                  <p className="card-title">{countryName}</p>
                  <p>
                    <span className="card-description">{captial}</span>
                  </p>
                  <p>
                    <span className="card-description">{population}</span>
                  </p>
                  <p>
                    <span className="card-description">{interestingFact}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
