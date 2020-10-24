import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Firebasecontext } from '../Firebase/';


const ForgetPassword = props => {

    const firebase = useContext(Firebasecontext);

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);


    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
        .then(() => {
            setError(null);
            setSuccess(`Consultez votre email ${email} pour changer le mot de passe`);
            setEmail("");

            setTimeout(() => {
                props.history.push('/login')
            }, 5000)
        })
        .catch(error => {
            setError(error);
            setEmail("");
        })

    }

    const disabled = email === "";

    return (
        <div className="containerLogin">
        <div className="rightcontainer">
        <h2 className="securite"><strong>Sécurisez votre domicile<br /> en toute sérénité</strong>
        </h2>
        <h2 className="securite2">
        En cas d’intrusion <br />Nous agissons immédiatement
        </h2>
        <h2 className="plus">
        Je veux en savoir plus
        </h2>
        
        </div>
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftForget">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">

                        { 
                            success && <span 
                                style={{ 
                                border: "1px solid green",
                                background: "green",
                                color: "#ffffff"
                            }}
                            >
                                {success}
                            </span>
                        }

                        {error && <span>{error.message}</span>}

                        <h3 className="oublie">Mot de passe oublié ?</h3>
                        <form onSubmit={handleSubmit}>

                            <div className="inputBox">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <button disabled={disabled}>Récupérer</button>

                        </form>

                            <Link className="simpleLinkcenter" to="/">Déjà inscrit? Connectez-vous.</Link>
                               
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ForgetPassword
