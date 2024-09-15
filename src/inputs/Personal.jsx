import { useState } from 'react'

function Personal() {
    return (
        <div>
            <form action="">
                <li>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" />
                </li>
                <li>
                    <label htmlFor="lastName">Last name: </label>
                    <input id="lastName" type="text" />
                </li>
                <li>
                    <label htmlFor="profession">Profession: </label>
                    <input id="profession" type="text" />
                </li>
                <li>
                    <label htmlFor="aboutMe">Short description: </label>
                    <textarea id="aboutMe" type="text" />
                </li>
            </form>
        </div>
    )
}

export default Personal