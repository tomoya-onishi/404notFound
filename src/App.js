import NotFound from './images/Scarecrow.png';
import './App.css';
import React,{Component} from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
class App extends Component {
  render(){
    return <div>
        <p>404 NOT FOUND</p>
        <img src={NotFound}/>
    </div>
  }
}

export default App;
