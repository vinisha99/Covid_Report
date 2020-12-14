import './App.css';
import StateDataComponent from './stateData'
//import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Covid Report</h1>
      <header className="App-header">
        <StateDataComponent/>
      </header>
    </div>
  );
}

export default App;