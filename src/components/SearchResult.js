

const SearchResult = (props) => {


  return (
    <div className="searchresult">
      <div className="resultcontainer">
        <table style={{border: 'none'}}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{props.name}</td>
            </tr>
            <tr>
              <td>Set:</td>
              <td>{props.set}</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>{props.price}</td>
            </tr>
            <tr>
              <td>FPrice:</td>
              <td>{props.foilprice}</td>
            </tr>
          </tbody>
        </table>
        <img src={props.card_img} />
      </div>
      <div className="addbar">
        <p>ADD</p>
      </div>
    </div>
  )
}

export default SearchResult;