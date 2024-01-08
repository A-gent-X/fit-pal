import {useState} from 'react'
import './ExerciseCard.css'

const ExerciseCard = ({workout, refetchAllWorkouts}) => {
  const [editing, setEditing] = useState(false)
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

  return (
    <div className='fitness-card'>
      <h1 className='workout-description'>Fitness Routine: {workout.description}</h1>
      <div className="workout-img" >
        <img src={workout.imgURL} />
      </div>
      <h1>{workout.date}</h1>
      <img src={workout.imgURL} className='h-3/4 w-3/4'/>
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
    </div>
  )
}

export default ExerciseCard