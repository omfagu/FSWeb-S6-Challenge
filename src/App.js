import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Karakterler from "./components/Karakter";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [karakterler, setKarakterler] = useState();

  function fetchData() {
    axios
      .get("https://swapi.dev/api/people/")
      .then(function (response) {
        // handle success
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakterler karakterler={karakterler} />
    </div>
  );
};

export default App;
