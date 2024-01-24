import { State, City } from "country-state-city";

export const stateFetcher = (countryCode: string) => {
  const states = State.getStatesOfCountry(countryCode);

  const stateArray = Object.entries(states).map(([stateCode, stateInfo]) => ({
    value: stateCode,
    displayValue: stateInfo.name,
    stateCode: stateInfo.isoCode,
  }));

  return stateArray;
};

export const cityFetcher = (countryCode: string, stateCode: string) => {
  const cities = City.getCitiesOfState(countryCode, stateCode);

  const cityArray = cities.map((city) => ({
    value: city.name,
    displayValue: city.name,
  }));

  return cityArray;
};
