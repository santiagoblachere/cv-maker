function Resume({handleEditChange, handleSaveChange, jobExperience, formData, submited, handleEditJob, handleDeleteJob}) {
    console.log(jobExperience)
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
                <div key={job.jobKey}>
                    <h2>{job.jobTitle}</h2>
                    <p>{job.jobDescription}</p>
                    <p>{job.jobDate}</p>
                    <button onClick={() => handleEditJob(job.jobKey)}>Edit</button>
                    <button onClick={() => handleDeleteJob(job.jobKey)}>Delete</button>   
                    {job.editMode && (
                        <div>
                            <input onChange={(e) => handleEditChange(e, job.jobKey, "jobTitle")} value={job.jobTitle} type="text" name="jobTitle" id="jobTitle" />
                            <input onChange={(e) => handleEditChange(e, job.jobKey, "jobDescription")} value={job.jobDescription} type="text" name="jobDescription" id="jobDescription" />
                            <input onChange={(e) => handleEditChange(e, job.jobKey, "jobDate")} value={job.jobDate} type="text" name="jobDate" id="jobDate" />
                            <button onClick={() => handleSaveChange(job.jobKey)}>Save</button>
                        </div>
                    )}             
                </div>              
                )               
            })} 
        </div>
    )
}

export default Resume