
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// date fns 
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (

    <div className="workout-details">
      <h1>{workout.title}</h1>
      <div className='jobCardText'>
        <p><strong>Company: &nbsp;</strong>{workout.company}</p>
        <p><strong>Location: &nbsp;</strong>{workout.location}</p>
        <p><strong>Description: &nbsp;</strong> {workout.description}</p>
        <p><strong>Job Mode: &nbsp;</strong>{workout.jobMode}</p>
        <p><strong>Last Date to Apply: &nbsp;</strong>{formatDistanceToNow(new Date(workout.lastDateToApply))}</p>
        <p>
          <strong>Apply at: &nbsp;</strong> <a href={workout.applyLink} target="_blank" rel="noopener noreferrer" >{workout.applyLink}</a>
        </p>
      </div>
      <div className='postedDate'>
        <p>Posted: &nbsp;{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      </div>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails