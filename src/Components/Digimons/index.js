import { useSelector } from "react-redux";
import "./styles.css";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);

  return (
    <div className="digimonContainer">
      <ul>
        {digimons.map((digimon, index) => {
          return (
            <li key={index} className="digimonCard">
              <h3>{digimon.name}</h3>
              <img alt={digimon.name} src={digimon.img} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Digimons;
