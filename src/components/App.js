import React, {Component, useState} from "react";
import '../styles/App.css';
import Count from './Count';

const App = () => {
  const city = [
    {
      id :1,
      name: "Goa",
      country: "India"
    },
    {
      id :2,
      name: "Netherlands",
      country: "Amsterdam"
    },
    {
      id :3,
      name: "New York",
      country: "Usa"
    },
    {
      id :4,
      name:"Darjeeling",
      country:"India"
    },
    {
      id :5,
      name:"Tokyo",
      country:"Japan"
    },
    {
      id :6,
      name:"Lonavala",
      country:"India"
    }

  ];
  const cityJSX = {city.mpa((city) =>(<City city={city} key={city.id}/>);)};
  return (
    <></>
    <>
    <h1>Holidy List</h1>
     <p>{cityJSX}</p>
    </>
  )
}
