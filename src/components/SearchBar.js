import {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useContext} from 'react';
import {SearchContext} from '../context/SearchContext';
import {axios} from 'axios';

const SearchBar = (props) => {

  const {location, searchFunction, setFilter} = useContext(SearchContext);

  console.log(location);

  const [search, setSearch] = useState('');

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


