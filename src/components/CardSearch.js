import SearchResult from '../components/SearchResult';
import {useContext, useEffect, useState} from 'react';
import {SearchContext} from '../context/SearchContext';
import {UserContext} from '../context/UserContext';
import {useMediaQuery} from 'react-responsive';




const CardSearch = (props) => {

  const {results, filter, setFilter, setResults, searchFunction} = useContext(SearchContext);
  const [searchinput, setSearchInput] = useState('');
  
  let mappedResults = results.map(card => {
    return (
      <SearchResult key={card.card_id} 
                    card_id={card.card_id} 
                    name={card.card_name} 
                    set={card.card_set} card_img={card.imgurl_f} 
                    card_img_b={card.imgurl_b} foilprice={card.foilprice} 
                    price={card.price} purchase={card.purchaseurl} />
    )
  });

  useEffect(() => {
    setResults([]);
  }, []);

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)'
  });

  const cardSearch = (e, searchinput) => {
    e.preventDefault();
    searchFunction(searchinput);
    setFilter(searchinput);

  };

  const clearFilter = (e) => {
    e.preventDefault();
    setSearchInput('');
    setFilter('');
    setResults([]);
  }




  return (
    <section className="cardsearch">
      <div className="pageheading">
        <h3>CARD SEARCH</h3>
      </div>
      {isDesktop ? (
        <form type='submit' className="desktopsearchbar" onSubmit={(e) => cardSearch(e, searchinput)}>
          <input type='text' value={searchinput}
        onChange={(e) => setSearchInput(e.target.value)}></input>
          <button>SEARCH</button>
          <button onClick={(e) => clearFilter(e)}>RESET</button>
        </form>): null}
      <div className="results">
        {mappedResults}
      </div>
    </section>
  )
}

export default CardSearch;