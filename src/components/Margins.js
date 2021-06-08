import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {UserContext} from '../context/UserContext';
import Margin from '../components/Margin';


const Margins = () => {
  
  const {user} = useContext(UserContext);
  const [sellHistory, setSellHistory] = useState([]);
  const [marginsTotal, setMarginsTotal] = useState(0);

  useEffect(() => {
    if (user) {
      axios.get(`/api/margins/${user.user_id}`).then(results => {
        setSellHistory(results.data);
        setMarginsTotal(results.data.map(margin => {
          return +margin.margin
        }).reduce((a, c) => {
          return a + c;
        }));
        console.log(results.data)
      }).catch(err => console.log(err))
    }
  }, [])

  const mappedMargins = sellHistory.map(margin => {
    let dateArr = margin.sold_date.substring(0, 10).split("-");
    const year = dateArr.shift();
    dateArr.push(year);
    const newDate = dateArr.join('-');
    return <Margin key={margin.margin_id} card_name={margin.card_name} 
                    card_set={margin.card_set} 
                    isfoil={margin.isfoil} 
                    sold_date={newDate} 
                    sold_amount={margin.sold_amount} 
                    sold_price={parseFloat(margin.sold_price).toFixed(2)} 
                    margin={margin.margin} />
  })

  
  return (
    <section className="interestspage">
      <div className="pageheading">
        <h3>MARGINS</h3>
      </div>
      {/* <div className="filterbar">
        <div className="filter">
          <p>FILTER: </p><p>{filter}</p>
        </div>
        <button onClick={(e) => clearFilter(e)}>CLEAR</button>
      </div> */}
      <table className='intereststable' id='intereststable'>
        <thead>
          <tr style={{marginRight: '12px'}}>
            <th style={{width: '30%'}}>CARD</th>
            <th>SET</th>
            <th>F</th>
            <th>AMT</th>
            <th>PRICE</th>
            <th>DATE</th>
            <th>MRGN</th>
            <th></th>
          </tr>
        </thead>
        <tbody id='interestsbody'>
         {mappedMargins}
        </tbody>
        <tfoot>
          <tr className='interestsfooter'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{marginsTotal}</td>
          </tr> 
        </tfoot>

      </table>
    </section>
  )
}

export default Margins;