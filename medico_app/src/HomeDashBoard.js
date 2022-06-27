import { useEffect, useState } from 'react';

import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';

import { Pie } from 'react-chartjs-2';
ChartJs.register(

    Tooltip, Title, ArcElement, Legend
  
  );
  
  
  
  
   const data = {
  
       datasets: [{
  
           data: [10, 20, 30],
  
           backgroundColor:[
  
            'lightblue',
  
            'lightgrey',

            'pink',

  
           ]
  
       },
  
     ],
  
     labels: [
  
      'lightblue',
  
      'lightgrey',

      'pink',

     ],
  
   };
  function HomeDashboard() {

    const [data, setData] = useState({
  
       datasets: [],
  
    labels: [],
  
  });
  
    useEffect(()=> {
  
      const fetchData = () =>  {
  
        fetch('http://localhost:5005/api/Dashboard/Count').then((data) => {
  
          const res = data.json();
  
          return res;
  
        }).then((res) => {
  
          console.log("ress", res)
  
          setData(
  
            {
  
              datasets: [{
  
                  data:[res.doctorNo,res.patientNo, res.appointmentNo],
  
                  backgroundColor:[
  
                    'lightblue',
  
                    'lightgrey',
  
                    'pink',
  
                   
  
                  ]
  
              },
  
            ],
  
            labels:['No of Doctor','No. of PatientNo', 'No. Of Appointment'],
  
          }
  
          )
  
  
  
        }).catch(e => {

            console.log("error", e)
    
          })
    
        }
    
      fetchData();
    
      }, [])
    
      return (
        <div style={{width:"100%", height:"550px", background:"black", borderBottom:"3px solid white"}}>
            <center>
                <br/><br/><h3 style={{color:"white"}}>Medic'O status</h3><br/>
            <div className="PieChart" style={{width:'30%', height:'30%'}}>
           
             <Pie data={data}/>
          
            </div>
            </center>
       </div>
      );
    
    }
    
    
    
    export default HomeDashboard;  