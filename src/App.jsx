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
  const handleEditEducation = (key) => {
    console.log(key)
    setEducationExperience((previousEducationExperience) => {
      const educationToEdit = previousEducationExperience.map((previousEducation) => {
        return previousEducation.educationKey === key ? {...previousEducation, editMode: true} : previousEducation
      })
      console.log(educationToEdit)
      return educationToEdit
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
  const handleDeleteEducation = (key) => {
    setEducationExperience((previousEducationExperience) => {
      const newEducationExperience = previousEducationExperience.filter((previousEducation) => {
        return previousEducation.educationKey !== key;
      })
      return newEducationExperience
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
  const handleEditChangeEducation = (e, key, property) => {
    const { value } = e.target;
    setEducationExperience((previousEducationExperience) => {
      return previousEducationExperience.map((education) => {
        if (education.educationKey === key) {
          return { ...education, [property]: value };
        }
        return education;
      });
    });
  };
  const handleSaveChange =(key, type) => {
    if ( type === 'job') {
      setJobExperience((previousJobExperience => {
        return previousJobExperience.map((job) => {
          if (job.jobKey === key) {
            return { ...job, editMode: false };
          }
          return job;
        })
      }))
    } else {  
      setEducationExperience((previousEducationExperience => {
        return previousEducationExperience.map((education) => {
          if (education.educationKey === key) {
            return { ...education, editMode: false };
          }
          return education;
        })
      }))
    }  
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
        <Resume educationExperience= {educationExperience} handleEditChange={handleEditChange} handleSaveChange={handleSaveChange} handleDeleteJob={handleDeleteJob} handleEditJob={handleEditJob} jobExperience={jobExperience} handleEditEducation={handleEditEducation} formData={formData} handleEditChangeEducation={handleEditChangeEducation} handleDeleteEducation={handleDeleteEducation}/>
      </div>
    </div>
  )
}

export default App
