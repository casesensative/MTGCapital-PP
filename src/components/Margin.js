import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {Popover} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const Margin = (props) => {

  const {card_name, card_set, isfoil, sold_date, sold_amount, sold_price, margin, card_img, purchase} = props;
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

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
        <img style={{width: '300px'}} src={card_img} alt='card'/>
      </Popover>
          <a href={purchase} target='_blank' rel="noreferrer" aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>{card_name}</a>
          </td>
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