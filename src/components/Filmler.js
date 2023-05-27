// Karakter bileşeniniz buraya gelecek
import { useEffect, useState } from "react";
import axios from "axios";
import Accordeon from "./Accordeon";

const Filmler = ({ char, films }) => {
  return (
    <div>
      {films
        .filter((f) => char.films.includes(f.title))
        .map((film, i) => (
          <Accordeon key={i} title={film.title}>
            <div className="names">
              <span>{film.opening_crawl}</span>
              <span>Title:{film.title}</span>
              <span>Director:{film.director}</span>
              <span>Producer:{film.producer}</span>
              <span>Release Date:{film.release_date}</span>
            </div>
          </Accordeon>
        ))}
    </div>
  );
};

export default Filmler;
