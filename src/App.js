import './App.css';
import './index.css';
import './nav.css';
import './login.css';

import React , {Component} from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

  render(){

    return (
      <body>
        <div className="App">
        
              <form className="search">
                <input className="search_box" type="search" placeholder="SEARCH FOODS... " />
                <button className="submit_search" type="submit " form="button " value="Submit "><a href ="http://127.0.0.1:8000/overview">FIND FOOD</a></button>
              </form>
            
          <div className="content">
            
          <h1>ONLINE FOOD DELIVERY</h1><br>
          </br>
        <h3>ORDER YOUR FAVORITES FOOD ONLINE</h3><br>
        </br>
        <p >
          A Moments of Delivered on<strong>Time</strong> .<br>
        </br>
A life full of<strong> Tasty</strong>  Food.<br>
        </br>
Taste that<strong> best</strong>, its on time.<br>
        </br>
Giving your <strong>Hunger</strong> a new Option.<br>
        </br>
A Trendy<strong> Food Delivery</strong>.<br>
        </br>
Love your <strong>Hunger</strong>.<br>
        </br>
Good Food for Good <strong>Moments</strong>.<br>
        </br>
<strong>The joy of Getting Best.</strong>
</p>
          
            <p className="App-intro">{this.state.apiResponse}</p>
          </div>
          
    </div>
      </body>
    )
  }
}

export default App;
