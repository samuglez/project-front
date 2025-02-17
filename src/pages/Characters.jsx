import { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.css";

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
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
