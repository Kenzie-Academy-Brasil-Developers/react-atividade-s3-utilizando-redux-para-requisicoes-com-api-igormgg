import { ADD_DIGIMONS } from "./actionTypes";

//Talves o case esteja errado

const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      return action.digimon;

    default:
      return state;
  }
};

export default digimonsReducer;
