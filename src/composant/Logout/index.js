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
        <h6>Deconnexion</h6>
            <label className="switch">
                <input 
                    onChange={handleChange}
                    type="checkbox"
                    checked={checked}
                />
                <span className="slider round" data-tip="Déconnexion"></span>
            </label>
        
        </div>
    )
}

export default Logout
