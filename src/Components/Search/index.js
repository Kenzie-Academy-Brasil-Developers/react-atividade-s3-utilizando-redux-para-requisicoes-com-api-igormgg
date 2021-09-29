import { useState } from "react";
import { useDispatch } from "react-redux";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    //chame o dispatch() passando o state input
    setInput("");
  };

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
    </div>
  );
};

export default Search;
