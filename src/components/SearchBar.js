import {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useContext} from 'react';
import {SearchContext} from '../context/SearchContext';
import {axios} from 'axios';

const SearchBar = (props) => {

  const {location, searchFunction} = useContext(SearchContext);

  console.log(location);

  const [search, setSearch] = useState('');

  return (
    <div className="searchbar">
      <input type="text" name="searchbar" value={search} 
      onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={() => searchFunction(search)}>SEARCH</button>
    </div>
  )
}

export default withRouter(SearchBar);


