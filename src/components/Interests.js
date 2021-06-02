import {useContext, useEffect} from 'react';
import {InterestsContext} from '../context/InterestsContext';
import { UserContext } from '../context/UserContext';
import Interest from './Interest';

const Interests = (props) => {

  const {interests, setInterests, getInterests} = useContext(InterestsContext);

  const {user, getUser} = useContext(UserContext);

  useEffect(() => {
    if (user) {
      getInterests(user.user_id);
    } 
    
  }, [user]);


  const mappedInterests = interests.map(interest => {
    console.log(interest);
    let date = interest.date_added.substring(0, 10);

    console.log(date);

    return <Interest key={interest.interest_id} 
              card_name={interest.card_name} 
              card_set={interest.card_set} 
              date_added={date} 
              isfoil={interest.isfoil} 
              amount={interest.amount} 
              buyprice={interest.buyprice} 
              price={interest.price} 
              foilprice={interest.foilprice} />
  });
  
  return (
    <section className="interestspage">
      <div className="pageheading">
        <h3>INTERESTS</h3>
      </div>
      {/* <div className="filterbar">
        <div className="filter">

        </div>
        <button>CLEAR</button>
      </div> */}
      <table className='intereststable'>
        <thead>
          <tr style={{marginRight: '12px'}}>
            {/* <th>DATE</th> */}
            <th style={{width: '30%'}}>CARD</th>
            <th>SET</th>
            <th>F</th>
            <th>AMT</th>
            <th>BUY</th>
            <th>MKT</th>
            <th>MRGN</th>
          </tr>
        </thead>
        <tbody>
         {mappedInterests}
        </tbody>
      </table>
    </section>
  )
}

export default Interests;