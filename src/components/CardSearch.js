import SearchResult from '../components/SearchResult';
import {useContext, useEffect, useState} from 'react';
import {SearchContext} from '../context/SearchContext';
import {UserContext} from '../context/UserContext';
import axios from 'axios';



const CardSearch = (props) => {

  const {results, filter, setFilter, setResults} = useContext(SearchContext);
  // const [mresults, setMresults] = useState([]);
  
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



  // useEffect(() => {
  //   let mappedResults = results.map(card => {
  //     return (
  //       <SearchResult key={card.card_id} name={card.card_name} 
  //                     set={card.card_set} card_img={card.imgurl_f} 
  //                     card_img_b={card.imgurl_b} foilprice={card.foilprice} 
  //                     price={card.price} purchase={card.purchaseurl} />
  //     )
  //   });
  //   setMresults(mappedResults)
  // }, [results])

  // const clearFilter = (e) => {
  //   e.preventDefault();
  //   setFilter('');
  //   setMresults([]);
  // }

  return (
    <section className="cardsearch">
      <div className="pageheading">
        <h3>CARD SEARCH</h3>
      </div>
      {/* <div className="filterbar">
        <div className="filter">
          <p>{filter}</p>
        </div>
        <button onClick={(e) => clearFilter(e)}>CLEAR</button>
      </div> */}
      <div className="results">
        {mappedResults}
      </div>
    </section>
  )
}

export default CardSearch;