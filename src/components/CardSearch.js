import SearchResult from '../components/SearchResult';
import DesktopSearchResult from '../components/DesktopSearchResult';
import {useContext, useEffect, useState} from 'react';
import {SearchContext} from '../context/SearchContext';
import {UserContext} from '../context/UserContext';
import {useMediaQuery} from 'react-responsive';





const CardSearch = (props) => {

  const {results, filter, setFilter, setResults, searchFunction} = useContext(SearchContext);
  const [searchinput, setSearchInput] = useState('');
  
  let mobileresults = results.map(card => {
    return (
      <SearchResult key={card.card_id} 
                    card_id={card.card_id} 
                    name={card.card_name} 
                    set={card.card_set} card_img={card.imgurl_f} 
                    card_img_b={card.imgurl_b} foilprice={card.foilprice} 
                    price={card.price} purchase={card.purchaseurl} />
    )
  });

  let desktopresults = results.map(card => {
    return (
      <DesktopSearchResult key={card.card_id} 
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

  // const mapMobileResults = () => {
  //   mobileresults = results.map(card => {
  //     return (
  //       <SearchResult key={card.card_id} 
  //                     card_id={card.card_id} 
  //                     name={card.card_name} 
  //                     set={card.card_set} card_img={card.imgurl_f} 
  //                     card_img_b={card.imgurl_b} foilprice={card.foilprice} 
  //                     price={card.price} purchase={card.purchaseurl} />
  //     )
  //   });
  // }

  // const mapDesktopResults = () => {
  //   desktopresults = results.map(card => {
  //     return (
  //       <DesktopSearchResult key={card.card_id} 
  //                     card_id={card.card_id} 
  //                     name={card.card_name} 
  //                     set={card.card_set} card_img={card.imgurl_f} 
  //                     card_img_b={card.imgurl_b} foilprice={card.foilprice} 
  //                     price={card.price} purchase={card.purchaseurl} />
  //     )
  //   });
  // }

  const cardSearch = (e, searchinput) => {
    console.log('hitting card search');
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
      {!isDesktop ? (<div className="results">
        {mobileresults}
      </div>) : null}
      {isDesktop ? (
        <div className="tableWrapper">
        <table className='intereststable' id='intereststable'>
          <thead>
            <tr style={{marginRight: '12px'}}>
              <th style={{width: '30%'}}>CARD</th>
              <th>SET</th>
              <th>PRICE</th>
              <th>FOIL PRICE</th>
              <th></th>
              </tr>
          </thead>
          <tbody id='interestsbody'>
            {desktopresults}
          </tbody>
        </table>
        </div>
      ) : null}
    </section>
  )
}

export default CardSearch;