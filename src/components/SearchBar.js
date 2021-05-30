import {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useContext} from 'react';
import {SearchContext} from '../context/SearchContext';
import {UserContext} from '../context/UserContext';
import {axios} from 'axios';

const SearchBar = (props) => {

  const {searchFunction, setFilter} = useContext(SearchContext);
  const {user} = useContext(UserContext);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!user) {
      props.history.push('/');
      alert('Please log in.');
    } else {
      console.log(user);
    }
  }, [])

  const cardSearch = (searchinput) => {
    console.log(typeof(searchinput));
    let searchtext = searchinput.split(' ');
    console.log(searchtext);
    setFilter(searchinput);
    searchFunction(searchinput);
    props.setSearchbar(null);
  }

  return (
    <div className="searchbar">
      <form onSubmit={() => cardSearch(search)}>
        <input type="text" name="searchbar" value={search}
        onChange={(e) => setSearch(e.target.value)} autoFocus />
        <button>SEARCH</button>
      </form>
    </div>
  )
}

export default withRouter(SearchBar);


