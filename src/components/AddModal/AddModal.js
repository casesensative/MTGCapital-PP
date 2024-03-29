import { useState, useEffect } from "react";
import { RiAddBoxLine } from "react-icons/ri";
import { RiAddBoxFill } from "react-icons/ri";

const AddModal = (props) => {
  const [addtoggle, setAddtoggle] = useState(false);
  const [amount, setAmount] = useState("");
  const [buyprice, setBuyprice] = useState("");
  const [isFoil, setFoil] = useState(false);
  const {
    modalshow,
    setModalShow,
    card_name,
    set_name,
    card_id,
    addInterestFn,
    price,
    foilprice,
  } = props;

  useEffect(() => {
    if (foilprice && !price) {
      setFoil(true);
    } else if (price && !foilprice) {
      setFoil(false);
    }
  }, [foilprice, price]);

  let modaltoggle = !modalshow ? "modal-closed" : "addmodal";

  const addInterest = (e, card_id, buyprice, amount, isfoil) => {
    e.preventDefault();
    if (card_id && buyprice && amount) {
      const buypricefixed = parseFloat(buyprice).toFixed(2);
      addInterestFn(card_id, buypricefixed, amount, isfoil);
      setAmount("");
      setBuyprice("");
      setModalShow(false);
    } else {
      alert("Must insert a buy price and amount.");
    }
  };

  return (
    <div className={modaltoggle}>
      <div className="modal" id="modal">
        <div className="close-container" onClick={() => setModalShow(false)}>
          <div className="leftright"></div>
          <div className="rightleft"></div>
        </div>
        <div className="modal-content">
          <div className="cardinfo">
            <h1>{card_name}</h1>
            <h2>{set_name}</h2>
          </div>
          <form action="submit" className='modal-add-form'>
            <div className="addcard">
              <p>Amount: </p>
              <input
                type="text"
                value={amount}
                name="card_amount"
                autoFocus
                onChange={(e) => setAmount(e.target.value)}
                style={!foilprice || !price ? { marginLeft: "0px" } : null}
              />
              <div
                className={`foilcheckbox ${
                  !foilprice || !price ? `nodisplay` : null
                }`}
              >
                <p>Foil:</p>
                <input
                  type="checkbox"
                  name="isfoil"
                  onClick={() => setFoil(!isFoil)}
                />
              </div>
              <p>Buy Price:</p>
              <input
                type="text"
                value={buyprice}
                name="buyprice"
                onChange={(e) => setBuyprice(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className="react-add"
              onMouseEnter={() => setAddtoggle(true)}
              onMouseLeave={() => setAddtoggle(false)}
              onClick={(e) => addInterest(e, card_id, buyprice, amount, isFoil)}>
              {!addtoggle ? (
                <RiAddBoxLine size={32} />
              ) : (
                <RiAddBoxFill size={32} />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
