import {createContext, useState, useCallback} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export const InterestsContext = createContext();

export const InterestsProvider = (props) => {

  const [interests, setInterests] = useState([]);
  const [marginTotal, setMarginTotal] = useState(0);
  const [filter, setFilter] = useState('');
  const history = useHistory();

  const getInterests = useCallback ((user_id) => {
    axios.get(`/api/interests/${user_id}`).then(results => {
      //put margin logic here
      setMarginTotal(parseFloat(results.data.map(interest => {
        if (interest.isfoil) {
          return +parseFloat(interest.foilprice * interest.amount - 
            interest.buyprice * interest.amount).toFixed(2);

        } else {
          return +parseFloat(interest.price * interest.amount 
            - interest.buyprice * interest.amount).toFixed(2);
        };
      }).reduce((a, c) => {
        return a + c;
      }, 0)).toFixed(2));
      //end logic
      setInterests(results.data);
    }).catch(err => {
      history.push('/');
    });
  }, []);

  const searchInterests = (user_id, searchtext) => {
    axios.get(`/api/interests/${user_id}/${searchtext}`)
    .then(results => {
      //put margin logic here
      setMarginTotal(parseFloat(results.data.map(interest => {
        if (interest.isfoil) {
          return +parseFloat(interest.foilprice * interest.amount - 
            interest.buyprice * interest.amount).toFixed(2);

        } else {
          return +parseFloat(interest.price * interest.amount 
            - interest.buyprice * interest.amount).toFixed(2);
        };
      }).reduce((a, c) => {
        return a + c;
      }, 0)).toFixed(2));
      //end logic
      setInterests(results.data);
    }).catch(err => console.log(err))
  }




  return (
    <InterestsContext.Provider value={{
      interests,
      setInterests,
      getInterests,
      searchInterests,
      filter,
      setFilter,
      marginTotal,
      setMarginTotal
    }}>
    {props.children}
    </InterestsContext.Provider>
  )



}