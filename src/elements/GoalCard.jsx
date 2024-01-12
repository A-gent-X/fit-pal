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

  // const handleDeleteGoal = () => {
  //   axios.delete(`/api/goal/${goal.id}`)
  //   .then(res => {
  //     refetchUserGoal()
  //   })
  //   .catch(err => console.log(err))
  // }


  return (
    <div className='h-[500px] w-[500px]'>
      <h1>{goal.weightGoal}</h1>
      <h1>{goal.startingWeight}</h1>
      <h1>{goal.calorieGoal}</h1>

    </div>
  )
}

export default GoalCard