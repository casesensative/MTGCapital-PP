import {Popover} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useState, useEffect} from 'react';
import {AiOutlineMinusSquare, AiFillMinusSquare} from 'react-icons/ai';
import SellModal from './SellModal/SellModal';


const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const Interest = (props) => {

  const {card_name, card_set, isfoil, amount, buyprice, price, foilprice, img_front, purchaseurl, interest_id} = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [sellbutton, setSellButton] = useState(false);
  const [modalshow, setModalShow] = useState(false);
  const [margin, setMargin] = useState('');

  useEffect(() => {
    if (isfoil) {
      const margin = parseFloat(foilprice * amount - buyprice * amount).toFixed(2);
      setMargin(margin);
      // setMarginTotal((marginTotal) => marginTotal + +margin);
    } else {
      const margin = parseFloat(price * amount - buyprice * amount).toFixed(2);
      setMargin(margin);
      // setMarginTotal((marginTotal) => marginTotal + +margin);
    };
  }, []);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

 




  return (
    <tr className='interestrow'>
      {/* <td>{date_added}</td> */}
      <td style={{width: '40%'}}>
                <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <img style={{width: '300px'}} src={img_front} alt='card'/>
      </Popover>
          <a href={purchaseurl} target='_blank' rel="noreferrer" aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>{card_name}</a>
          </td>
      <td>{card_set}</td>
      <td>{isfoil ? 'FOIL' : null}</td>
      <td>{amount}</td>
      <td>{buyprice}</td>
      <td>{isfoil ? foilprice : price}</td>
      <td id='margin' style={margin < 0 ? {color: 'red'} : {color: 'white'}}>{margin}</td>
      <td><div className="sellbutton" 
      onMouseEnter={() => setSellButton(true)} 
      onMouseLeave={() => setSellButton(false)} 
      onClick={() => setModalShow(true)} >
      {!sellbutton ? <AiOutlineMinusSquare size={12} /> : 
      <AiFillMinusSquare size={12} />}</div></td>
      <SellModal modalshow={modalshow} setModalShow={setModalShow} 
      card_name={card_name} card_set={card_set} amount={amount} buyprice={buyprice} 
      isfoil={isfoil} interest_id={interest_id} margin={margin}/>
    </tr>
  )
}

export default Interest;