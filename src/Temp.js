import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const defaultTheme = createTheme();
export default class Application extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {cars : [
        {value:4,key:1,name:'Dream Line Travels',desc:'Bharat Benz A/C Sleeper (2+1)',imgurl:'https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/70534/gallery_50809308928_07b7658b66_k.jpg'},
    {value:3,key:2,name:'A1 Travels',desc:'A/C Seater / Sleeper (2+1)',imgurl:'http://tnstcblog.com/wp-content/uploads/2019/06/42167246_2197932167153982_7075823375934816256_o-1024x678.jpg'},
    {value:5,key:3,name:'Jihaan Luxury Travels',desc:'Volvo Multi Axle A/C Sleeper I-Shift B11R (2+1)',imgurl:'https://live.staticflickr.com/65535/48871352461_c5e89a4eff_b.jpg'},
    {value:4,key:4,name:'Orange Travels',desc:'Electric A/C Sleeper (2+1)',imgurl:'https://images.assettype.com/swarajya/2017-06/2a5dcee3-3b0d-468a-81a3-fcea94d2aa49/14291688_303034650068755_7005565492631056824_n.jpg?w=1280&q=100&fmt=pjpeg&auto=format'},
    {value:5,key:5,name:'Kallada Travels',desc:'VE A/C Sleeper (2+1)',imgurl:'http://3.bp.blogspot.com/-33dzde7uBhU/UffoSHB4_mI/AAAAAAAAtu4/M7utR7tcaqc/s1600/IMG_9256+copy.jpg'},
    {value:1,key:6,name:'Suriya Connect Travels',desc:'NON AC Seater / Sleeper (2+1)',imgurl:'https://tse1.mm.bing.net/th?id=OIP.Klvwc1ZyD1Yo5ZW5NzZFfgHaED&pid=Api&P=0&h=180'},
    {value:2,key:7,name:'Royal Travels',desc:'Electric A/C Sleeper (2+1)',imgurl:'https://tse2.mm.bing.net/th?id=OIP.Lkhd6-kNHtU0s-4GVaa57wHaE7&pid=Api&P=0&h=180'},
    {value:2,key:8,name:'KMS Travels',desc:'Bharat Benz A/C Sleeper (2+1)',imgurl:'https://tse2.mm.bing.net/th?id=OIP.g1hkX2miT65Oe3PiSMUHwAHaDi&pid=Api&P=0&h=180'},
    {value:5,key:9,name:'Green Line Travels',desc:'Volvo Multi Axle A/C Sleeper I-Shift B11R (2+1)',imgurl:'https://tse3.mm.bing.net/th?id=OIP.9Zxk_DRBdvEZLvEM6QV0aAHaEK&pid=Api&P=0&h=180'},
      ],    
      rowsToDisplay : 3};
      this.showMore = this.showMore.bind(this);
      this.showLess = this.showLess.bind(this);
    }
    showMore() {
      let carLength = this.state.cars.length;
      this.setState({rowsToDisplay:carLength});
      // show more entries
      // switch to "show less"
    }
    showLess() {
      let carLength = 3;
      this.setState({rowsToDisplay:carLength});
      // show more entries
      // switch to "show less"
    }
    render(){
        return(
          <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="100%">
          <Button>Back</Button>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              style={{color:'darkblue'}}
            >
              Choose Your Bus
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              NOW,GET MORE THAN JUST BUS TICKETS WITH CONNECT-MY-TRIP!!!
            </Typography>
            
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="100%">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {this.state.cars.slice(0,this.state.rowsToDisplay).map((car,i) => (
              <Grid item key={car.key} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={car.imgurl}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {car.name}
                    </Typography>
                    <Typography>
                      {car.desc}
                    </Typography>
                    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={car.value} readOnly />
      </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Book Now</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={this.showMore}>  View More</Button>
              <Button variant="outlined" onClick={this.showLess}>View Less</Button>
            </Stack>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          HAVE HAPPY JOURNEY!!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
        )
    }
  }
