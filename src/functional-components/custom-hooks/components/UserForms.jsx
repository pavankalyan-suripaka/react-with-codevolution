import React, { useState } from 'react'
import useInputHook from '../useInputHook';

const UserForms = () => {

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const [firstName, bindFirstName, resetFirstName] = useInputHook('');
    const [lastName, bindLastName, resetLastName] = useInputHook('');
    const [dropDownValue, binddropDownValue, resetdropDownValue] = useInputHook('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${firstName} - ${lastName} - ${dropDownValue}`);
        resetFirstName();
        resetLastName();
        resetdropDownValue();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    {/* <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} /> */}
                    <input type="text" {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" {...bindLastName} />
                </div>
                <div>
                    <select {...binddropDownValue}>
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForms
