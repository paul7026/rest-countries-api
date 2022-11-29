import { Currency } from "./ServerResponseByName";

export interface CountryDetails {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  flag: string;
  currencies: Currency[];
  languages: string[];
  topLevelDomain: string[];
  borders: string[];
}
