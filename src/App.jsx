import './App.css'
import { useState } from 'react'
import Resume from './cvpreview/Resume'
import Inputs from './inputs/Inputs'
function App() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    profession: '',
    aboutMe: '',
    jobTitle: '',
    jobDescription: '',
    dateRange:''
    
  })
  const [jobExperience, setJobExperience] = useState([])
  console.log(jobExperience)
  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData( (prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setJobExperience(prevData => [...prevData,
      {
        jobTitle: e.target[0].value,
        jobDescription: e.target[1].value,
        jobDate: e.target[2].value
      }
    ])
  }
  return (
    <>
      <Inputs jobExperience={jobExperience} handleSubmit={handleSubmit} formData={formData} handleChange={handleChange}/>
      <Resume jobExperience={jobExperience} formData={formData}/>
    </>
  )
}

export default App
