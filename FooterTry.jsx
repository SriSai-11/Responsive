import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './styles.css'
import '../App.css'
import { SocialIcon } from 'react-social-icons';

export class FooterTry extends Component {
    render() {
        return (
            <div>
                <div class="footer">
                <Toolbar>
                    <Typography className="dps" variant="body1" color="inherit" >
                        DPS
                    </Typography>


                    <Typography className="home" variant="body2" >Home</Typography>
                    <Typography className="other" variant="body2">Engineer Digital</Typography>
                    <Typography className="other" variant="body2">Sell Digital</Typography>
                    <Typography className="other" variant="body2" style={{marginRight:150}}>Contact </Typography>
                   
                    <SocialIcon network="facebook" fgColor="white"  className="face" style={{ height: 20, width: 20,marginTop : 25,}} />
                    <SocialIcon  network="instagram" fgColor="white"  className="social" style={{ height: 20, width: 20,  marginLeft:30,marginTop : 25, }}/>
                    <SocialIcon network="twitter" bgColor="blue" fgColor="white"  className="social" style={{ height: 20, width: 20,  marginLeft:30,marginTop : 25, }}/>
                    <SocialIcon  network="linkedin" fgColor="white"  className="social" style={{ height: 20, width: 20,  marginLeft:30,marginTop : 25, }}/>
                    
                    </Toolbar>
                    
                   
                   
                    

                </div>
            </div>
        )
    }
}

// const style1 = {
//     paddingTop : 25,
//     paddingLeft: 150
// }

// const style={
//     paddingLeft: 60,
//     paddingTop : 25,
// }

// const style2 = {
//     paddingLeft: 120,
//     paddingTop : 25,
// }


export default FooterTry
