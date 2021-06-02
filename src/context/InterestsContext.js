import {createContext, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export const InterestsContext = createContext();

export const InterestsProvider = (props) => {

  const [interests, setInterests] = useState([]);
  const history = useHistory();

  const getInterests = (user_id) => {
    axios.get(`/api/interests/${user_id}`).then(res => {
      setInterests(res.data);
    }).catch(err => {
      history.push('/');
    });
  }

  

  return (
    <InterestsContext.Provider value={{
      interests,
      setInterests,
      getInterests
    }}>
    {props.children}
    </InterestsContext.Provider>
  )



}