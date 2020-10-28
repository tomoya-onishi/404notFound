import NotFound from './images/Scarecrow.png';
import './App.css';
const style = {
  width: "539.22px",
  height: "447.43px",
  top: "265px",
  left: "77px",
  backgroundImage: `url(${NotFound})`
};

function App(){
  return(
    <div>
      <header>
        <img style={style}/>
      </header>
    </div>
  )
}

export default App;
