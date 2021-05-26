import {useState} from 'react';
import {useContext} from 'react';
import {UserContext} from '../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState('');

  const {registerUser, loginUser} = useContext(UserContext);
 

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
  
  const login = (e, email, password) => {
    e.preventDefault();
    if (email && password) {
      loginUser(email, password);
      setEmail('');
      setPassword('');
      setPhone('');
    } else {
      return alert('You must enter an email address and password.')
    }
  }

  return (
    <section className="loginpage">
      <form action="submit" className='loginform'>
        <input type='text' name='email' 
        value={email} onChange={(e) => setEmail(e.target.value)} 
        placeholder='Enter your email address'/>
        <input type='text' name='password' 
        value={password} onChange={(e) => setPassword(e.target.value)} 
        placeholder='Enter your password'/>
        <button type='submit' name='login' onClick={(e) => login(e, email, password)}>LOGIN</button>
        <button type='submit' name='register' onClick={(e) => register(e, email, password)}>REGISTER</button>
      </form>
    </section>
  )
}

export default Login;