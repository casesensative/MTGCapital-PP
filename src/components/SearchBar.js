import {useState} from 'react';

const SearchBar = () => {

  const [search, setSearch] = useState('');

  return (
    <div className="searchbar">
      <input type="text" name="searchbar" value={search} 
      onChange={(e) => setSearch(e.target.value)}/>
      <button>SEARCH</button>
    </div>
  )
}

export default SearchBar;