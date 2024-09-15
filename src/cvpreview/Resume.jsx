


function Resume({formData}) {
    return (
        <div className="resume">
            <h1 className="name">{formData.name}</h1>
            <h2 className="description">{formData.profession}</h2>
            <p className="aboutMe">{formData.aboutMe}</p>
        </div>
    )
}

export default Resume