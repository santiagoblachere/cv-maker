import { useState } from 'react'
import Personal from './Personal'
import '../App.css'


function Inputs({submited, handleSubmit, formData, handleChange}) {
  return (
    <form action="">
      <Personal submited={submited} handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} />
    </form>
  )
}

export default Inputs
