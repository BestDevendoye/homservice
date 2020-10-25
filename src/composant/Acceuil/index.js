import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Firebasecontext } from '../Firebase'

const Login = (props) => {

    const firebase = useContext(Firebasecontext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();

        firebase.loginUser(email, password)
        .then(user => {
            setEmail('');
            setPassword('');
            props.history.push('/welcome');
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })
        
    }

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
            <div className="formBoxLeftLogin">
            </div>
            <div className="formBoxRight">
                <div className="formContent">

                    {error !== '' && <span>{error.message}</span>}

                    <h2 className="dejaclient">Déjà client ?</h2>
                    <h6 className="accederservice">Accédez aux services</h6>
                    <form onSubmit={handleSubmit}>

                        <div className="inputBox">
                            <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="inputBox">
                            <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required />
                            <label htmlFor="password">Mot de passe</label>
                        </div>
                        <Link className="simpleLink" to="/forgetpassword">Mot de passe perdu ?</Link>

                        {btn ? <button>Me connecter</button> : <button disabled>Me connecter</button> }
                      
                    </form>
                    <Link className="simpleLinkInsc" to="/signup">Je n’ai pas de compte</Link>
                </div>
            </div>
        </div>
    </div>
    </div>
 
       
    )
}

export default Login
