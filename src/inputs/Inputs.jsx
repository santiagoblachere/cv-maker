import { useState } from 'react'
import Personal from './Personal'
import '../App.css'


function Inputs( {formData, handleChange}) {
  return (
    <form action="">
      <Personal formData={formData} handleChange={handleChange} />
    </form>
  )
}

export default Inputs
