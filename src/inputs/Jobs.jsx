import { useState } from "react"

function Jobs({jobExperience, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" name="jobTitle" required />

        <label htmlFor="jobDescription">Description:</label>
        <textarea id="jobDescription" name="jobDescription" required></textarea>

        <label htmlFor="dateRange">Date Range:</label>
        <input  type="text" id="dateRange" name="dateRange" placeholder="MM/YYYY - MM/YYYY" required />

        <button type='submit'>SUBMIT</button>
    </form>
    )
}

export default Jobs