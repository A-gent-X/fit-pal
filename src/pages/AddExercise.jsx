import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/AuthContext";
import "./AddExercise.scss";
import Footer from "./Footer";

const AddExercise = () => {
  const { state } = useContext(AuthContext);

  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [volume, setVolume] = useState("");
  const [date, setDate] = useState("");
  const [imgURL, setURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/workouts", {
        description,
        weight,
        volume,
        date,
        imgURL,
        userId: state.userId,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="fit-container">
      <form id="fit-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="fit-description"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="fit-weight-vol">
          <input
            className="fit-weight"
            placeholder="weight"
            onChange={(e) => setWeight(e.target.value)}
          />

          <input
            className="fit-volume"
            placeholder="volume"
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>

        <input
          className="input-date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          className="workout-img-input"
          placeholder="image url"
          onChange={(e) => setURL(e.target.value)}
        />
     
        <button className="fit-btn" type="submit">
          Add Exercise
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default AddExercise;
