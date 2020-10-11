import React, { useState, useEffect, useContext } from 'react'
import { Firebasecontext } from '../Firebase'

const Logout = () => {

    const firebase = useContext(Firebasecontext);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) {
            //console.log("Déconnexion");
            firebase.signoutUser();
        }

    }, [checked, firebase]);

    const handleChange = event => {
        setChecked(event.target.checked);
    }

    return (
        <div className="logoutContainer">
            <label className="switch">
               <button onClick={handleChange}>Deconnexion</button>
            </label>
        
        </div>
    )
}

export default Logout
