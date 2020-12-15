import React from 'react'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    // cloudDownload style
    downIcon:{
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
function MyCloudDownload() {
    const classes = useStyles();
    
    return (
        <CloudDownloadIcon className={classes.downIcon} />
    )
}

export default MyCloudDownload
