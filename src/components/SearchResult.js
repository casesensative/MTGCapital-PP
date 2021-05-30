import {useState} from 'react';
import axios from 'axios';
import AddModal from '../components/AddModal/AddModal';

const SearchResult = (props) => {

  const [imgswitch, setImgswitch] = useState(false);

  const [modalshow, setModalShow] = useState(false);

  const addInterest = (card_id, buyprice, amount) => {
    axios.post('/api/interest', {card_id, buyprice, amount}).then(res => {
      alert(res);
    }).catch(err => alert(err));
  }

  return (
    <div className='searchresult' style={props.card_img_b && {marginBottom: '46px'}}>
      <div className="resultcontainer">
        <table style={{border: 'none', tableLayout: 'fixed', width: '90%'}}>
          <tbody>
            <tr>
              <td style={{width: '40px'}}>Name:</td>
              <td>{props.name}</td>
            </tr>
            <tr>
              <td>Set:</td>
              <td>{props.set}</td>
            </tr>
            <tr>
              <td>{props.price ? 'Price:' : null}</td>
              <td>{props.price}</td>
            </tr>
            <tr>
              <td>{props.foilprice ? 'FPrice:' : null}</td>
              <td>{props.foilprice}</td>
            </tr>
          </tbody>
        </table>
        <img src={!imgswitch ? props.card_img : props.card_img_b ? props.card_img_b : props.card_img} 
        onMouseEnter={() => setImgswitch(true)} 
        onMouseLeave={() => setImgswitch(false)} 
        />
      </div>
      {props.card_img_b ? <button onClick={() => setImgswitch(!imgswitch)}>FLIP</button> : null}
      <div className="addbar">
        <button onClick={() => setModalShow(true)}>ADD</button>
      </div>
      <AddModal modalshow={modalshow} setModalShow={setModalShow} 
      card_id={props.key} 
      addInterestFn={addInterest} 
      card_name={props.name} 
      set_name={props.set} />
    </div>
  )
}

export default SearchResult;