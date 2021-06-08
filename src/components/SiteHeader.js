import {useState, useContext, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import {UserContext} from '../context/UserContext';
import {SearchContext} from '../context/SearchContext';
import {withRouter, Link, useLocation} from 'react-router-dom';
import axios from 'axios';


const SiteHeader = (props) => {

  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const {user, setUser, getUser} = useContext(UserContext);
  const {searchbar, setSearchbar} = useContext(SearchContext);

  useEffect(() => {
    getUser();
    // axios.get('/auth/getuser').then(user => {
    //   if (!user) {
    //     props.history.push('/');
    //     alert('Please login.');
    //     setSearchbar(false);
    //   } else {
    //     setUser(user);
    //   } 
    // }).catch(err => {
    //   props.history.push('/');
    //   setSearchbar(false);
    // })
  }, []);

 useEffect(() => {
   if (location.pathname === '/') {
     setUser(null);
   }
 }, [location]);






 const openMenu = () => {
  setMenu(!menu);
  setSearchbar(false);
 }


  return (
    <header>
      {searchbar ? <SearchBar setSearchbar={setSearchbar} /> : null}
      <div className="siteheader">
        {user ? (<div className="hamburger-container" onClick={() => openMenu()}>
          <div className="topbun"></div>
          <div className="burger"></div>
          <div className="botbun"></div>
        </div>) : null}
        <h1>MTGCapital</h1>
        {user ? (<div className="searchicon" onClick={() => setSearchbar(!searchbar)}>
          <div className="searchicon1"></div>
          <div className="searchicon2"></div>
        </div>) : null}
      </div>
      <div className="line"></div>
      <div className={`dropdown-menu ${menu ? 'dropdown-menu-active' : ''}`} >
        <ul>
          <Link>
            <li onClick={() => setMenu(false)}>Profile</li>
          </Link>
          <Link to='/interests'>
            <li onClick={() => setMenu(false)}>Interests</li>
          </Link>
          <Link to='/search'>
            <li onClick={() => setMenu(false)}>Card Search</li>
          </Link>
          <Link to='/margins'>
            <li onClick={() => setMenu(false)}>Margins</li>
          </Link>
        </ul>
      </div>
    </header>


  )
}

export default withRouter(SiteHeader);