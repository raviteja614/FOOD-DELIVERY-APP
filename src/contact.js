import React from 'react'
import './login.css';
import './nav.css';
import './index.css';
import img from './logo.jpg'
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'

class Contact extends React.Component {
    render() {
        return (
            <body>
                <div className="log">
                   
                <form action="#">
                    <h2>CONTACT US</h2>
                    <div>
                        <img src={img} />
                    </div>
                    <div className="container">
                        <p><strong>Please enter your queries.</strong></p>
                        <p><strong>or  feedback.</strong></p>
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Username" name="uname" required />
                        
                        
                        
                        <label><b>Contact Number</b></label>
                        <input type="text" placeholder="1234567890" name="num" required />
                        
                        <label><b>Feedback</b></label>
                        <input type="text" placeholder="Awesome experince" name="fb" required />
                        
                        <button type="submit">SUBMIT</button>
                        <Link to="/"><button type="button" className="cancelbtn">Cancel</button></Link>
                    </div>
                </form>
                </div>
           
            </body>
            
        )
    }
}

export default Contact