import React from 'react'
import batman from '../../images/batman.png'

const center = {
    fontSize : '22px',
    marginTop : '50px',
    color: 'black'

}

const styleimge = {
    display: 'block',
    margin : '50px  auto'
}

const ErrorPage = () => {
    return (
        <div className="quiz-bg">
        <div className="container">
        <h1 style={center}> Oups , cette page n'existe pas </h1>
          <img src={batman}  alt="error page "  style={(styleimge)}  />
        
        </div>
            
        </div>
    )
}

export default ErrorPage
