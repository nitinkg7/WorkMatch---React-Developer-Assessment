import { ICountry } from "../../sharedInterfaces/1-taks-interface";
import { countryRecords } from "../5dataSources/sampleData";

export const getAllCountries = (): ICountry[] => {
  // in real life this would be prisma (ORM) to access mongoDB.
  return countryRecords;
};
