import {createContext, useState} from 'react';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchProvider = (props) => {

  const [results, setResults] = useState(null);

  const 



  return (
    <SearchContext.Provider value={{

    }}>
      {props.children}
    </SearchContext.Provider>
  )
}