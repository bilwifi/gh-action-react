import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload .
        </p>
        <h3>My env de test</h3>
        <div>{JSON.stringify(process.env,null,4)}</div>

      </header>
    </div>
  );
}

export default App;
