


const Margin = (props) => {

  const {card_name, card_set, isfoil, sold_date, sold_amount, sold_price, margin} = props;

  return (
    <tr className='interestrow'>
      {/* <td>{date_added}</td> */}
      <td style={{width: '40%'}}>{card_name}</td>
      <td>{card_set}</td>
      <td>{isfoil ? 'FOIL' : null}</td>
      <td>{sold_amount}</td>
      <td>{sold_price}</td>
      <td>{sold_date}</td>
      <td id='margin' style={margin < 0 ? {color: 'red'} : {color: 'white'}}>{margin}</td>
      {/* <td><div className="sellbutton" 
      onMouseEnter={() => setSellButton(true)} 
      onMouseLeave={() => setSellButton(false)} 
      onClick={() => setModalShow(true)} >
      {!sellbutton ? <AiOutlineMinusSquare size={12} /> : 
      <AiFillMinusSquare size={12} />}</div></td>
      <SellModal modalshow={modalshow} setModalShow={setModalShow} 
      card_name={card_name} card_set={card_set} amount={amount} buyprice={buyprice} 
      isfoil={isfoil} interest_id={interest_id} margin={margin}/> */}
    </tr>
  )
}


export default Margin;