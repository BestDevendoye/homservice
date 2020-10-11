import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {

    apiKey: "AIzaSyB99w11X_xgh7zYYNl7gjtEYPa_fLF-5s8",
    authDomain: "marvel-quiz-e7e0c.firebaseapp.com",
    databaseURL: "https://marvel-quiz-e7e0c.firebaseio.com",
    projectId: "marvel-quiz-e7e0c",
    storageBucket: "marvel-quiz-e7e0c.appspot.com",
    messagingSenderId: "254234752469",
    appId: "1:254234752469:web:21f176394f05eae5ffb95c",
    measurementId: "G-MNLHGEC6J7"

};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore()
    }

    // inscription
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    // Connexion
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

    // Déconnexion
    signoutUser = () => this.auth.signOut();

    // Récupérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email); 

    // firestore
    user = uid => this.db.doc(`users/${uid}`);
}

export default Firebase;