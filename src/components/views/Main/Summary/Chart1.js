import React , {useState,useEffect,useRef} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Calendar from './Calendar'
import moment from 'moment';

function Chart1() {
    
  const [startDate, setStartDate] = useState(moment().format());
  const [endDate, setEndDate] = useState(moment().format());
  const [ordersData, setOrdersData] = useState([2,4,6,4,2]);  
  const [salesData, setSalesData] = useState([4,6,8,6,4]);  

  const isFirstRun = useRef(true); // useRef vs useState ??
  
  
    useEffect (() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        let diff = moment(endDate).date()-moment(startDate).date()
        let newOrdersData = []
        let newSalesData = []
        for(let i = 0; i< diff+1; i++){
        newOrdersData.push(Math.floor(Math.random() * 10) + 1);
        newSalesData.push(Math.floor(Math.random() * 10) + 1);
        }
        setOrdersData(newOrdersData);
        setSalesData(newSalesData);
        console.log("Effect was run");
    }, [startDate,endDate]);

    

 
    
      
  console.log(ordersData)
  console.log(salesData)
  const options = {
    chart:{
        type: 'areaspline',
       
    },
    title: {
        text: null,
    },
    colors: ['#71e1df', '#182390'],
    series: [
        { 
            name:'Orders',
            data: ordersData,
            pointStart: Date.UTC(moment(startDate).year(), moment(startDate).month(), moment(startDate).date()),
            pointInterval: 24 * 3600 * 1000 // day interval
        },
        { 
            name:'Sales',
            data: salesData,
            pointStart: Date.UTC(moment(startDate).year(), moment(startDate).month(), moment(startDate).date()),
            pointInterval: 24 * 3600 * 1000
        }
    ],
    xAxis: {
       
        tickInterval: 24 * 3600 * 1000,
        // one day
        type: 'datetime'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        backgroundColor: '#f8f9fc',
        borderRadius: 5,
      
        
    },
    plotOptions: {
        series: {
            fillOpacity: 0.1,
           
                pointStart: 100
            
        }
    },
    
  }
  
    return (
        <>
            <Calendar setStartDate={setStartDate} setEndDate={setEndDate}/>
                <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </>
    )
 }


export default Chart1
