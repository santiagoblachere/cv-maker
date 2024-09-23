function Resume({handleEditChange, handleSaveChange, jobExperience, formData, submited, handleEditJob, handleDeleteJob, educationExperience, handleEditEducation, handleEditChangeEducation, handleDeleteEducation}) {
    return (
        <div className="resume">
            <div>
                <h1 className="name">{formData.name}</h1>
                <h2 className="description">{formData.profession}</h2>
                <p className="aboutMe">{formData.aboutMe}</p>
                {submited ?<h2>{formData.jobTitle}</h2> : null}
            </div>  
            {jobExperience.length > 0&& <h2>Job experience</h2>}
            {jobExperience.map( (job) => {
                return (
                    job.editMode ? (
                        <div key={job.jobKey} className="resume">
                            <label htmlFor="jobTitle">Job title</label>
                            <input onChange={(e) => handleEditChange(e, job.jobKey, "jobTitle")} value={job.jobTitle} type="text" name="jobTitle" id="jobTitle" />
                            <label htmlFor="jobDescription
                            ">Job description</label>
                            <input onChange={(e) => handleEditChange(e, job.jobKey, "jobDescription")} value={job.jobDescription} type="text" name="jobDescription" id="jobDescription" />
                            <label htmlFor="jobDate">Date</label>
                            <input onChange={(e) => handleEditChange(e, job.jobKey, "jobDate")} value={job.jobDate} type="text" name="jobDate" id="jobDate" />
                            <button onClick={() => handleSaveChange(job.jobKey, "job")}>Save</button>
                        </div>
                    ) : <div key={job.jobKey}>
                            <h3>{job.jobTitle}</h3>
                            <p>{job.jobDescription}</p>
                            <p>{job.jobDate}</p>
                            <button onClick={() => handleEditJob(job.jobKey)}>Edit</button>
                            <button onClick={() => handleDeleteJob(job.jobKey)}>Delete</button>             
                        </div>              
                )               
            })} 
            {educationExperience.length > 0 && <h2>Education</h2>}
            {educationExperience.map( (education) => {
                return (
                    education.editMode ? (
                    <div key={education.educationKey} className="resume">
                        <label htmlFor="schoolName">School name</label>
                        <input onChange={(e) => handleEditChangeEducation(e, education.educationKey, "schoolName")} value={education.schoolName} type="text" name="schoolName" id="schoolName" />
                        
                        <label htmlFor="degreeEarned
                        ">Degree earned</label>
                        <input onChange={(e) => handleEditChangeEducation(e, education.educationKey, "degreeEarned")} value={education.degreeEarned} type="text" name="degreeEarned" id="degreeEarned" />

                        <label htmlFor="dateRange">Date</label>
                        <input onChange={(e) => handleEditChangeEducation(e, education.educationKey, "educationDate")} value={education.educationDate} type="text" name="dateRange" id="dateRange" /> 

                        <button onClick={() => handleSaveChange(education.educationKey,"education")}>Save</button>
                    </div>   
                ) : <div key={education.educationKey} > 
                        <h3>{education.schoolName}</h3>
                        <p>{education.degreeEarned}</p>
                        <p>{education.educationDate}</p>
                        <button onClick={() => handleEditEducation(education.educationKey)}>Edit</button>
                        <button onClick={() => handleDeleteEducation(education.educationKey)}>Delete</button> 
                    </div>
                    )
            
            })}
                        
            

        
        </div>
    )
}

export default Resume