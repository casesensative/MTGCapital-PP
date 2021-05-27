import SearchResult from '../components/SearchResult';



const CardSearch = (props) => {
  // console.log(props);

  return (
    <section className="cardsearch">
      <div className="pageheading">
        <h3>INTERESTS</h3>
      </div>
      <div className="filterbar">
        <div className="filter">
          {/* FILTERS HERE */}
        </div>
        <button>CLEAR</button>
      </div>
      <div className="results">
        <SearchResult />
      </div>
    </section>
  )
}

export default CardSearch;