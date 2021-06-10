import {useEffect, useContext, useState} from 'react';
import {UserContext} from '../context/UserContext';
import {MarginsContext} from '../context/MarginsContext';
import Margin from '../components/Margin';
import LineChart from './LineChart';
import {InterestsContext} from '../context/InterestsContext';
import {useMediaQuery} from 'react-responsive';


const Margins = () => {
  
  const {user} = useContext(UserContext);
  const {sellHistory, marginsTotal, getMargins, years, setYear, 
          searched, setSearched, searchMargins} = useContext(MarginsContext);
  const [selectedyear, setSelectedyear] = useState(null);
  const {setFilter, filter} = useContext(InterestsContext);
  const [searchinput, setSearchInput] = useState('');

  useEffect(() => {
    if (user) {
      getMargins(selectedyear);
    }
  }, [user, selectedyear])

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })


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

  const clearFilter = (e) => {
    e.preventDefault();
    setFilter('');
    getMargins();
    setSearched(false);
  }

  const sMargins = (e, searchinput) => {
    e.preventDefault();
    setFilter(searchinput);
    searchMargins(searchinput);
    setSearchInput('');
  }
  
  return (
    <section className="marginspage">
      <div className="pageheading">
        <h3>MARGINS</h3>
      </div>
      {isDesktop ? (
        <form type='submit' className="desktopsearchbar" onSubmit={(e) => sMargins(e, searchinput)}>
          <input type='text' value={searchinput}
        onChange={(e) => setSearchInput(e.target.value)}></input>
          <button>SEARCH</button>
          <button onClick={(e) => clearFilter(e)}>RESET</button>
        </form>): null}
      {!isDesktop ? (<div className="filterbar">
        <div className="filter">
          <p>{filter}</p>
        </div>
        <button onClick={(e) => clearFilter(e)}>CLEAR</button>
      </div>) : null}
      
      {!searched ? ( <div className='yeardropdown' style={{marginTop: '10px'}}>
        <select onChange={(e) => setSelectedyear(e.target.value)}>
          {yearDropDown}
        </select>
      </div>) : null}
      {!searched ? <LineChart /> : null}
      <div className="tableWrapper">
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
      </div>
    </section>
  )
}

export default Margins;