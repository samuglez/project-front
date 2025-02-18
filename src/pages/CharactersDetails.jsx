import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CharacterDetails({ apiUrl }) {
  const { id } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios.get(`${apiUrl}/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id, apiUrl]);

  return (
    <div>
        {character && 
        <div>
            <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} style={{ width: "200px" }} />
      <p><strong>Age:</strong> {character.age}</p>
      <p><strong>Bounty:</strong> {character.bounty}</p>
      <p><strong>Job:</strong> {character.job}</p>
      <p><strong>Crew:</strong> {character.crew.name}</p>
      <p><strong>Fruit:</strong> {character.fruit.name}</p>
        </div>}
      
    </div>
  );
}
