import { useState } from 'react'
import Personal from './Personal'
import '../styles/App.css'
import Jobs from './Jobs'
import Education from './Education'

function Inputs({educationExperience, jobExperience, handleSubmit, formData, handleChange}) {
  return (
    <div className="inputs">
      <Personal formData={formData} handleChange={handleChange} />
      <h4>Job experience: </h4>
      <Jobs jobExperience={jobExperience} handleSubmit={handleSubmit}/>
      <h4>Education: </h4>
      <Education educationExperience={educationExperience} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Inputs
