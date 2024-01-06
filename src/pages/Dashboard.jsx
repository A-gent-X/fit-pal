import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/AuthContext";
import { useLoaderData } from "react-router-dom";
import './Dashboard.css'
import Footer from './Footer'

export const getUserGoal = async () => {
  const userGoal = await axios.get(
    `/api/goal/${localStorage.getItem("userId")}`
  );
  return userGoal.data;
};

const Dashboard = () => {
  const { state } = useContext(AuthContext);
  const userGoal = useLoaderData();
  console.log(userGoal);

  const [weightGoal, setWeightGoal] = useState("");
  const [startingWeight, setStartingWeight] = useState("");
  const [calorieGoal, setCalorieGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/goal", {
        weightGoal,
        startingWeight,
        calorieGoal,
        userId: state.userId,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div id="dashboard">
      {userGoal?.weightGoal ? (
        <div>
          <div>
            <h3>Starting Weight:</h3>
            {userGoal.startingWeight}</div>
            <h3>Goal Weight:</h3>
           <div>{userGoal.weightGoal}</div>
            <h3>Daily Calories:</h3>
           <div>{userGoal.calorieGoal}</div>
           </div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            placeholder="weightGoal"
            onChange={(e) => setWeightGoal(e.target.value)}
          />
          <input
            placeholder="record weight"
            onChange={(e) => setStartingWeight(e.target.value)}
          />
          <input
            placeholder="calories"
            onChange={(e) => setCalorieGoal(e.target.value)}
          />

          <button type="submit">Add Goal</button>
          
        </form>
        
      )}
         
    </div>
  );
};

export default Dashboard;
  