/*
  Task:
  1. Please provide an api that excepts a field "searchTerm" and exposes the countries matched in 2-tasks-filter.ts -> function: filterCountries()

  You can test your api on http://localhost:3000/api/countries
 */

import {
  apiResponse,
  ApiResponseStatus,
  HttpMethods,
  IResult,
  methodsNotAllowedResponse,
} from "@utils";
import { NextApiRequest, NextApiResponse } from "next";
import { filterCountries } from "../3useCases/2-task-filter";
import { getAllCountries } from "../4dataAccess/getAllCountries";
import { ICountryOverview } from "../../sharedInterfaces/1-taks-interface";

export const countriesApi = async (
  req: NextApiRequest,
  res: NextApiResponse<IResult<ICountryOverview[]>>
) => {
  const { method, query, body } = req;

  // your solution goes here
  // Converting the search term to string as the filterCountries expect only a string. We can modify it as per needs.
  let countries: ICountryOverview[] = [];
  if (method == "GET") {
    countries = filterCountries(getAllCountries(), query?.searchTerm as string);
  } else {
    countries = filterCountries(getAllCountries(), body?.searchTerm);
  }

  switch (method) {
    //Created a GET API so as to test on browser itself.
    case "GET":
    case "POST": {
      return apiResponse(res, ApiResponseStatus.OK, countries, []);
    }
    default:
      return methodsNotAllowedResponse(res, [HttpMethods.POST], method);
  }
};
