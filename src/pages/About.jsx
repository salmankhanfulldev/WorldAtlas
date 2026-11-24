import CountryFact from "../api/countryData.json";
const About = () => {
  return (
      <section className="section-about page-shell">
        <div className="page-heading">
          <span className="eyebrow">Around the globe</span>
          <h2>Facts worth knowing</h2>
          <p>Discover remarkable places and natural wonders across the world.</p>
        </div>
        <div className="gradient-cards">
          {CountryFact.map((country) => {
            const { id, countryName, captial, population, interestingFact } =
              country;
            return (
              <article className="fact-card" key={id}>
                <span className="fact-number">{String(id).padStart(2, "0")}</span>
                <h3>{countryName}</h3>
                <p className="fact-location">{captial}</p>
                <p className="fact-description">{interestingFact}</p>
              </article>
            );
          })}
        </div>
      </section>
  );
};

export default About;
