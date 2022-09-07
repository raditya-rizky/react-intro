import logo from "./logo.svg";
import "./App.css";
import Article from "./components/Article";
import Count from "./components/Count";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Count />
      </header>

      <Article
        title="Artikel 1"
        body="Body 1"
        createdAt={new Date("2022-06-07")}
      />

      <Article
        title="Artikel 2"
        body="Body 2"
        createdAt={new Date("2022-08-08")}
      />

      <Article
        title="Artikel 2"
        body="Body 2"
        createdAt={new Date("2021-05-03")}
      />
    </div>
  );
}

export default App;
