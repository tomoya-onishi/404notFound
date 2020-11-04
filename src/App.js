import NotFound from './images/Scarecrow.png';
import './App.css';
import React,{Component} from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
class App extends Component {
  render(){
    return <div>
        <header>404 NOT FOUND</header>
        <img src={NotFound}/>
        <h1>I have bad news for you</h1>
        <h2>The page you are looking for might be removed or is temporarily unavailable</h2>
        <button>BACK TO HOMEPAGE</button>
    </div>
  }
}

export default App;
