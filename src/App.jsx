import './styles/App.css'
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
    dateRange: ''
  })

  const [jobExperience, setJobExperience] = useState([])
  const [educationExperience, setEducationExperience] = useState([])

  const handleEditJob = (key) => {
    setJobExperience((previousJobExperience) => {
      const jobToEdit = previousJobExperience.map((previousJob) => {
        return previousJob.jobKey === key ? {...previousJob, editMode: true} : previousJob
      })
      return jobToEdit
    })
  }

  const handleDeleteJob = (key) => {
    setJobExperience((previousJobExperience) => {
      const newJobExperience = previousJobExperience.filter((previousJob) => {
        return previousJob.jobKey !== key;

      })
      return newJobExperience
    })

  }
  const handleEditChange = (e, key, property) => {
    const { value } = e.target;
    setJobExperience((previousJobExperience) => {
      return previousJobExperience.map((job) => {
        if (job.jobKey === key) {
          return { ...job, [property]: value };
        }
        return job;
      });
    });
  };
  const handleSaveChange =(key) => {
    setJobExperience((previousJobExperience => {
      return previousJobExperience.map((job) => {
        if (job.jobKey === key) {
          return { ...job, editMode: false };
        }
        return job;
      })
    }))
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }


  const handleSubmit = (event, state) => {
    event.preventDefault();
    const form = event.target;
    console.log(form)
    if (state === 'job') {
      const newJobExperience = {
        jobKey: crypto.randomUUID(),
        jobTitle: form.jobTitle.value,
        jobDescription: form.jobDescription.value,
        jobDate: form.dateRange.value,
        editMode: false
      };
      setJobExperience((previousJobExperience) => [...previousJobExperience, newJobExperience]);
      form.reset()
    } else {
      const newEducationExperience = {
        educationKey: crypto.randomUUID(),
        schoolName: form.schoolName.value,
        degreeEarned: form.degreeEarned.value + ' in ' + form.fieldOfStudy.value,
        educationDate: form.dateRange.value,
        editMode: false
      }
      setEducationExperience((previousEducationExperience) => [...previousEducationExperience, newEducationExperience]);
      form.reset()
    }
    
  };


  return (
    <div className="container">
      <div className="form-container">
        <Inputs jobExperience={jobExperience} educationExperience={educationExperience} handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} />
      </div>
      <div className="resume-container">
        <Resume educationExperience={educationExperience} handleEditChange={handleEditChange} handleSaveChange={handleSaveChange} handleDeleteJob={handleDeleteJob} handleEditJob={handleEditJob} jobExperience={jobExperience} formData={formData} />
      </div>
    </div>
  )
}

export default App
