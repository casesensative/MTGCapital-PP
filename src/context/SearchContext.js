import {createContext, useState} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchProvider = (props) => {

  const [results, setResults] = useState(null);

  let location = useLocation();

  return (
    <SearchContext.Provider value={{
      location
    }}>
      {props.children}
    </SearchContext.Provider>
  )
}