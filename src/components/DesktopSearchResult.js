import {Popover} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {AiOutlinePlusSquare, AiFillPlusSquare} from 'react-icons/ai';
import {useState} from 'react';
import axios from 'axios';
import AddModal from '../components/AddModal/AddModal';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const DesktopSearchResult = (props) => {

  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [addButton, setAddButton] = useState(false);
  const [modalshow, setModalShow] = useState(false);
  const [rowStyle, setRowStyle] = useState({});
  const {name, set, card_img, price, foilprice, purchase} = props;

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const addInterest = (card_id, buypricefixed, amount, isfoil) => {
    axios.post('/api/interest', {card_id, buypricefixed, amount, isfoil}).then(res => {
      alert(res.data);
    }).catch(err => {
      history.push('/');
      alert('Not logged in. Please login to add cards.');
    });
  }



 




  return (
    <tr className='interestrow'>
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
        onMouseLeave={handlePopoverClose}>{name}</a>
          </td>
      <td>{set}</td>
      <td>{price ? price : null}</td>
      <td>{foilprice ? foilprice : null}</td>
      <td><div className="addbutton" 
      onMouseOver={() => setAddButton(true)} 
      onMouseOut={() => setAddButton(false)} 
      onClick={() => setModalShow(true)} >
      {!addButton ? <AiOutlinePlusSquare size={12} /> : 
      <AiFillPlusSquare size={12} />}</div></td>
      <AddModal modalshow={modalshow} setModalShow={setModalShow} 
       card_id={props.card_id} 
       addInterestFn={addInterest} 
       card_name={props.name} 
       set_name={props.set} 
       price={props.price} 
       foilprice={props.foilprice} />
    </tr>
  )
}

export default DesktopSearchResult;