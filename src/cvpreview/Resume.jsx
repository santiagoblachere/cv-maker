


function Resume({formData, submited}) {
    console.log(submited)
    return (
        <div className="resume">
            <h1 className="name">{formData.name}</h1>
            <h2 className="description">{formData.profession}</h2>
            <p className="aboutMe">{formData.aboutMe}</p>
            {submited ?<h2>{formData.jobTitle}</h2> : null}
        </div>
    )
}

export default Resume