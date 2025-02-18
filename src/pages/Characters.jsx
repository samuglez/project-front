import { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.css";
import { Link } from 'react-router-dom';

export default function Characters({ apiUrl }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <div className="characters-container">
        {characters.map((character) => {
          return (
            <div className="character" key={character.id}>
                <Link to={`/character/${character.id}`}></Link>
              <img src={character.image} />
              <h3>{character.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
