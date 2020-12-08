import React from 'react'
import './nav.css';
import './index.css';
import img from './logo.jpg'
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'

class Footer extends React.Component {
  render() { 
      return (
        <div>
            <footer>
              <img src={img} alt="FOODON" />
             
                  <p className="abt">ABOUT US</p>
                  <p>we are here to serve food to all through online</p>
                  <p>we are delivering food at door step and affordable money</p>
                  <p>if any issues you can mail us<strong> foodon@gmail.com</strong></p>
                 
              
              <div><strong>THANK YOU FOR VISITING</strong></div>
            </footer>
        </div>
        );
    }
  }
export default Footer