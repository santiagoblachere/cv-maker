import { useState } from "react"

function Jobs({jobExperience, handleSubmit}) {

    const [ addMode, setAddMode ] = useState(false)
    return (
    <div>
    {!addMode && <button onClick={() => setAddMode(true)}>Add Job</button>}
    {addMode && 
        <form className="jobForm"onSubmit={(e) => handleSubmit(e,'job')}>
            <label htmlFor="jobTitle">Job Title:</label>
            <input type="text" id="jobTitle" name="jobTitle" required />

            <label htmlFor="jobDescription">Description:</label>
            <textarea id="jobDescription" name="jobDescription" required></textarea>

            <label htmlFor="dateRange">Date Range:</label>
            <input  type="text" id="dateRange" name="dateRange" placeholder="MM/YYYY - MM/YYYY" required />
            <div className="jobButtons">
                <button type='submit'>SUBMIT</button>
                <button onClick={() => setAddMode(false)}>Cancel</button>
            </div>
        </form>
        
        }
    </div>
    )
}

export default Jobs