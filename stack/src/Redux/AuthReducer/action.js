import axios from "axios";
import { LOGINFAILUR, LOGINREQUEST, LOGINSUCCESS } from "./ActionType";

export const register = (payload) => {
  return axios
    .post("https://revision-mock-server-4.onrender.com/users", payload)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGINREQUEST });
  
  return axios
    .get("https://revision-mock-server-4.onrender.com/users")
    .then((res) => {
      console.log(res.data);
      let ans = res.data?.filter((ele) => {
        if (ele.email === payload.email && ele.password === payload.password) {
          return true;
        }
      });
      console.log(ans);
      if (ans.length > 0) {
        dispatch({ type: LOGINSUCCESS, payload: ans[0] });
        return true;
      } else {
        dispatch({ type: LOGINFAILUR });
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
