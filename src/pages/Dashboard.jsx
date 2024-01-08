import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/AuthContext";
import { useLoaderData } from "react-router-dom";
import './Dashboard.css'


export const getUserGoal = async () => {
  console.log(localStorage.getItem('userId'))
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
          <div className="dashboard-container">
            <div className="sw-container">
              <h3 className="sw-text">Starting Weight:</h3>
              <div className="sw-div">
                <h3 className="sw-goal">{userGoal.startingWeight}</h3>
              </div>
            </div>
        
            <div className="us-container">
              <h3 className="us-text">Goal Weight:</h3>
              <div className="us-div">
                <h3 className="us-goal">{userGoal.weightGoal}</h3>
              </div>
            </div>

            <div className="dc-container">
              <h3 className="dc-text">Daily Calories:</h3>
              <div className="dc-div">
                <h3 className="dc-goal">{userGoal.calorieGoal}</h3>
              </div>
            </div>
            </div>
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
  