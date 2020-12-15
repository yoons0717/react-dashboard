import React from 'react'
import styled from 'styled-components';
import Chart1 from './Chart1'
import Chart2 from './Chart2'
import Chart3 from './Chart3'

import MyCloudDownload from '../../Commons/Icons/MyCloudDownload'

const SummaryBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

const BigChartBlock = styled.div`
    margin-top:20px;
`;

const SubTitleBlock = styled.div`
    background-color:white;
    display: grid;
    grid-template-columns: 2fr auto auto;
    align-items: center;
`;

const SmallChartBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;


function Summary() {
 
    return (
        <SummaryBlock>
           <SubTitleBlock> 
            <span style={{fontSize:'33px' , fontWeight: 'bold'}}>Sales Summary</span>
            <span style={{fontSize:'15px' ,color:"#9e9ead",}}>Export report</span>
            <MyCloudDownload />
           </SubTitleBlock>
         
            <BigChartBlock>
                <span style={{color:"#9e9ead" }}>Showing for :  <Chart1 /> </span>    
            </BigChartBlock>
          
            <SmallChartBlock>
                <Chart2/>
                <Chart3 />
            </SmallChartBlock>
           
        </SummaryBlock>
    )
}

export default Summary
