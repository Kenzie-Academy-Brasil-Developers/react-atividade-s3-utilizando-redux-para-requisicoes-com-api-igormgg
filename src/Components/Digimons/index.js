import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);

  return (
    <div>
      <ul>
        {digimons.map((digimon, index) => {
          return (
            <div>
              <li key={index}>{digimon.name}</li>
              <img alt={digimon.name} src={digimon.img} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Digimons;
