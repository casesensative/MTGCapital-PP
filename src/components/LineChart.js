import {Line} from 'react-chartjs-2';
import {useContext, useEffect, useState} from 'react';
import {MarginsContext} from '../context/MarginsContext';

const LineChart = () => {

  const {data, year, setYear} = useContext(MarginsContext);
  // const [data, setData] = useState({});
  // const [dataMargins, setDataMargins] = useState({Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0,
  //   Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0})
  // const [year, setYear] = useState(2021);

  // useEffect(() => {
  //   console.log('hitting chart useEffect');
  //   for (let i = 0; i < sellHistory.length; i++) {
  //     const date = sellHistory[i].sold_date.subString(0, 10).split('');
  //     console.log(date);
  //     if (sellHistory[i].)
  //   }
  // }, [])

  // const data = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 
  //   'Dec'],
  //   dataSets: [
  //     {
  //       label: 'Gains/Losses 2021',
  //       data: []
  //     }
  //   ]
  // }

  return (
    <div className="linechart">
      <Line 
      width={100} 
      height={60} 
      data={data}/>
    </div>
  )
}

export default LineChart;