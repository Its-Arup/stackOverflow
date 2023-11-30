import axios from "axios";
import {
  GETQUESTIONREQUEST,
  GETQUESTIONSUCCESS,
  GETSINGLEQUESTION,
} from "./actionType";

export const createQuestion = (payload) => {
  return axios
    .post("https://revision-mock-server-4.onrender.com/forum", payload)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getQuestions = (params) => (dispatch) => {
  dispatch({ type: GETQUESTIONREQUEST });
  axios({
    method: "GET",
    url: "https://revision-mock-server-4.onrender.com/forum",
    params: params,
  })
    .then((res) => {
      dispatch({ type: GETQUESTIONSUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GETQUESTIONFALIUR });
    });
};

export const getSingleQuestions = (id) => (dispatch) => {
  dispatch({ type: GETQUESTIONREQUEST });
  axios({
    method: "GET",
    url: `https://revision-mock-server-4.onrender.com/forum/${id}`,
  })
    .then((res) => {
      dispatch({ type: GETSINGLEQUESTION, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GETQUESTIONFALIUR });
    });
};
