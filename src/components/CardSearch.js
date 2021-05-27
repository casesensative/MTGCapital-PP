import SearchResult from '../components/SearchResult';
import {useContext} from 'react';
import {SearchContext} from '../context/SearchContext';



const CardSearch = (props) => {


  const {results} = useContext(SearchContext);

  const mappedResults = results.map(card => {
    return (
      <SearchResult key={card.card_id} name={card.card_name} 
                    set={card.card_set} card_img={card.imgurl_f} 
                    card_img_b={card.imgurl_b} foilprice={card.foilprice} 
                    price={card.price} purchase={card.purchaseurl} />
    )
  })

  return (
    <section className="cardsearch">
      <div className="pageheading">
        <h3>CARD SEARCH</h3>
      </div>
      <div className="filterbar">
        <div className="filter">
          {/* FILTERS HERE */}
        </div>
        <button>CLEAR</button>
      </div>
      <div className="results">
        {mappedResults}
      </div>
    </section>
  )
}

export default CardSearch;