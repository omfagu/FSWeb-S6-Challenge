// Karakter bileşeniniz buraya gelecek
import { useEffect, useState } from "react";
import axios from "axios";
import Accordeon from "./Accordeon";
import Filmler from "./Filmler";
import "./Karakter.css";

const Karakter = () => {
  const [chars, setChars] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const chartPromise = axios("https://swapi.dev/api/people/");
    const filmsPromise = axios("https://swapi.dev/api/films/");
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 3000, "foo");
    });

    Promise.all([chartPromise, filmsPromise, promise3]).then((values) => {
      setChars(values[0].data);
      setFilms(values[1].data[0].results);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && <h1>Yükleniyor...</h1>}
      {!loading && (
        <div className="isimler">
          {chars.map((char, i) => (
            <Accordeon key={i} title={char.name}>
              <div className="ozellikler">
                <p>gender:{char.gender}</p>
                <p>Height:{char.height}</p>
                <p>Mass:{char.mass}</p>
                <p>BirthYear:{char.birth_year}</p>
                <p>Eye Color:{char.eye_color}</p>
                <p>Hair Color:{char.hair_color}</p>
                <p>Skin Color:{char.skin_color}</p>
              </div>
              <div className="2">
                <p>Appers in:</p>
                <Filmler char={char} films={films} />
              </div>
              <hr></hr>
            </Accordeon>
          ))}
        </div>
      )}
    </div>
  );
};

export default Karakter;
