import { useState } from "react";
import "./MealCard.css";
import axios from "axios";

const MealCard = ({ meal, refetchAllMeals }) => {
  const [editing, setEditing] = useState(false);
  // const [priority, setPriority] = useState(book.priority)

  // const handlePriorityChange = e => {
  //   e.preventDefault()

  //   axios.put('/api', {title: meal.title, desc: meal.desc, imgURL: meal.imgURL, priority, mealId: meal.id})
  //     .then(res => {
  //       refetchAllMeals()
  //       setEditing(false)
  //     })
  //     .catch(err => console.log(err))
  // }

  const handleDeleteMeal = () => {
    axios
      .delete(`/api/meals/${meal.id}`)
      .then((res) => {
        refetchAllMeals();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="meal-card">
      <div className="meal-container">
        <img className="meal-img" src={meal.imgURL} />
        <div className="meal-des">
        <h1>{meal.mealDescription}</h1>
      </div>
      <div>
        <h2>Calories: {meal.calories}</h2>
      </div>
      <div>
        <h2>{meal.date}</h2>
      </div>

      <button className="card-btn" onClick={() => handleDeleteMeal()}>Delete</button>

      </div>

      {/* {editing ? (
        <form onSubmit={e => handlePriorityChange(e)}>
         
          <input value={priority} onChange={e => setPriority(e.target.value)} />
          <button type='submit'>Save</button>

        </form>
      ) : (
        <div>
          <p>{meal.priority}</p>
          <button onClick={() => setEditing(!editing)}>Change Priority</button>
        </div>
      )} */}
    </div>
  );
};

export default MealCard;
