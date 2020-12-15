import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    // cloudDownload style
    tuneIcon:{
      background: "#f4f4fa",
      padding: 5,
      borderRadius:10,
      color: '#bbbbc5',

      position: "relative",
      /* Adjust these values accordingly */
     marginLeft:10,
      fontSize:35
    }
   
})
function MyTuneIcon() {
    const classes = useStyles();
    
    return (
        <TuneIcon className={classes.tuneIcon} />
    )
}

export default MyTuneIcon
