import {Link} from 'react-router-dom';
import axios from 'axios';
import {useContext, useEffect} from 'react';
import {UserContext} from '../context/UserContext';
import SearchBar from '../components/SearchBar';
import {InterestsContext} from '../context/InterestsContext';

const Header = () => {

  const {setFilter} = useContext(InterestsContext);
  const {getUser, user} = useContext(UserContext);


  useEffect(() => {
    getUser();
  }, []);

  const leavePage = () => {
    setFilter('');
  }

  const logout = () => {
    axios.delete('/auth/logout').then(res => null).catch(err => console.log(err));
    getUser();
  }



  return (
    <header className='desktopheader'>
      <div className="headerlogo">
        <h1>MTGCapital</h1>
        <h3>MANAGE YOUR CARDBOARD CAPITAL</h3>
      </div>
      <div className="spacer"> </div>
      <div className="headernav">
        {user ? (<ul>
          <Link>
            <li onClick={() => leavePage()}>Profile</li>
          </Link>
          <Link to='/interests'>
            <li onClick={() => leavePage()}>Interests</li>
          </Link>
          <Link to='/search'>
            <li onClick={() => leavePage()}>Card Search</li>
          </Link>
          <Link to='/margins'>
            <li onClick={() => leavePage()}>Margins</li>
          </Link>
          <Link to='/'>
            <li onClick={()=> logout()}>Logout</li>
          </Link>
        </ul>) : null}
      </div>
    </header>
  )
}

export default Header;