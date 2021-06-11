import {useEffect, useState, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import {SearchContext} from '../context/SearchContext';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const {registerUser, loginUser} = useContext(UserContext);
  const {setSearchbar} = useContext(SearchContext);
  let location = useLocation();

  useEffect(() => {
    setSearchbar(false);
  }, [setSearchbar]);
 

  const register = (e, email, password) => {
    e.preventDefault();
    if (email && password) {
      registerUser(email, password);
      setEmail('');
      setPassword('');
      setPhone('');
    } else {
      return alert('You must enter an email address and password.')
    }
  }
  
  const login = async (e, email, password) => {
    e.preventDefault();
    if (email && password) {
      await loginUser(email, password);
    } else {
      return alert('You must enter an email address and password.');
    }
    if (location.pathname='/') {
      setEmail('');
      setPassword('');
      setPhone('');
    }
  }



  return (
    <section className="loginpage">
      <form action="submit" className='loginform'>
        <div className="loginputs">
          <input type='text' name='email'
          value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email address'/>
          <input type='password' name='password'
          value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'/>
        </div>
        <div className="logbuttons">
          <button type='submit' name='login' onClick={(e) => login(e, email, password)}>LOGIN</button>
          <button type='submit' name='register' onClick={(e) => register(e, email, password)}>REGISTER</button>
        </div>
      </form>
    </section>
  )
}

export default Login;