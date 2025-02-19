import { useState } from "react";
import axios from "axios";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [bounty, setBounty] = useState("");
  const [job, setJob] = useState("");
  const [crew, setCrew] = useState("");
  const [fruit, setFruit] = useState("");
  const navigate = useNavigate();

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
      .post(`${import.meta.env.VITE_BACK_URL}`, newCharacter)
      .then((response) => {
        console.log("Personaje agregado:", response.data);
        navigate("/characters");
      })
      .catch((error) => {
        console.error("Error al agregar personaje:", error);
      });
  };

  return (
    <div>
<div className="homePageContainer">
<form onSubmit={handleSubmit}>
        <div>
          <h2>New Character</h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="bounty">Bounty:</label>
          <input
            type="text"
            id="bounty"
            value={bounty}
            onChange={(e) => setBounty(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="job">Job:</label>
          <input
            type="text"
            id="job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="crew">Crew:</label>
          <input
            type="text"
            id="crew"
            value={crew}
            onChange={(e) => setCrew(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fruit">Fruit:</label>
          <input
            type="text"
            id="fruit"
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
            required
          />
        </div>

        <button type="submit">Add Character</button>
      </form>
</div>
      
    </div>
  );
}
