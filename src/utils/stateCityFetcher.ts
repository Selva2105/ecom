import { State, City } from "country-state-city";

export const stateFetcher = (countryCode: string) => {
  const states = State.getStatesOfCountry(countryCode);

  // Use Object.entries to convert the states into an array of [key, value] pairs
  const stateArray = Object.entries(states).map(([stateCode, stateInfo]) => ({
    value: stateCode,
    displayValue: stateInfo.name,
    stateCode: stateInfo.isoCode,
  }));

  return stateArray;
};

export const cityFetcher = (countryCode: string, stateCode: string) => {
  const cities = City.getCitiesOfState(countryCode, stateCode);

  // Use Object.entries to convert the cities into an array of [key, value] pairs
  const cityArray = cities.map((city) => ({
    value: city.name,
    displayValue: city.name,
  }));

  return cityArray;
};
