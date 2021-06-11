import {useContext, useEffect, useState} from 'react';
import {InterestsContext} from '../context/InterestsContext';
import { UserContext } from '../context/UserContext';
import Interest from './Interest';
import {useMediaQuery} from 'react-responsive';

const Interests = (props) => {

  const {interests, setInterests, getInterests, filter, setFilter, marginTotal, setMarginTotal, searchInterests} = useContext(InterestsContext);

  const [searchinput, setSearchInput] = useState('');

  const {user, getUser} = useContext(UserContext);

  // const [marginTotal, setMarginTotal] = useState(0);





  useEffect(() => {
    if (user) {
      getInterests(user.user_id);
    }
  }, [user]);

  const clearFilter = (e) => {
    e.preventDefault();
    setFilter('');
    getInterests(user.user_id);
  }


  const mappedInterests = interests.map(interest => {
    let date = interest.date_added.substring(0, 10);
    if (interest.amount > 0) {
    return <Interest key={interest.interest_id} 
              interest_id={interest.interest_id}
              card_name={interest.card_name} 
              card_set={interest.card_set} 
              date_added={interest.date_added} 
              isfoil={interest.isfoil} 
              amount={interest.amount} 
              buyprice={interest.buyprice} 
              price={interest.price} 
              foilprice={interest.foilprice} 
              img_front={interest.imgurl_f} 
              purchaseurl={interest.purchaseurl} 
              interest_id={interest.interest_id} />
    }
  });

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })

  const intSearch = (e, searchinput) => {
    e.preventDefault();
    searchInterests(user.user_id, searchinput);
    setFilter(searchinput);
  }

  
  return (
    <section className="interestspage">
      <div className="pageheading">
        <h3>INTERESTS</h3>
      </div>
      {isDesktop ? (
        <form type='submit' className="desktopsearchbar" onSubmit={(e) => intSearch(e, searchinput)}>
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
      <div className="tableWrapper">
        <table className='intereststable' id='intereststable'>
          <thead>
            <tr style={{marginRight: '12px'}}>
              <th style={{width: '30%'}}>CARD</th>
              <th>SET</th>
              <th>F</th>
              <th>AMT</th>
              <th>BUY</th>
              <th>MKT</th>
              <th>MRGN</th>
              <th></th>
            </tr>
          </thead>
          <tbody id='interestsbody'>
           {mappedInterests}
          </tbody>
          <tfoot>
            <tr className='interestsfooter'>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{marginTotal}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}

export default Interests;
