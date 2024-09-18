import { useState } from 'react'
import Personal from './Personal'
import '../App.css'
import Jobs from './Jobs'


function Inputs({jobExperience, handleSubmit, formData, handleChange}) {
  return (
    <div>
      <Personal formData={formData} handleChange={handleChange} />
      <h4>Job experience: </h4>
      <Jobs jobExperience={jobExperience} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Inputs
