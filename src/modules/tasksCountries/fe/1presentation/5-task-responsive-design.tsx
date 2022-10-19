/*
 We now want to display the countries as tiles in a grid.
 Each tile should show the country name in all caps letters and the code below.
 When clicking anywhere on the tile it should link to the country detail page (url: http://localhost:3000/countries/AL with AL being the respective code).
 Please also apply nice looking spacing and borders. Feel free to also add a hover effect.
 E.g.
 |---------------------|   |---------------------|
 | ANDORA              |   | ARMENIA             |
 | code: AN            |   | code: AM            |
 |---------------------|   |---------------------|

 Please show one tile per row on small screens and two tiles per row on large screens.

 Task:
 1. write the code required to display the tiles in a grid as described above.
    Please name it CountryList (pages/countries/index.tsx shows how it should be called)

  You can view your results on http://localhost:3000/countries
*/

import { config } from "@config";
import { A, FormCard, Grid } from "@styleGuide";
import { ICountry } from "../../sharedInterfaces/1-taks-interface";

interface ICountryList {
  countriesList: ICountry[];
}

export const CountryList = ({ countriesList }: ICountryList) => (
  // <div>your solution goes here </div>
  <div>
    <Grid>
      {countriesList?.map((country: ICountry) => (
        <A href={config.routes.country(country.code)} key={country.code}>
          <FormCard heading={country.name} showHoverEffect={true}>
            <div>{country.code}</div>
          </FormCard>
        </A>
      ))}
    </Grid>
  </div>
);
