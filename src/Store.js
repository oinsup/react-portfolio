import {createStore} from "redux";


const initialState = {name:"오인섭",age:33}

export function reducer(state = initialState, action){
    switch (action.type) {
        case "INCREASE" :
            return {...state,age:state.age + 1}
        case "DECREASE" :
            return {...state,age:state.age - 1}
        case "NAME_CHANGE" :
            return {...state,name:state.name}
        default:
            return state;
    }
}


let store = createStore(reducer);

export default store;