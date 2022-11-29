import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Controls from "../../components/Controls/Controls";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { RootState } from "../../store";

import { useGetAllCountriesQuery } from "../../store/api/countriesApi";

import styles from "./HomePage.module.css";

function HomePage() {
  const { search, region } = useSelector((state: RootState) => state.controls);

  const { countries, error, isLoading, isSuccess } = useGetAllCountriesQuery(
    undefined,
    {
      selectFromResult: ({ data = [], error, isLoading, isSuccess }) => ({
        countries: data.filter(
          (country) =>
            country.name.toLowerCase().includes(search.toLowerCase()) &&
            country.region.includes(region)
        ),
        error,
        isLoading,
        isSuccess,
      }),
    }
  );

  const navigate = useNavigate();

  return (
    <>
      <Controls />

      {error && <h2>Can`t fetch data</h2>}

      {isLoading && <LoadingSpinner />}

      {isSuccess && (
        <div className={styles.list}>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                { title: "Region", description: c.region },
                { title: "Capital", description: c.capital },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default HomePage;
