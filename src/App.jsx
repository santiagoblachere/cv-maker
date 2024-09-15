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
  const [submited, setSubmited] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmited(true)
  }
  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData( (prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  return (
    <>
      <Inputs submited={submited} handleSubmit={handleSubmit} formData={formData} handleChange={handleChange}/>
      <Resume submited={submited} formData={formData}/>
    </>
  )
}

export default App
