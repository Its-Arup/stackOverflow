import { LOGINFAILUR, LOGINREQUEST, LOGINSUCCESS } from "./ActionType";

const initState = {
  isLodding: false,
  isError: false,
  isAuth: false,
  username: "",
  avatarUrl: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGINREQUEST:
      return {
        ...state,
        isLodding: true,
        isError: false,
      };
    case LOGINSUCCESS:
      return {
        ...state,
        isLodding: false,
        isAuth: true,
        username: payload.username,
        avatarUrl: payload.avatar,
      };
    case LOGINFAILUR :
        return {...state , isLodding: false, isError : true};
    default :
      return state;
  }
};
