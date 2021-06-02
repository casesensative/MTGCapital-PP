import {createContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';



export const UserContext = createContext();

export const UserProvider = (props) => {

  const history = useHistory();

  const [user, setUser] = useState(null);

  const registerUser = (email, password) => {
    axios.post('/auth/register', {email, password})
    .then(user => {
      setUser(user.data);
      history.push('/search');
    }).catch(err => alert(err.response.data));
  }

  const loginUser = async (email, password) => {
    await axios.post('/auth/login', {email, password})
    .then(user => {
      setUser(user.data);
      console.log(user.data);
    }).catch(err => console.log(err));
  }

  const getUser = async () => {
    await axios.get('/auth/getuser').then(user => {
      setUser(user.data);
    }).catch(err => {
      history.push('/');
      setUser(null);
    })
  }
  
    return (  
    <UserContext.Provider value={{
        user,
        setUser,
        registerUser,
        loginUser,
        getUser
      }}>
        {props.children}
      </UserContext.Provider>
  )
}
