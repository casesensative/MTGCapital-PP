

const Interest = (props) => {

  const {card_name, card_set, date_added, isfoil, amount, buyprice, price, foilprice} = props;

  let margin = 0;
  if (isfoil) {
    margin = foilprice * amount - buyprice * amount;
  } else {
    margin = price * amount - buyprice * amount;
  }

  return (
    <tr className='interestrow'>
      {/* <td>{date_added}</td> */}
      <td style={{width: '40%'}}>{card_name}</td>
      <td>{card_set}</td>
      <td>{isfoil ? 'FOIL' : null}</td>
      <td>{amount}</td>
      <td>{buyprice}</td>
      <td>{isfoil ? foilprice : price}</td>
      <td style={margin < 0 ? {color: 'red'} : {color: 'white'}}>{margin}</td>
    </tr>
  )
}

export default Interest;