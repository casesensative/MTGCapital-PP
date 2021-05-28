import {useState} from 'react';

const SearchResult = (props) => {

  const [imgswitch, setImgswitch] = useState(false);

  return (
    <div className="searchresult">
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
      {/* <button>{props.card_img_b ? 'flip' : null}</button> */}
      {props.card_img_b ? <button onClick={() => setImgswitch(!imgswitch)}>FLIP</button> : null}
      <div className="addbar">
        <p>ADD</p>
      </div>
    </div>
  )
}

export default SearchResult;