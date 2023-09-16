// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  // Donation Button Click Handler
  const handleDonationClick = async (e, amount) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/razorpay/generateOrder", {
        amount,
      });

      console.log("Order Data: ", data);
    } catch (error) {
      alert("FAILED TO GENERATE ORDER");
      console.error(error);
    }
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
        <div className="donate-button-section">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleDonationClick(e, 5);
            }}
            className="donate-button"
          >
            Click to Donate $5
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleDonationClick(e, 10);
            }}
            className="donate-button"
          >
            Click to Donate $10
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
