import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ALL_COUNTRIES,
  BASE_URL,
  filterByCode,
  searchByCountry,
} from "../../config";
import { CountryDetails } from "../../models/CountryDetails";
import { ServerResponseByName } from "../../models/ServerResponseByName";
import { Country } from "../../models/Country";

export const countriesApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], void>({
      query: () => ALL_COUNTRIES,
    }),
    getCountryByName: builder.query<CountryDetails, string>({
      query: (name) => searchByCountry(name),
      transformResponse: (response: ServerResponseByName[]) => {
        const country = response[0];

        const countryDetails = {
          name: country.name,
          nativeName: country.nativeName,
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          flag: country.flag,
          currencies: country.currencies,
          languages: country.languages.map((language) => language.name),
          topLevelDomain: country.topLevelDomain,
          borders: country.borders,
        };
        return countryDetails;
      },
    }),
    getCountryNeighbors: builder.query<string[], string[]>({
      query: (codes) => filterByCode(codes),
      transformResponse: (response: ServerResponseByName[]) =>
        response.map((country) => country.name),
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountryByNameQuery,
  useGetCountryNeighborsQuery,
} = countriesApi;
