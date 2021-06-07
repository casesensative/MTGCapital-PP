import {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useContext} from 'react';
import {SearchContext} from '../context/SearchContext';
import {UserContext} from '../context/UserContext';
import {InterestsContext} from '../context/InterestsContext';

const SearchBar = (props) => {

  const {searchFunction} = useContext(SearchContext);
  const {user, getUser} = useContext(UserContext);
  const [search, setSearch] = useState('');
  const {setInterests, searchInterests, setFilter} = useContext(InterestsContext);

  useEffect(() => {
    getUser()
  }, []);



  // props.location.pathname

  const doSearch = (e, user_id, searchinput) => {
    // let searchtext = searchinput.split(' ');
    // setFilter(searchinput);
    e.preventDefault();
    switch (props.location.pathname) {
      case '/search':
        searchFunction(searchinput);
        break;
      case '/interests':
        console.log('searching interests');
        console.log(user_id, searchinput);
        searchInterests(user_id, searchinput);
        setFilter(searchinput);
        break;
    
      default:
        alert('Search broke!');
        break;
    }
    searchFunction(searchinput);
    props.setSearchbar(null);
  }

  return (
    <div className="searchbar">
      <form onSubmit={(e) => doSearch(e, user.user_id, search)}>
        <input type="text" name="searchbar" value={search}
        onChange={(e) => setSearch(e.target.value)} autoFocus />
        <button>SEARCH</button>
      </form>
    </div>
  )
}

export default withRouter(SearchBar);


