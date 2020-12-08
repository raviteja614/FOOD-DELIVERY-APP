import React from 'react'
import './login.css';
import './nav.css';
import './index.css';
import {Link} from 'react-router-dom'

class FAQs extends React.Component {
    render() {
        return (
            <body>
                <div className="wrap2">
                    <div className="login">
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                        <br/>
                        <br/><br></br>
                        <p><strong>1. is this website use to order food?</strong></p>
                        <p1>Ans: yes</p1>
                        <br/>
                        <br/>
                        <p><strong>2. how to order?</strong></p>
                        <p1><strong>Ans: log on to the site or sign up if you haven't , search for your favorite food and order from us</strong> </p1>
                        <br/>
                        <br/>
                        <p><strong>3. Is the site free  to use?</strong></p>
                        <p1>Ans: Absolutely</p1>
                        <br/>
                        <br/>
                        
                        <Link to="/"><button type="button" class="cancelbtn">Back</button></Link>
                    </div>
                </div>
                
            </body>
        );
    }
}

export default FAQs