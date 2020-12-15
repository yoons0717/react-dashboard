import React,{useState} from 'react'
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';


const Calendar = (props) => {
 
  const { RangePicker } = DatePicker;

  //const [startDate, setStartDate] = useState(moment());
  //const [endDate, setEndDate] = useState(moment());

  const onChange = (value) =>{
    props.setStartDate(value[0].format())
    props.setEndDate(value[1].format())
  }
 
  // console.log(value.format("YYYY-MM-DD"))
//  console.log(startDate.format())
//  console.log(endDate.format())

    return (
      
      <RangePicker 
        onChange={onChange}
        format="MMM Do yyyy"
      />

       
    );
  };
  

export default Calendar
