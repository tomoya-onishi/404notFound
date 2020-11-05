import NotFound from './images/Scarecrow.png';
import './App.css';
import React,{Component} from 'react';
import MediaQuery from "react-responsive";

class App extends Component {
  render(){
    return <div>
        <MediaQuery query='(min-width: 768px)'>
          <header className="pcHeader">404 NOT FOUND</header>
          <img className="pcImg" src={NotFound}/>
          <h1 className="pcH1" >I have bad news for you</h1>
          <h2 className="pcH2" >The page you are looking for might be removed or is temporarily unavailable</h2>
          <button className="pcButton">BACK TO HOMEPAGE</button>
          <footer className="pcFooter">Your name @ DevChallenges.io</footer>
        </MediaQuery>
        <MediaQuery query='(max-width: 768px)'>
          <header className="smartHeader">404 NOT FOUND</header>
          <img className="smartImg" src={NotFound}/>
          <h1 className="smartH1">I have bad news for you</h1>
          <h2 className="smartH2">The page you are looking for might be removed or is temporarily unavailable</h2>
          <button className="smartButton">BACK TO HOMEPAGE</button>
          <footer className="smartFooter">Your name @ DevChallenges.io</footer>
        </MediaQuery>
    </div>
  }
}

export default App;
