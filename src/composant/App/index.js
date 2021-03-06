import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Welcome from '../Welcome'
import Acceuil from '../Acceuil'
import Signup from '../Signup'
import ErrorPage from '../ErrorPage'
import ForgetPassword from '../ForgetPassword'
import '../../App.css';

function App() {
  return (
    <Router>
    
        <Header />

        <Switch>
          <Route exact path="/" component={Acceuil} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route component={ErrorPage} />
        </Switch>

        <Footer />
  
    </Router>
  );
}

export default App;
