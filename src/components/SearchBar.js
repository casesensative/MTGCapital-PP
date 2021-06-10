import {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useContext} from 'react';
import {SearchContext} from '../context/SearchContext';
import {UserContext} from '../context/UserContext';
import {InterestsContext} from '../context/InterestsContext';
import {MarginsContext} from '../context/MarginsContext';

const SearchBar = (props) => {

  const {searchFunction} = useContext(SearchContext);
  const {user, getUser} = useContext(UserContext);
  const [search, setSearch] = useState('');
  const {setInterests, searchInterests, setFilter} = useContext(InterestsContext);
  const {setSearchedMargins, searchMargins} = useContext(MarginsContext);

  useEffect(() => {
    getUser()
  }, []);



  // props.location.pathname

  const doSearch = (e, user_id, searchinput) => {
    e.preventDefault();
    switch (props.location.pathname) {
      case '/search':
        searchFunction(searchinput);
        break;
      case '/interests':
        searchInterests(user_id, searchinput);
        setFilter(searchinput);
        break;
      case '/margins':
        searchMargins(searchinput);
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


