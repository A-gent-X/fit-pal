import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/AuthContext";
import { useLoaderData } from "react-router-dom";
import './Dashboard.scss'
import Footer from "./Footer";


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

  const [resetWeight, setResetWeight] = useState("");
  const [resetStartingWeight, setResetStartingWeight] = useState("");
  const [resetCalorieGoal, setResetCalorieGoal] = useState("");

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

  const handleDeleteGoal = (e) => {
    e.preventDefault();

    axios
    .destroy('/api/goal/', {
      weightGoal,
      startingWeight,
      calorieGoal,
      goalId: state.goalId,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

  return (
    <div id="dashboard">

    <div className="x-box"></div>
    <div className="x-box-cont">
      <strong><h1 className="daily">Daily Focus</h1></strong>
      <strong><h6 className="diet-plan">Diet 35%</h6></strong>
      <strong className="fitness-plan"><h6>Fitness 30%</h6></strong>
      <strong className="caloric-intake"><h6>Recovery 35%</h6></strong>
    </div>


      {userGoal?.weightGoal ? (
        <div>
          <div className="dashboard-container">
            <div className="sw-container">
              <h1 className="sw-text">Starting Weight:</h1>
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
            <button className="reset-btn" onClick={(e) => handleDeleteGoal(e.target.value)}>reset</button>
            </div>
           </div>
      ) : (
        <form className="dash-board-form" id='square' onSubmit={(e) => handleSubmit(e)}>
          <input className="dash-board-input" id="weight-gl"
            placeholder="weightGoal"
            onChange={(e) => setWeightGoal(e.target.value)}
          />
          <input className="dash-board-input" id="rec"
            placeholder="record weight"
            onChange={(e) => setStartingWeight(e.target.value)}
          />
          <input className="dash-board-input" id="cal"
            placeholder="calories"
            onChange={(e) => setCalorieGoal(e.target.value)}
          />

          <button className="card-btn" type="submit">Add Goal</button>
        </form>
        
      )}
         <Footer />
    </div>
  );
};

export default Dashboard;
  