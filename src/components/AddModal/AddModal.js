import {useState} from 'react';
import {RiAddBoxLine} from 'react-icons/ri';
import {RiAddBoxFill} from 'react-icons/ri';

const AddModal = (props) => {

  const [addtoggle, setAddtoggle] = useState(false);
  const [amount, setAmount] = useState('');
  const [buyprice, setBuyprice] = useState('');
  const {modalshow, setModalShow, 
  card_name, set_name, card_id, addInterestFn} = props;



  let modaltoggle = !modalshow ? 'modal-closed' : 'addmodal';

  return (
  <div class={modaltoggle}>
    <div class="modal" id="modal">
      <div class="close-container" onClick={() => setModalShow(false)}>
        <div class="leftright"></div>
        <div class="rightleft"></div>
      </div>
        <div class="modal-content">

          <div className='cardinfo'>
            <h1>{card_name}</h1>
            <h2>{set_name}</h2>
          </div>
          <div className="addcard">
            <p>Amount: </p><input type='text' value={amount}  name='card_amount' 
            autofocus onChange={(e) => setAmount(e.target.value)} />
            <p>Buy Price:</p><input type='text' value={buyprice}  name='buyprice' onChange={(e) => setBuyprice(e.target.value)} />
          </div>
          {/* <button className='add-button' onClick={() => addInterestFn(card_id, buyprice, amount)}>ADD</button> */}
          
          <div className="react-add" onMouseEnter={() => setAddtoggle(true)} onMouseLeave={() => setAddtoggle(false)} onClick={() => addInterestFn(card_id, buyprice, amount)}>
            {!addtoggle ? <RiAddBoxLine size={36} /> : <RiAddBoxFill size={36}/> }
          </div>
    
        </div>
      </div>
  </div>
  )
}

export default AddModal;