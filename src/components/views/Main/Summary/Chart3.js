import React from 'react'
import styled from 'styled-components';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import MyCloudDownload from '../../Commons/Icons/MyCloudDownload';

import MyTuneIcon from '../../Commons/Icons/MyTuneIcon';


const options = {
    chart:{
        type: 'pie'
    },
    title: {
      text: null,
   
    },
    
    colors: ['#182390', '#46d8d5', '#f2de31'],
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
   
    plotOptions: {
        pie: {
            size: "70%",
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Device',
        colorByPoint: true,
      data: [{
            name: 'Male',
            y: 25
        }, {
            name: 'Female',
            y: 34.85
        }, {
            name: 'Other',
            y: 9.67
        }] 
    

  }]
  }
  

const SubTitleBlock = styled.div`
    background-color:white;
    display: grid;

    grid-template-columns: 1fr auto auto;

    align-items: center;
    padding:25px;
    `;
 
function Chart3() {
    return (
        <div>
            <SubTitleBlock>
                
                <span style={{fontSize:'27px' , fontWeight: 'bold'}}>Audience</span>
                <MyCloudDownload />
                <MyTuneIcon/>
            </SubTitleBlock>
                <HighchartsReact
            highcharts={Highcharts}
            options={options}
            />
    
        </div>
    )
 }

 
export default Chart3
