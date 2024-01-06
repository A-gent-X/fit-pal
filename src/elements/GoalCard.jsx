import {useState} from 'react'

const GoalCard = ({goal, refetchAllGoals}) => {
  const [editing, setEditing] = useState(false)
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

  return (
    <div className='h-[500px] w-[500px]'>
      <h1>{goal.weightGoal}</h1>
      <h1>{goal.startingWeight}</h1>
      <h1>{goal.calorieGoal}</h1>

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
  )
}

export default GoalCard