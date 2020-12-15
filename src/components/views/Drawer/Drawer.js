import React from 'react'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';


import InsertChartIcon from '@material-ui/icons/InsertChart';
import CategoryIcon from '@material-ui/icons/Category';
import PaymentIcon from '@material-ui/icons/Payment';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import Typography from '@material-ui/core/Typography';


const DrawerBlock = styled.div`
grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    flex-basis:200px
    width: 200px;
    height:100%
    
    border:1px solid black;
    background-color:white;
    padding-top:50px;
`;

const LogoBlock = styled.div`

    background-color:pink;
    width: 165px;
    height:165px;
`;
// use Hook API
const useStyles = makeStyles({
    menus:{
     
        border: 0,
        borderRadius: 25,
        marginTop:20,
        color: '#c5c5cf',
        height: 48,
       
        padding: '0 30px',
      
        '&:hover': {
            background:'#182390',
            color:'white'
        },
        
       
    },
    icons:{
        marginRight:10
    }
   
})


function Drawer() {

    const classes = useStyles();

    return (
        <DrawerBlock>
            <LogoBlock/> 
         
            <MenuList>
                <MenuItem className={classes.menus}>
                    <PaymentIcon className={classes.icons} fontSize="small" />
                    <Typography variant="inherit">Payment</Typography>
                </MenuItem>
                <MenuItem  className={classes.menus}>
                    <InsertChartIcon className={classes.icons} fontSize="small" />
                    <Typography variant="inherit">Summary</Typography>
                </MenuItem>
                <MenuItem className={classes.menus}>
                    <CategoryIcon className={classes.icons}  fontSize="small" />
                    <Typography variant="inherit" >Category</Typography>
                </MenuItem>
             
                <MenuItem className={classes.menus}>
                    <SettingsIcon className={classes.icons}  fontSize="small" />
                    <Typography variant="inherit" >Settings</Typography>
                </MenuItem>
                <MenuItem className={classes.menus}>
                    <HelpIcon className={classes.icons}  fontSize="small" />
                    <Typography variant="inherit" >Help</Typography>
                </MenuItem>
                <MenuItem className={classes.menus}>
                    <ExitToAppIcon className={classes.icons}  fontSize="small" />
                    <Typography variant="inherit" noWrap>Logout</Typography>
                </MenuItem>
            </MenuList>


        </DrawerBlock>
    )
}

export default Drawer
