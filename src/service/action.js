import { ADD, DECREASE, DELETE, INCREASE } from "./actiontypes";

export const addItem = (data) => (dispatch) => {
    console.log('add', data);
    dispatch({
        type: ADD,
        payload: data
    })
}

export const increaseItem = (data) =>  {
    console.log("data", data);
 return   {
        type: INCREASE,
            payload: data
    }
}

export const decreseItem = (data) =>{

    return {
        type:DECREASE,
        payload:data
    }
}

export const deleteCart = (data) =>{

    return {
        type:DELETE,
        payload:data
    }
}

