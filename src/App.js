import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <div className="App">
        <h1>React 商店</h1>
        <ul>
          <List name="item1" price={100} />
          <List name="item2" price={200} />
          <List name="item3" price={300} />
          <List name="item4" price={400} />
          <List name="item5" price={500} />
          <List />
          <List name="item6" price={600} />
        </ul>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
