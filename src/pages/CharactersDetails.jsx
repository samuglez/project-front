import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CharacterDetails.css";

export default function CharacterDetails({ apiUrl }) {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCharacter, setUpdatedCharacter] = useState({
    name: "",
    image: "",
    age: "",
    bounty: "",
    job: "",
    crew: "",
    fruit: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiUrl}/${id}`)
      .then(response => {
        setCharacter(response.data);
        setUpdatedCharacter(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id, apiUrl]);

  const handleDelete = () => {
    axios.delete(`${apiUrl}/${id}`)
      .then(() => {
        console.log("Personaje eliminado");
        navigate("/characters");
      })
      .catch(error => {
        console.error("Error al eliminar el personaje:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCharacter({
      ...updatedCharacter,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${apiUrl}/${id}`, updatedCharacter)
      .then(() => {
        console.log("Personaje actualizado");
        setIsEditing(false);
        setCharacter(updatedCharacter);
      })
      .catch(error => {
        console.error("Error al actualizar el personaje:", error);
      });
  };

  return (
    <div className="character-details">
      {character && (
        <div className="character-container">
          <h1 className="character-name">{isEditing ? "Editar Personaje" : character.name}</h1>

          <div className="character-image">
            <img src={character.image} alt={character.name} style={{ width: "200px" }} />
          </div>

          <form onSubmit={handleSubmit} className="character-form">
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={updatedCharacter.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="input-group">
              <label htmlFor="image">Image URL:</label>
              <input
                type="url"
                id="image"
                name="image"
                value={updatedCharacter.image}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="input-group">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={updatedCharacter.age}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="input-group">
              <label htmlFor="bounty">Bounty:</label>
              <input
                type="text"
                id="bounty"
                name="bounty"
                value={updatedCharacter.bounty}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="input-group">
              <label htmlFor="job">Job:</label>
              <input
                type="text"
                id="job"
                name="job"
                value={updatedCharacter.job}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="input-group">
              <label htmlFor="crew">Crew:</label>
              <input
                type="text"
                id="crew"
                name="crew"
                value={updatedCharacter.crew}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="input-group">
              <label htmlFor="fruit">Fruit:</label>
              <input
                type="text"
                id="fruit"
                name="fruit"
                value={updatedCharacter.fruit}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            {isEditing && <button type="submit" className="btn-save">Save Changes</button>}
          </form>

          <div className="buttons-container">
            {parseInt(id) >= 11 && (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="btn-edit"
              >
                {isEditing ? "Cancel Edit" : "Edit Character"}
              </button>
            )}

            {parseInt(id) >= 11 && (
              <button
                onClick={handleDelete}
                className="btn-delete"
              >
                Delete Character
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
