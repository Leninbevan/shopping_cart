// import React, { useState } from "react";
// import Food from "./assests/food.jpg"
// import Uparrow from "./assests/caret-arrow-up.png"
// import Downarrow from "./assests/down-arrow.png"
// import Trash from "./assests/trash.png"
// import { useDispatch, useSelector } from "react-redux";
// import { increaseItem } from "./service/action";



// export const Card = (props) => {
//     const [count,setCount]=useState(1)
//     const dispatch=useDispatch()
//     const data=useSelector((state)=>state.addedItem[0])
//     console.log(data);
//     return (
//         <div className="itemCard d-flex mt-5" >

//             <div className="foodImageDiv">

//                 <img src={Food} alt="food" className="foodImage" />
//             </div>

//             <div className="foodDetails">
//                 <div className="mb-3 fw-bold">{props.food}</div>
//                 <div className="extraToppings">Extra Cheese and Topping</div>
//             </div>

//             <div className="foodCount">
//                 <div className="count">{count}</div>
//             </div>
//             <div className="addItem">
//                 <span>
//                     <img src={Uparrow} alt="up" className="upArrow"  onClick={()=>setCount(count+1,dispatch(increaseItem([props.price,count+1,props.index])))}/>
//                 </span>
//                 <div><img src={Downarrow} alt="down" className={`${count===1?"arrowNotAlowed":"downArrow"}`} onClick={()=>setCount(count-1)}/></div>
//             </div>

//             <div className="deleteItem d-flex">
//                 <div>${data.price}</div>
//                 <div><img src={Trash} alt="" className="deleteLogo" /></div>
//             </div>

//         </div>
//     )
// }