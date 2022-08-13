import React from "react";
import { useState } from "react";

export const Pages = () => {
  const [data, setData] = useState([]);
  //Exports an array, data and a method

  const getPages = () => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((res) => res.json()) //parse data in json format
      .then((json) => {
        setData(json);
      }) //take data in json format and store in variable json. when hook is called, it looks for value of data
      .catch((err) => {
        console.error(err);
      });
  };

  getPages();

  return (
    <>
      <header>
        <h1>This is Our Saturday React Project!</h1>
      </header>
      <main>
        {data.map((each) => {
          return (
            <div>
              <h2>{each.title}</h2>
              <img src={each.image} alt="" />
              <p>{each.description}</p>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Pages;
