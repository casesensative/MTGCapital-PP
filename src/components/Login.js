import {useState} from 'react';
import {useContext} from 'react';
import {UserContext} from '../context/UserContext';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  
  const login = async (e, email, password) => {
    e.preventDefault();
    if (email && password) {
      await loginUser(email, password);
      setEmail('');
      setPassword('');
      setPhone('');
      props.history.push('/search')
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