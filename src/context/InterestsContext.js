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
    axios.get(`/api/interests/${user_id}`).then(res => {
      setInterests(res.data);
    }).catch(err => {
      history.push('/');
    });
  }, []);

  const searchInterests = (user_id, searchtext) => {
    
    console.log('search interests axios call');
    axios.get(`/api/interests/${user_id}/${searchtext}`)
    .then(results => {
      setMarginTotal(0);
      console.log(results.data);
      //put margin logic here
      setInterests(results.data);
    }).catch(err => console.log(err))
  }

  console.log({marginTotal});
  

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