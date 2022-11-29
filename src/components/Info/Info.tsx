import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CountryDetails } from "../../models/CountryDetails";
import { useGetCountryNeighborsQuery } from "../../store/api/countriesApi";

import styles from "./Info.module.css";

export interface InfoProps {
  country: CountryDetails;
}

function Info({ country }: InfoProps) {
  const [skip, setSkip] = useState(true);

  const { data: neighbors, isSuccess } = useGetCountryNeighborsQuery(
    country.borders,
    { skip }
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (country.borders) {
      setSkip(false);
    }
  }, [country.borders]);

  return (
    <section className={styles.info}>
      <div className={styles.image}>
        <img src={country.flag} alt={country.name} />
      </div>
      <div>
        <h1>{country.name}</h1>
        <div className={styles["list-group"]}>
          <ul>
            <li>
              <b>Native Name:</b> {country.nativeName}
            </li>
            <li>
              <b>Population:</b> {country.population}
            </li>
            <li>
              <b>Region:</b> {country.region}
            </li>
            <li>
              <b>Sub Region:</b> {country.subregion}
            </li>
            <li>
              <b>Capital:</b> {country.capital}
            </li>
          </ul>
          <ul>
            <li>
              <b>Top Level Domain:</b>{" "}
              {country.topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </li>
            <li>
              <b>Currencies:</b>{" "}
              {country.currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </li>
            <li>
              <b>Languages:</b> {country.languages.join(", ")}
            </li>
          </ul>
        </div>
        <div className={styles.meta}>
          <b>Border Countries</b>
          {!country.borders ? (
            <span>There is no border countries</span>
          ) : (
            <div className={styles["tag-group"]}>
              {isSuccess &&
                neighbors.map((countryName) => (
                  <span
                    key={countryName}
                    onClick={() => navigate(`/country/${countryName}`)}
                  >
                    {countryName}
                  </span>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Info;
