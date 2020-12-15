import React from 'react'
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Select } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const { Option } = Select;

const TopbarBlock = styled.div`
background-color:white;
display: grid;

grid-template-columns: 2fr auto auto;

align-items: center;
padding:20px;
`;

function handleChange(value) {
    console.log(`selected ${value}`);
  }
// use Hook API
const useStyles = makeStyles({
  
    inputblock:{
        width:500,
      

    },

    notiIcon:{
        marginRight:10,
        color:"#c5c5cf"
    },
    searchIcon:{
        color:"#c5c5cf"
    }
})


function Topbar() {

    
    const classes = useStyles();
    
    return (
        <TopbarBlock>
          
            <Input 
                className={classes.inputblock} 
                placeholder="Search"
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <SearchIcon className={classes.searchIcon}/>
                    </InputAdornment>
                }
            />
            <NotificationsIcon className={classes.notiIcon}/>
           
             <Select defaultValue="lucy" style={{ width: 120 , marginRight:30}} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            
         
        </TopbarBlock>
    )
}

export default Topbar
