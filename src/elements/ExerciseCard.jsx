import { useState } from "react";
import "./ExerciseCard.css";
import axios from "axios";

const ExerciseCard = ({ workout, refetchAllWorkouts }) => {
  const [editing, setEditing] = useState(false);
  // const [description, setDescription] = useState(workout.description)
  // const [date, setDate] = useState(workout.date)
  // const [imgURL, setImgURL] = useState(workout.imgURL)

  // const handleDescriptionChange = e => {
  //   e.preventDefault()

  //   axios.put('/api', {description: workout.description, date: workout.date, imgURL: workout.imgURL, workoutId: workout.id})
  //     .then(res => {
  //       refetchAllWorkouts()
  //       setEditing(false)
  //     })
  //     .catch(err => console.log(err))
  // }

  const handleDeleteWorkouts = () => {
    axios
      .delete(`/api/workouts/${workout.id}`)
      .then((res) => {
        refetchAllWorkouts();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fitness-card">

        <img className="workout-img" src={workout.imgURL} />

      <div>
        <h1 className="workout-description">{workout.description}</h1>
      </div>
      <div>
        <h2>Mass: {workout.weight}</h2>
      </div>
      <div>
        <h2>Duration: {workout.volume}</h2>
      </div>
      <div>
        <h2>{workout.date}</h2>
      </div>

      {/* {editing ? (
        <form onSubmit={e => handleDescriptionChange(e)}>
         
          <input value={description} onChange={e => setDescription(e.target.value)} />
          <button type='submit'>Save</button>

        </form>
      ) : (
        <div>
          <p>{workout.description}</p>
          <button onClick={() => setEditing(!editing)}>Change Description</button>
        </div>
      )} */}

      <button className="card-btn" onClick={() => handleDeleteWorkouts()}>
        Delete
      </button>
    </div>
  );
};

export default ExerciseCard;
