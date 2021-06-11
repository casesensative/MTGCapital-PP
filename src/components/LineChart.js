import {Line} from 'react-chartjs-2';
import {useContext} from 'react';
import {MarginsContext} from '../context/MarginsContext';

const LineChart = () => {

  const {data} = useContext(MarginsContext);


  return (
      <div className="linechart">
        <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false
        }}/>
      </div>
  )
}

export default LineChart;