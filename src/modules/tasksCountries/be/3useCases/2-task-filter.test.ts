import {filterCountries} from './2-task-filter'
import {getAllCountries} from '../4dataAccess/getAllCountries'


describe('Test filterCountries', () => {
  // your solution goes here
  it("testing the countries with search by name `an`",() => {

    const filteredCountries= filterCountries(getAllCountries(), "an");
    expect(filteredCountries.length).toBe(4);
  })

  it("testing the countries with search by name `am`",() => {

    const filteredCountries= filterCountries(getAllCountries(), "am");
    expect(filteredCountries.length).toBe(1);
  })

  it("testing the all countries without search term",() => {

    const filteredCountries= filterCountries(getAllCountries(), "");
    expect(filteredCountries.length).toBe(6);
  })
})
