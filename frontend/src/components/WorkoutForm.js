import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [applyLink, setApplyLink] = useState('');
  const [jobMode, setJobMode] = useState('Onsite');
  const [lastDateToApply, setLastDateToApply] = useState('');

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
 
  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {
      title,
      company,
      location,
      description,
      applyLink,
      jobMode,
      lastDateToApply,};
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      // Reset the form fields
      setTitle('');
      setCompany('');
      setLocation('');
      setDescription('');
      setApplyLink('');
      setJobMode('Onsite');
      setLastDateToApply('');
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h2>Create a New Job Post</h2>

      <label>Title(Position):</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Company Name:</label>
      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}
        className={emptyFields.includes('company') ? 'error' : ''}
      />

      <label>Location:</label>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} 
        className={emptyFields.includes('location') ? 'error' : ''}
      />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} 
        className={emptyFields.includes('description') ? 'error' : ''}
        style={{ height: '150px', width: '100%' }}
      />

      

      <label>Job Mode:</label>
      <select value={jobMode} onChange={(e) => setJobMode(e.target.value)} className='jobMode' 
      >
        <option value="Remote">Remote</option>
        <option value="Onsite">Onsite</option>
        <option value="Hybrid">Hybrid</option>
      </select>


      <label>Last Date to Apply:</label>
      <input type="date" value={lastDateToApply} onChange={(e) => setLastDateToApply(e.target.value)}
        className={emptyFields.includes('lastDateToApply') ? 'error' : ''}
        />

      <label>Apply Link:</label>
      <input type="text" value={applyLink} onChange={(e) => setApplyLink(e.target.value)} 
        className={emptyFields.includes('applyLink') ? 'error' : ''}
        />

      <div className='formButton'> 
        <button>Post Job</button>
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm