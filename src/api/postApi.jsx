import axios from "axios";

const api = axios.create({
  baseURL: "https://countries.trevorblades.com/",
  timeout: 15000,
});

const COUNTRIES_QUERY = `
  query Countries {
    countries {
      code
      name
      native
      capital
      currency
      emoji
      continent {
        code
        name
      }
      languages {
        code
        name
      }
    }
  }
`;

let countriesRequest;

const normalizeCountry = (country) => {
  const region = ["NA", "SA"].includes(country.continent?.code)
    ? "Americas"
    : country.continent?.name || "Other";
  const code = country.code.toLowerCase();

  return {
    cca2: country.code,
    name: {
      common: country.name,
      official: country.native || country.name,
      nativeName: country.native
        ? { native: { common: country.native } }
        : undefined,
    },
    flags: {
      svg: `https://flagcdn.com/${code}.svg`,
      png: `https://flagcdn.com/w320/${code}.png`,
      alt: `Flag of ${country.name}`,
    },
    capital: country.capital ? [country.capital] : [],
    region,
    subregion: country.continent?.name || "",
    currencies: country.currency
      ? Object.fromEntries(
          country.currency.split(",").map((currency) => [
            currency,
            { name: currency },
          ])
        )
      : undefined,
    languages: Object.fromEntries(
      (country.languages || []).map((language) => [
        language.code,
        language.name,
      ])
    ),
  };
};

export const getCountryData = () => {
  if (!countriesRequest) {
    countriesRequest = api
      .post("/", { query: COUNTRIES_QUERY })
      .then(({ data }) => {
        if (data.errors?.length) {
          throw new Error(data.errors.map((error) => error.message).join(", "));
        }

        const countries = data.data?.countries;
        if (!Array.isArray(countries) || countries.length === 0) {
          throw new Error("The country service returned no countries.");
        }

        return { data: countries.map(normalizeCountry) };
      })
      .catch((error) => {
        countriesRequest = undefined;
        throw error;
      });
  }

  return countriesRequest;
};

export const getCountryIndData = async (name) => {
  const { data: countries } = await getCountryData();
  const country = countries.find(
    (item) => item.name.common.toLowerCase() === name.toLowerCase()
  );

  if (!country) {
    throw new Error(`Country "${name}" was not found.`);
  }

  return { data: [country] };
};
