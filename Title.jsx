import { Typography } from '@material-ui/core'
import React, { Component } from 'react'

export class Title extends Component {
    render() {
        return (
            <div style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaN1HK9ttAMwgvVpmzv4ImAME-M4dLBfAacw&usqp=CAU")` ,backgroundRepeat: "no-repeat",backgroundSize: "cover",width:'100%',height:'200px'}}>
               <Typography variant="h4" style={style} >Your's Digitally!</Typography>
            </div>
        )
    }
}

const style = {
    paddingTop: 80,
    color: 'white',
    textAlign:'center'
    
}
export default Title
