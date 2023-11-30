import { GETQUESTIONFALIUR, GETQUESTIONREQUEST, GETQUESTIONSUCCESS } from "./actionType";

const initState ={
    isLodding:false,
    isError:false,
    questions : [],
    sinagleQuestion :{}
}

export const reducer = (state = initState, { type, payload }) => {
    switch(type){
        case GETQUESTIONREQUEST :
            return {
                ...state,
                isLodding: true,
                isError : false,
            }
        case GETQUESTIONSUCCESS :
            return {
                ...state,
                isLodding : false,
                questions : payload,
            }
        case GETQUESTIONFALIUR :
            return {
                ...state,
                isLodding : false,
                isError : true
            }
        default : 
            return state
    }
};
