function Resume({jobExperience, formData, submited}) {
    console.log(jobExperience)
    return (
        <div className="resume">
            <div>
                <h1 className="name">{formData.name}</h1>
                <h2 className="description">{formData.profession}</h2>
                <p className="aboutMe">{formData.aboutMe}</p>
                {submited ?<h2>{formData.jobTitle}</h2> : null}
            </div>  
            {jobExperience.length > 0 && <h2>JOB EXPERIENCE</h2>}
            {jobExperience.map( (job) => {
                return (
                <div>
                    <h2>{job.jobTitle}</h2>
                    <p>{job.jobDescription}</p>
                    <p>{job.jobDate}</p>
                </div>
                )               
            })} 
        </div>
    )
}

export default Resume