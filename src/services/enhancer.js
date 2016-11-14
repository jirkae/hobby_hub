import * as C from "./../constants/hobbyConstants";
import * as API from "./restApi";

const enhancer = store => next => action => {
  next(action);

  switch (action.type) {
    case C.REGISTER_USER:
      API.postRegister(action.payload)
        .then()
        .catch()
        .finally();
      console.log("zavoláno");
      break;

    default:
      break;
  }
};

export default enhancer;