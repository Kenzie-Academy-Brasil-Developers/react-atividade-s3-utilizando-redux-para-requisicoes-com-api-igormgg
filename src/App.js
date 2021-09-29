import "./reset.css";
import "./App.css";
import Search from "./Components/Search";
import Digimons from "./Components/Digimons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Utilizando Redux para requisições com API's
      </header>
      <main>
        <Search />
        <Digimons />
      </main>
    </div>
  );
}

export default App;
