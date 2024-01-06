import {useState} from 'react'

const MealCard = ({meal, refetchAllMeals}) => {
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
      <h1>{meal.mealDescription}</h1>
      <h1>{meal.calories}</h1>
      <h1>{meal.date}</h1>
      <img src={meal.imgURL} className='h-3/4 w-3/4'/>
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

export default MealCard