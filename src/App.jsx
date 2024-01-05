import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Uparrow from "./assests/caret-arrow-up.png";
import Downarrow from "./assests/down-arrow.png";
import Food from "./assests/food.jpg";
import { default as Cardlogo, default as Logo } from "./assests/man.png";
import Mastercard from "./assests/mastercard.png";
import Rupay from "./assests/rupay.png";
import Trash from "./assests/trashCan.png";
import Visa from "./assests/visa.png";
import { addItem, decreseItem, deleteCart, increaseItem } from "./service/action";

const App = () => {
  const dispatch = useDispatch();
  const addedData = useSelector((state) => state.addedItem);
  let shipping = 24;

  const [inputField, setInputField] = useState({
    food: '',
    price: ''
  })

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  const handleClick = () => {
    dispatch(addItem(inputField));
    setInputField({
      food: '',
      price: ''
    })
  }

  const increaseCount = (item) => {
    console.log(item);
    dispatch(increaseItem(item))
  }

  const decreaseCount = (item) => {
    dispatch(decreseItem(item))
  }

  const deleteItem = (item) => {
    dispatch(deleteCart(item))
  }

  const subTotal = addedData.reduce((prev, cur) => {
    return prev + +cur.price
  }, 0)

  let totalAmount = subTotal + shipping

  console.log("inputField", inputField);
  return (
    <div className='mainContainer'>

      <div className='inputContainer'>
        <div className="logo mt-3"><img src={Logo} alt="logo" className="image" /></div>
        <div className="inputDiv p-3">
          <label htmlFor="item" className="form-label">Enter the Items Name</label>
          <input type="text" className="form-control" name="food" value={inputField.food} onChange={inputsHandler} />
        </div>
        <div className="inputDiv p-3">
          <label htmlFor="price" className="form-label">Add Price</label>
          <input type="number" className="form-control" name="price" value={inputField.price} onChange={inputsHandler}/>
        </div>
        <div className="button">
          <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
        </div>
      </div>

      <div className='itemContainer'>
        <h3 className="fw-bold">Shopping Cart</h3>
        <div className="line mt-4"></div>
        <div>
          <div className="cart mt-4 fs-4 fw-normal">Shopping Cart</div>
          <div className="itemTotalCount">Youe have {addedData.length} item in your cart</div>
        </div>
        <div className="allCards">
          {
            addedData?.map((item, index) => {
              return (
                <div className="itemCard d-flex mt-5" key={index}>

                  <div className="foodImageDiv">

                    <img src={Food} alt="food" className="foodImage" />
                  </div>

                  <div className="foodDetails">
                    <div className="mb-3 fw-bold">{item.food}</div>
                    <div className="extraToppings">Extra Cheese and Topping</div>
                  </div>

                  <div className="foodCount">
                    <div className="count">{item.count}</div>
                  </div>
                  <div className="addItem">
                    <span>
                      <img src={Uparrow} alt="up" className="upArrow" onClick={() => increaseCount(item)} />
                    </span>
                    <div><img src={Downarrow} alt="down" className={`${item.count === 1 ? "arrowNotAlowed" : "downArrow"}`} onClick={() => decreaseCount(item)} /></div>
                  </div>

                  <div className="deleteItem d-flex">
                    <div>${item.price}</div>
                    <div><img src={Trash} alt="" className="deleteLogo" onClick={() => deleteItem(item)} /></div>
                  </div>

                </div>
              )

            })
          }
        </div>

      </div>

      <div className='paymentContainer'>
        <div className="paymentContent">


          <div className="d-flex cardHeader">
            <div className="cardTitle">
              Card Details
            </div>
            <div>
              <img src={Cardlogo} alt="log" className="cardLogo" />
            </div>
          </div>
          <div>
            <div className="cardType mt-3">Card Type</div>
            <div className="d-flex cardsDiv mt-2">
              <div className="card"><img className="paymentLogo" src={Mastercard} alt={"logo"} /></div>
              <div className="card"><img className="paymentLogo" src={Visa} alt={"logo"} /></div>
              <div className="card"><img className="paymentLogo" src={Rupay} alt={"logo"} /></div>
              <div className="card d-flex moreCards">SEE ALL</div>
            </div>
          </div>
          <div className="cardDetails">
            <div className="cardName mt-3">
              <div className="nameLable">Name on card</div>
              <div contentEditable="true" className="name mt-2">Lenin</div>
            </div>
            <div className="cardNumber mt-3">
              <div className="numberLable">Card Number</div>
              <div contentEditable="true" className="number mt-2">6655568259</div>
            </div>
            <div className="expiryDatteAndCvv d-flex">
              <div className="expiryDate mt-3">
                <div className="dateLable">Expiration Date</div>
                <div contentEditable="true" className="date mt-2">12/25</div>
              </div>
              <div className="cvv mt-3">
                <div className="cvvLable">CVV</div>
                <input type="number" className="cvvNumber" />
              </div>
            </div>

          </div>
          <div className="billDiv mt-5">
            <div className="d-flex amount">
              <div>Sub Total</div>
              <div>${subTotal}</div>
            </div>
            <div className="d-flex amount mt-2">
              <div>Shipping</div>
              <div>${shipping}</div>
            </div>
            <div className="d-flex amount mt-2">
              <div>Total Tax.incl</div>
              <div>${totalAmount}</div>
            </div>
          </div>
          <button className="checkButton btn btn-primary mt-4" type="button">${totalAmount} Checkout</button>
        </div>
      </div>

    </div>
  );
}
export default App
