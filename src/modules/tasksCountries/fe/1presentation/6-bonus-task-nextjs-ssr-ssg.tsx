/*
Bonus Task:
 1. Please explain the methods getStaticPaths() and getStaticProps() for next.js pages
 2. Please explain how to fetch the routes for dynamic paths
*/

// solution
import { getAllCountries } from "../../be/4dataAccess/getAllCountries";

export const getStaticPathsForCountries = async () => {
  // normally data fetching from api - we use sample data for simplicity
  return getAllCountries().map((c) => {
    return { params: { code: c.code } };
  });
};

/* 
1. getStaticPaths: 
getStaticPaths function is used to generate static paths for a page that has dynamic routes and it is used with getStaticProps.
This function, when exported from a next.js page that need dynamic routes, helps in pre-rendering all the paths defined by getStaticPaths.
[route].tsx or [route].js pattern is followed for defining the page with the dynamic route. 

2. getStaticProps: 
This function, when exported from a page, will help next.js in pre-render the page using the props returned by this function. 

In this assignment [code].tsx is defined inside the countries page thats why this assignment is able to generate the dynamic routes 
with the helper function in this file and getStaticPaths and getStaticProps in [code].tsx page. 
*/
