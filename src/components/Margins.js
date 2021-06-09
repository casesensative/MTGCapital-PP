import {useEffect, useContext, useState} from 'react';
import {UserContext} from '../context/UserContext';
import {MarginsContext} from '../context/MarginsContext';
import Margin from '../components/Margin';
import LineChart from './LineChart';


const Margins = () => {
  
  const {user} = useContext(UserContext);
  const {sellHistory, marginsTotal, getMargins, years, setYear} = useContext(MarginsContext);
  const [selectedyear, setSelectedyear] = useState(null);

  useEffect(() => {
    if (user) {
      getMargins(selectedyear);
    }
  }, [user, selectedyear])


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

  const yearDropDown = years.map(y => {
    return (
      <option key={y} value={y}>{y}</option>
    )
  })


  
  return (
    <section className="marginspage">
      <div className="pageheading">
        <h3>MARGINS</h3>
      </div>
      <div className='yeardropdown'>
        <select onChange={(e) => setSelectedyear(e.target.value)}>
          {yearDropDown}
        </select>
      </div>
      <LineChart />
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