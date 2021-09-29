import "./reset.css";
import "./App.css";
import Search from "./Components/Search";
import Digimons from "./Components/Digimons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Utilizando Redux para requisições com API's
      </header>
      <main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Search />
        <Digimons />
      </main>
    </div>
  );
}

export default App;
