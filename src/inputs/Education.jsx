import { useState } from "react"

function Education({educationExperience, handleSubmit}) {

    const [addMode, setAddMode] = useState(false)
    return (
        <div>
            {!addMode && <button onClick={() => setAddMode(true)}>Add Education</button>}
            {addMode && 
                <form onSubmit={(e) => handleSubmit(e, 'education')}>
                    <label htmlFor="schoolName">School Name:</label>
                    <input type="text" id="schoolName" name="schoolName" required />

                    <label htmlFor="degreeEarned">Degree Earned:</label>
                    <input type="text" id="degreeEarned" name="degreeEarned" required />

                    <label htmlFor="fieldOfStudy">Field of Study:</label>
                    <input type="text" id="fieldOfStudy" name="fieldOfStudy" required />

                    <label htmlFor="dateRange">Date Range:</label>
                    <input  type="text" id="dateRange" name="dateRange" placeholder="MM/YYYY - MM/YYYY" required />

                    <button type='submit'>SUBMIT</button>
                    <button onClick={() => setAddMode(false)}>Cancel</button>
                </form>
            }
        </div>
    )
}

export default Education