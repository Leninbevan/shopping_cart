
import { ADD, DECREASE, DELETE, INCREASE } from "./actiontypes";

export const initialValue = {
    addedItem: [
        {food:'briyani',price:200,count:1},
        {food:'mutton chukka',price:289,count:1},
        {food:'veg fried rice',price:180,count:1}
    ],
}

export const reducer = (state = initialValue, action) => {
    console.log("addedItem", action);
    switch (action.type) {
        case ADD: {
            action.payload.count = 1
            return { ...state, addedItem: [...state.addedItem, action.payload] }
        }
        case INCREASE: {

            let increase_count = state.addedItem.map(item => {

                console.log(item.price);

                if (item.food === action.payload.food) {
                    return {
                        ...item, count: item.count + 1 , price : item.price * (item.count + 1)/ item.count
                    }
                }
                return item
            })
            
            return { ...state, addedItem: [...increase_count] }
        }
        case DECREASE:{
            let decrease_count=state.addedItem.map(item =>{

                if(item.food === action.payload.food){
                    return {
                        ...item, count:item.count -1, price : item.price * (item.count - 1)/ item.count
                    }
                }
                return item
            })
            return {...state,addedItem:[...decrease_count]}
        }

        case DELETE:{

            let afterDelete=state.addedItem.filter((state)=>{
                return state!==action.payload
            })
            return {...state,addedItem:[...afterDelete]}
        }

        default: {
            return { ...state }
        }
    }
}