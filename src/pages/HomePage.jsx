import { useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [bounty, setBounty] = useState("");
  const [job, setJob] = useState("");
  const [crew, setCrew] = useState("");
  const [fruit, setFruit] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCharacter = {
      name,
      image,
      age,
      bounty,
      job,
      crew,
      fruit,
    };

    axios
      .post("http://localhost:5005/characters", newCharacter)
      .then((response) => {
        console.log("Personaje agregado:", response.data);
      })
      .catch((error) => {
        console.error("Error al agregar personaje:", error);
      });
  };

  return (
    <div>
      <h1>Página de Inicio</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="image">Imagen:</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="age">Edad:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="bounty">Recompensa:</label>
          <input
            type="number"
            id="bounty"
            value={bounty}
            onChange={(e) => setBounty(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="job">Trabajo:</label>
          <input
            type="text"
            id="job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="crew">Tripulación:</label>
          <input
            type="text"
            id="crew"
            value={crew}
            onChange={(e) => setCrew(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fruit">Fruta:</label>
          <input
            type="text"
            id="fruit"
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
            required
          />
        </div>

        <button type="submit">Añadir Personaje</button>
      </form>
    </div>
  );
}
