import { useState, useContext } from "react";
import axios from "axios";
import {InterestsContext} from '../../context/InterestsContext';
import {UserContext} from '../../context/UserContext';


const SellModal = (props) => {
  const {getInterests} = useContext(InterestsContext);
  const {user} = useContext(UserContext);
  const {
    card_name,
    card_set,
    amount,
    buyprice,
    isfoil,
    modalshow,
    setModalShow,
    interest_id,
    margin
  } = props;
  const [sellamount, setSellAmount] = useState('');
  const [sellprice, setSellPrice] = useState('');
  const [sellToggle, setSellToggle] = useState(false);

  let modaltoggle = !modalshow ? "modal-closed" : "addmodal";

  const sellInterest = (e, interest_id, sellamount, sellprice, amount, buyprice) => {
    e.preventDefault();
    if (sellamount && amount) {
      if (sellamount <= amount) {
        if (interest_id && sellamount && sellprice && margin) {
          axios
            .post("/api/interests/sell", {
              interest_id,
              sellamount,
              sellprice,
              margin,
            })
            .then((res) => {
              getInterests(user.user_id);
              console.log(res);
            })
            .catch((err) => console.log(err));
          setModalShow(false);
        }
      } else {
        alert(`You don't have that many to sell! Adjust amount and try again.`);
      }
    } else {
      alert("Please input a selling amount and price.");
    };
    setSellAmount('');
    setSellPrice('');
  };

  return (
    <div className={modaltoggle}>
      <div className="modal" id="modal">
        <div className="topbar">
          <button className="delete-interest">DELETE INTEREST</button>
          <div className="close-container" onClick={() => setModalShow(false)}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
          </div>
        </div>
        <div className="modal-content" style={{ height: "75%" }}>
          <div className="cardinfo">
            <h1>{card_name}</h1>
            <h2>{card_set}</h2>
            <p>{isfoil ? "Foil" : null}</p>
          </div>
          <form action="submit" className="sell-form">
            <div className="addcard" style={{ height: "40%" }}>
              <p>Amount: </p>
              <input
                type="text"
                value={sellamount}
                name="card_amount"
                autoFocus
                onChange={(e) => setSellAmount(e.target.value)}
                style={{ marginLeft: "0px" }}
              />
              <p className="sellinput">Sell Price:</p>
              <input
                type="text"
                value={sellprice}
                name="sellprice"
                style={{ width: "60px" }}
                onChange={(e) => setSellPrice(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className="sellinterest"
              onMouseEnter={() => setSellToggle(true)}
              onMouseLeave={() => setSellToggle(false)}
              onClick={(e) =>
                sellInterest(e, interest_id, sellamount, sellprice, amount, buyprice)
              }>
              <p>SELL</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellModal;
