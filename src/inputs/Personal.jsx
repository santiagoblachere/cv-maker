import { useState } from 'react'

function Personal( {formData, handleChange}) {
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
        </>               
    )
}

export default Personal