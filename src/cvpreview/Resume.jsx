function Resume({handleEditChange, handleSaveChange, jobExperience, formData, submited, handleEditJob, handleDeleteJob, educationExperience}) {
console.log(educationExperience)
    return (
        <div className="resume">
            <div>
                <h1 className="name">{formData.name}</h1>
                <h2 className="description">{formData.profession}</h2>
                <p className="aboutMe">{formData.aboutMe}</p>
                {submited ?<h2>{formData.jobTitle}</h2> : null}
            </div>  
            {jobExperience.length > 0&& <h2>JOB EXPERIENCE</h2>}
            {jobExperience.map( (job) => {
                return (
                    job.editMode ? (
                        <div className="resume">
                            <label htmlFor="jobTitle">Job title</label>
                            <input onChange={(e) => handleEditChange(e, job.jobKey, "jobTitle")} value={job.jobTitle} type="text" name="jobTitle" id="jobTitle" />
                            <label htmlFor="jobDescription
                            ">Job description</label>
                            <input onChange={(e) => handleEditChange(e, job.jobKey, "jobDescription")} value={job.jobDescription} type="text" name="jobDescription" id="jobDescription" />
                            <label htmlFor="jobDate">Date</label>
                            <input onChange={(e) => handleEditChange(e, job.jobKey, "jobDate")} value={job.jobDate} type="text" name="jobDate" id="jobDate" />
                            <button onClick={() => handleSaveChange(job.jobKey)}>Save</button>
                        </div>
                    ) : <div key={job.jobKey}>
                            <h2>{job.jobTitle}</h2>
                            <p>{job.jobDescription}</p>
                            <p>{job.jobDate}</p>
                            <button onClick={() => handleEditJob(job.jobKey)}>Edit</button>
                            <button onClick={() => handleDeleteJob(job.jobKey)}>Delete</button>             
                        </div>              
                )               
            })} 
            {educationExperience.length > 0 && <h2>EDUCATION</h2>}
            {educationExperience.map( (education) => {
                return (
                    education.editMode ? (
                    <div className="resume">
                        <label htmlFor="schoolName">School name</label>
                        <input onChange={(e) => handleEditChange(e, education.educationKey, "schoolName")} value={education.schoolName} type="text" name="schoolName" id="schoolName" />
                        <label htmlFor="degreeEarned
                        ">Degree earned</label>
                        <input onChange={(e) => handleEditChange(e, education.educationKey, "degreeEarned")} value={education.degreeEarned} type="text" name="degreeEarned" id="degreeEarned" />
                        <label htmlFor="fieldOfStudy">Field of study</label>
                        <input onChange={(e) => handleEditChange(e, education.educationKey, "fieldOfStudy")} value={education.fieldOfStudy} type="text" name="fieldOfStudy" id="fieldOfStudy" />
                        <label htmlFor="dateRange">Date</label>
                        <input onChange={(e) => handleEditChange(e, education.educationKey, "dateRange")} value={education.dateRange} type="text" name="dateRange" id="dateRange" /> 
                    </div>   
                ) : <div key={education.educationKey} > 
                        <h2>{education.schoolName}</h2>
                        <p>{education.degreeEarned}</p>
                        <p>{education.fieldOfStudy}</p>
                        <p>{education.educationDate}</p>
                        <button onClick={() => handleEditJob(education.educationKey)}>Edit</button>
                        <button onClick={() => handleDeleteJob(education.educationKey)}>Delete</button> 
                    </div>
                    )
            
            })}
                        
            

        
        </div>
    )
}

export default Resume