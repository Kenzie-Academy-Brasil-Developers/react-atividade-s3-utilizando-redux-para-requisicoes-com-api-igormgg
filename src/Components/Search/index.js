import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";
import "./styles.css";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(addDigimonsThunk(input));
    setInput("");
  };

  return (
    <div className="searchContainer">
      <div className="searchBox">
        <h2>Procure pelo seu Digimon!</h2>
        <div className="inputBox">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Procure seu Digimon"
          />
          <button onClick={handleSearch}>Pesquisar</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
