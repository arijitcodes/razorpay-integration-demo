// import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleDonationClick = (e) => {
    //
  };

  return (
    <div className="App">
      <header className="App-header">
        {/*   <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 */}
        <button onClick={handleDonationClick} className="donate-button">
          Click to Donate $5
        </button>
      </header>
    </div>
  );
}

export default App;
