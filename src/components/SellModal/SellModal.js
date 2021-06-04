import {useState} from 'react';
import axios from 'axios';



const SellModal = (props) => {

  

  const {card_name, card_set, amount, buyprice, isfoil, modalshow, setModalShow, interest_id} = props;
  const [sellamount, setSellAmount] = useState(null);
  const [sellprice, setSellPrice] = useState(null);
  const [selltoggle, setSellToggle] = useState(false);

  let modaltoggle = !modalshow ? 'modal-closed' : 'addmodal';

  const sellInterest = (interest_id, sellamount, sellprice, amount, buyprice) => {

    if (sellamount <= amount) {
        const mathMargin = sellprice * sellamount - buyprice * amount;
        const margin = mathMargin.toFixed(2);  
        if (interest_id, sellamount, sellprice, margin) {
        axios.post('/api/interests/sell', {interest_id, sellamount, sellprice, margin}).then(res => {
          console.log(res)
        }).catch(err => console.log(err));
        setModalShow(false);
      }
    } else {
      alert(`You don't have that many to sell! Adjust amount and try again.`);
    }
  }

  return (
    <div className={modaltoggle}>
      <div className="modal" id="modal">
      <button className='delete-interest'>DELETE INTEREST</button>
        <div className="close-container" onClick={() => setModalShow(false)}>

          <div className="leftright"></div>
          <div className="rightleft"></div>
        </div>
          <div className="modal-content" style={{height: '70%'}}>
            <div className='cardinfo'>
              <h1>{card_name}</h1>
              <h2>{card_set}</h2>
              <p>{isfoil ? 'Foil' : null}</p>
            </div>
            <div className="addcard" style={{height: '40%'}}>
              <p>Amount: </p><input type='text' 
                                    value={sellamount}  
                                    name='card_amount' 
                                    autoFocus 
                                    onChange={(e) => setSellAmount(e.target.value)} 
                                    style={{marginLeft: '0px'}}/>

              <p className='sellinput'>Sell Price:</p><input type='text' 
              value={sellprice}  
              name='sellprice' style={{width: '60px'}} 
              onChange={(e) => setSellPrice(e.target.value)} />
              

              
            </div>
  
            <div className="sellinterest" onMouseEnter={() => setSellToggle(true)} onMouseLeave={() => setSellToggle(false)} onClick={() => sellInterest(interest_id, sellamount, sellprice, amount, buyprice)}>
              {/* {!selltoggle ? <RiAddBoxLine size={32} /> : <RiAddBoxFill size={32}/> } */}
              <p>SELL</p>
            </div>
  
          </div>
      </div>
    </div>
    )
}

export default SellModal;