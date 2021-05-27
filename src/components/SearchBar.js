import {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useContext} from 'react';
import {SearchContext} from '../context/SearchContext';

const SearchBar = (props) => {

  const {location} = useContext(SearchContext);

  console.log(location);

  const [search, setSearch] = useState('');

  return (
    <div className="searchbar">
      <input type="text" name="searchbar" value={search} 
      onChange={(e) => setSearch(e.target.value)}/>
      <button>SEARCH</button>
    </div>
  )
}

export default withRouter(SearchBar);


