import {createContext, useState} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchProvider = (props) => {

  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('');
  const [searchbar, setSearchbar] = useState(false);

  let location = useLocation();
  let path = location.pathname;

  const searchFunction = (searchtext) => {
      switch (path) {
        case '/search':
          axios.get(`/api/cardsearch/${searchtext}`).then(cards => {
            setResults(cards.data);
          }).catch(err => console.log(err));
          break;
        default:
          break;
      }
    }

  return (
    <SearchContext.Provider value={{
      location,
      searchFunction,
      results,
      filter,
      setFilter,
      setResults,
      searchbar,
      setSearchbar
    }}>
      {props.children}
    </SearchContext.Provider>
  )
}