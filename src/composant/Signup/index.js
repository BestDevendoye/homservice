import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Firebasecontext } from '../Firebase'

const Signup = (props) => {

    const firebase = useContext(Firebasecontext);

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password, pseudo } = loginData;
        firebase.signupUser(email, password)
        .then( authUser => {
            return firebase.user(authUser.user.uid).set({
                pseudo,
                email
            })
        })
        .then(() => {
            setLoginData({...data});
            props.history.push('/welcome');
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }

    const { pseudo, email, password, confirmPassword } = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword 
    ? <button disabled>Inscription</button> : <button>Inscription</button>

    // gestion erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>;

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
        <div className="signUpSignBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">

                    <span>{errorMsg}</span>
                    <h6 className="accederservice1">Inscription</h6>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required />
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>

                            {btn}
                            <Link className="simpleLinkcenter" to="/">Déjà inscrit? Connectez-vous.</Link>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Signup
