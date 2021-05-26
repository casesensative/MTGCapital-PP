import {createContext, useState} from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = (props) => {

  const [user, setUser] = useState(null);

  const registerUser = (email, password) => {
    axios.post('/auth/register', {email, password})
    .then(user => {
      setUser(user.data);
      //PUSH TO INTERESTS
    }).catch(err => alert(err.response.data));
  }

  const loginUser = (email, password) => {
    axios.post('/auth/login', {email, password})
    .then(user => {
      setUser(user.data);
      console.log(user.data);
    }).catch(err => console.log(err));
  }

    return (  
    <UserContext.Provider value={{
        user,
        setUser,
        registerUser,
        loginUser
      }}>
        {props.children}
      </UserContext.Provider>
  )
}
