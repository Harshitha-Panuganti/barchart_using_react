import {Bar} from 'react-chartjs-2';
import {Chart,LinearScale,BarElement,CategoryScale,Legend,Title,Tooltip} from 'chart.js';
Chart.register(
LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
);

const labels=['HTML','CSS','JS','REACTJS','PYTHON','SQL','NODEJS'];

const options={
  plugins:{
    legend:{
      position:'top'
    },
    title:{
      display:true,
      text:"Subject wise Marks"
    }
  }
}
const data = {
  labels,
  datasets:[
    {
      label:'2022 Marks',
      data:[10,50,25,30,40,15,50],
      backgroundColor:'green'
    },
    {
      label:'2023 Marks',
      data:[40,20,35,10,50,35,20],
      backgroundColor:'red'
    }
  ]
}
function App(){
  return(
    <div style={{'height':400,'width':800,'margin':'auto'}}>
      <Bar options={options} data={data}/>
    </div>
  )
}

export default App;
