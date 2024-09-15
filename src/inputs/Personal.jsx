import { useState } from 'react'

function Personal( {formData, handleChange, handleSubmit, submited}) {
    console.log(formData)
    return (
        <>
                <li>
                    <label htmlFor="name">Name and last name: </label>
                    <input value={formData.name} name="name" id="name" type="text" onChange={handleChange} />
                </li>
                <li>
                    <label htmlFor="profession">Profession: </label>
                    <input value={formData.profession}name="profession" id="profession" type="text" onChange={handleChange} />
                </li>
                <li>
                    <label htmlFor="aboutMe">Short description: </label>
                    <textarea value={formData.aboutMe}name="aboutMe" id="aboutMe" type="text"  onChange={handleChange}/>
                </li>
                <div>
                        <label htmlFor="jobTitle">Job Title:</label>
                        <input onChange={handleChange} value={formData.jobTitle} type="text" id="jobTitle" name="jobTitle" required />

                        <label htmlFor="jobDescription">Description:</label>
                        <textarea onChange={handleChange} value={formData.jobDescription} id="jobDescription" name="jobDescription" required></textarea>

                        <label htmlFor="dateRange">Date Range:</label>
                        <input onChange={handleChange} value={formData.dateRange} type="text" id="dateRange" name="dateRange" placeholder="MM/YYYY - MM/YYYY" required />

                        <button  onClick={handleSubmit} type='submit'>SUBMIT</button>
                </div>
        </>               
    )
}

export default Personal