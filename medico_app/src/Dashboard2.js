import { useEffect, useState } from 'react';
import  { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';
ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);
const options={
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 0.5,
      innerWidth: 2,
      backgroundColor:'black'
    },
  },
  reponsive: true,
  plugins: {
    legend: {
      position: 'left',
      color:'black',
      backgroundColor:'black'
    },
    title: {
      display: true,
      text: 'Appointment details',
      color:'rgb(255,255,255)',
    },
  },
};

const Dashboard2 =() => {
  const [data, setData] = useState({
    labels:  [],
    datasets: [
      {
        label:"Dataset1",
        data:[],
        borderColor: 'rgb(255,255,255)',
        backgroundColor: 'black',
        color:'black',
        
      }
    ]
  });
  useEffect(()=>{
    const fetchData= async()=>{
      const url='http://localhost:5005/api/Dashboard/appointmentCount'
      await fetch(url)
      .then((data)=> {
        console.log('Api data',data)
        const res= data.json();
        return res;
      }).then((res)=>{
        var lablearray = new Array();
        var dataarrey = new Array();
        for(var i=0;i<res.length;i++)
        {
            lablearray.push(res[i].doctorName);
            dataarrey.push(res[i].counts)
        }
        console.log("ressss",res)
        setData({
          labels: lablearray,
          datasets: [
            {
              label:"count",
              data: dataarrey,      
              borderColor: 'black',
              backgroundColor: 'black',
            }
          ]
        })
        console.log("arr",res.doctorName,res.counts);
      }).catch(e => {
        console.log("error",e)
      })
    }
    
    fetchData();
  },[])
  return(<div><div style={{width:'70%', height:'70%', color:'rgb(255,255,255)'}}><Bar data={data} options={options}/></div>

</div>
  )
}
export default Dashboard2;