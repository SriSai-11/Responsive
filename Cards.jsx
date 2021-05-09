import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import { Grid } from '@material-ui/core';
import Strapi from 'strapi-sdk-javascript/build/main';
import './styles.css'
import '../App.css'

const strapi = new Strapi('http://localhost:1337');
const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25
      },
      
      card: {
          
        maxWidth: 350,
                
      },
    
      media: {
        height: 250
      },
    
  });

export class Cards extends Component {
  constructor(props){
    super(props)
      this.state = {
        images:[],    
    }
  }

  async componentDidMount() {
    try {
      const images = await strapi.getEntries('homes')
      console.log(images)
      this.setState({ images });
     
    } 
    catch(err) {
     alert(err);
    }
   }
    render() {
        // const { classes } = this.props;
        return (
            <div  style={{backgroundColor: '#F4F1F4'}}>
                <Container  >
                <Grid  className="box">
                {this.state.images.map((imagesData,index) => (
                      <Grid item style={{width:300}}>
                    <Box  >
                        <Card >
                        <CardActionArea >
                            <CardMedia className="img"
                            
                          image={`http://localhost:1337${imagesData.image[0].url}`}
                            />
                            <CardContent style={style1}>
                            <Typography variant="body2" color="textSecondary" component="p" style={{margin:10,fontWeight: 'bold',color:'black'}} >
                               {imagesData.name}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </Box>
                </Grid>                   
                  ))} 
             </Grid>
                    </Container>
            </div>
        )
    }
}


// const style = {
    
//     paddingTop: '25px'
// }

const style1={
    height:'100px',
  }


export default withStyles(styles, { withTheme: true })(Cards)
// container  style={style}
// className={classes.card}
// md={6} sm={6} lg={6}