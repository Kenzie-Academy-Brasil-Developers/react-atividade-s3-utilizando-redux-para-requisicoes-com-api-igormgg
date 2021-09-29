import axios from "axios";
import { toast } from "react-toastify";
import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch, getState) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((response) => {
      const digiArray = response.data;
      const findDigimon = digiArray.find((dgm) => dgm.name === digimon);
      const { digimons } = getState();
      console.log(findDigimon);
      if (findDigimon === undefined) {
        toast.error("Esse Digimon não existe");
      } else {
        dispatch(addDigimon([...digimons, findDigimon]));
        toast.success(`${findDigimon.name} adicionado!`);
      }
      console.log(getState());
    })
    .catch((err) => toast.error("Impossível"));
};

export default addDigimonsThunk;
