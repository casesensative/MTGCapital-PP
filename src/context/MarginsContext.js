import {createContext, useState, useContext} from 'react';
import axios from 'axios';
import {UserContext} from './UserContext';

export const MarginsContext = createContext();

export const MarginsProvider = (props) => {

  const {user} = useContext(UserContext);

  const [marginsTotal, setMarginsTotal] = useState(0);
  const [sellHistory, setSellHistory] = useState([]);
  const [searched, setSearched] = useState(false);
  const [data, setData] = useState({});
  const [dataMargins, setDataMargins] = useState({Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0,
    Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0})
  const [year, setYear] = useState('');
  const [years, setYears] = useState([]);


  const getMargins = (ddyear) => {
    if (user) {
      axios.get(`/api/margins/${user.user_id}`).then(results => {
        setSellHistory(results.data);
        setMarginsTotal(results.data.map(margin => {
          return +margin.margin
        }).reduce((a, c) => {
          return a + c;
        }));
        console.log(results.data);
        let newyears = [...years];
        for (let i = 0; i < results.data.length; i++) {
          const checkdate = results.data[i].sold_date.substring(0, 10).split('-');
          if (!newyears.find(e => e === checkdate[0])) {
            newyears.push(checkdate[0])
          }
        }
        setYears(newyears);
        ddyear = ddyear || newyears[0];
        console.log(ddyear);
        console.log(newyears[0]);
        setYear(ddyear);
        console.log('SET YEAR:', ddyear);
        let datamargins = {Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0,
          Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0};
        for (let i = 0; i < results.data.length; i++) {
          const date = results.data[i].sold_date.substring(0, 10).split('-');
          if (date[0] === ddyear) {
            let newTotal = 0;
            switch (date[1]) {
              case '01':
                newTotal = datamargins.Jan += +results.data[i].margin;
                datamargins = ({...datamargins, Jan: newTotal});
                newTotal = 0;
                break;
              case '02':
                newTotal = datamargins.Feb += +results.data[i].margin;
                datamargins = ({...datamargins, Feb: newTotal});
                newTotal = 0;
                break;
              case '03':
                newTotal = datamargins.Mar += +results.data[i].margin;
                datamargins = ({...datamargins, Mar: newTotal});
                newTotal = 0;
                break;
              case '04':
                newTotal = datamargins.Apr += +results.data[i].margin;
                datamargins = ({...datamargins, Apr: newTotal});
                newTotal = 0;
                break;
              case '05':
                newTotal = datamargins.May += +results.data[i].margin;
                datamargins = ({...datamargins, May: newTotal});
                newTotal = 0;
                break;
              case '06':
                newTotal = datamargins.Jun += +results.data[i].margin;
                datamargins = ({...datamargins, Jun: newTotal});
                newTotal = 0;
                break;
              case '07':
                newTotal = datamargins.Jul += +results.data[i].margin;
                datamargins = ({...datamargins, Jul: newTotal});
                newTotal = 0;
                break;
              case '08':
                newTotal = datamargins.Aug += +results.data[i].margin;
                datamargins = ({...datamargins, Aug: newTotal});
                newTotal = 0;
                break;
              case '09':
                newTotal = datamargins.Sep += +results.data[i].margin;
                datamargins = ({...datamargins, Sep: newTotal});
                newTotal = 0;
                break;
              case '10':
                newTotal = datamargins.Oct += +results.data[i].margin;
                datamargins = ({...datamargins, Oct: newTotal});
                newTotal = 0;
                break;
              case '11':
                newTotal = datamargins.Nov += +results.data[i].margin;
                datamargins = ({...datamargins, Nov: newTotal});
                newTotal = 0;
                break;
              case '12':
                newTotal = datamargins.Dec += +results.data[i].margin;
                datamargins = ({...datamargins, Dec: newTotal});
                newTotal = 0;
                break;
              default:
                console.log('You should never see this!');
                break;
            } 
          }
        };
        setDataMargins(datamargins)
        console.log(dataMargins);
        setData({
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 
          'Dec'],
          datasets: [
            {
              label: `Gains - Losses '${ddyear}'`,
              data: [datamargins.Jan, datamargins.Feb, datamargins.Mar, datamargins.Apr, 
              datamargins.May, datamargins.Jun, datamargins.Jul, datamargins.Aug, 
              datamargins.Sep, datamargins.Oct, datamargins.Nov, datamargins.Dec]
            }
          ]
        });
      }).catch(err => console.log(err))
    }
  }

 

  const searchMargins = (searchinput) => {
    if (user) {
      axios.get(`/api/margins/${user.user_id}/${searchinput}`).then (results => {
        console.log(results.data);
        setSearched(true);
        setSellHistory(results.data);
        setMarginsTotal(results.data.map(margin => {
          return +margin.margin
        }).reduce((a, c) => {
          return a + c;
        }));
      }).catch(err => console.log(err));
    }
  }
 
  return (
    <MarginsContext.Provider value={{
      marginsTotal,
      setMarginsTotal,
      sellHistory,
      setSellHistory,
      getMargins,
      data,
      dataMargins,
      year,
      years,
      setYear,
      searchMargins,
      setSearched,
      searched


    }}>
      {props.children}
    </MarginsContext.Provider>
  )

}