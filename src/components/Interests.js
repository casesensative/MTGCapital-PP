import {useContext, useEffect, useState} from 'react';
import {InterestsContext} from '../context/InterestsContext';
import { UserContext } from '../context/UserContext';
import Interest from './Interest';

const Interests = (props) => {

  const {interests, setInterests, getInterests, filter, setFilter, marginTotal, setMarginTotal} = useContext(InterestsContext);

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

 

  // const marginAdd = () => {
  //   const table = document.getElementById('interestsbody');
  //   // console.log(table);
  //   let sum = 0;

  //   for (let i = 0; i < table.rows.length; i++) {
  //     // console.log(table.rows[i].cells[6].innerText);
  //     sum = sum + +table.rows[i].cells[6].innerText;
  //   }
  //   return sum.toFixed(2);

  // }

  // useEffect(() => {
  //   setMarginTotal(marginAdd());
  // }, [interests]);


  
  return (
    <section className="interestspage">
      <div className="pageheading">
        <h3>INTERESTS</h3>
      </div>
      <div className="filterbar">
        <div className="filter">
          <p>FILTER: </p><p>{filter}</p>
        </div>
        <button onClick={(e) => clearFilter(e)}>CLEAR</button>
      </div>
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
    </section>
  )
}

export default Interests;
