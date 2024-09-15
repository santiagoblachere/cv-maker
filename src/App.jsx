import './App.css'
import { useState } from 'react'
import Resume from './cvpreview/Resume'
import Inputs from './inputs/Inputs'
function App() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    profession: '',
    aboutMe: ''
  })
  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData( (prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  return (
    <>
      <Inputs formData={formData} handleChange={handleChange}/>
      <Resume formData={formData}/>
    </>
  )
}

export default App
