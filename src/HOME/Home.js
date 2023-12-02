import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import Instagram from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './MainFeaturedPost.js';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, darkScrollbar } from '@mui/material';
import './Home.css';
import { useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { Context } from '../App';
import Help from '../Help'
 
const sections = [
  { title: 'Email/SMS', url: '#' },
  { title: 'Show My Ticket', url: '#' },
  { title: 'Cancel Ticket', url: '#' },
  { title: 'Change Travel Date', url: '#' },
  { title: 'Help', url:'#' },
  { title: 'About', url: '#' },
  { title: 'Cab Rental', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'SAFE',
    date: 'Best Services',
    description:
      'Makes extra efforts to ensure the safer travel experiences',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBhDxpTFwrVkkVUb9OD_J72OXt4NkgLe_vQ&usqp=CAU',
    imageLabel: 'Image Text',
    color:'lightblue'
  },
  {
    title: 'ON TIME',
    date: 'Our Speciality',
    description:
      'Ever bus has proven track record of regularly being on time',
    image: 'https://media.istockphoto.com/vectors/seamless-pattern-with-bus-vector-id942788458?k=6&m=942788458&s=612x612&w=0&h=WGFUkSD64j_46Wn2iza3Dc-8Mn05VFg4bXi1BDr9Mw8=',
    imageLabel: 'Image Text',
    color:'lightblue'
  },
  {
    title: 'COMFORTABLE',
    date: 'Our ',
    description:
      'Comfort and best in class service experience',
    image: 'https://thumbs.dreamstime.com/b/modern-comfortable-city-vehicle-bus-salon-modern-comfortable-city-vehicle-bus-salon-empty-passenger-seats-131161114.jpg',
    imageLabel: 'Image Text',
    color:'lightblue'
  },
];

const posts = [post1, post2, post3];
const sidebar = {
  title: 'About',
  description:
    'Largest Brand for online bus ticket booking and offers an use online bus ticket and booking service.With over 36 million statisfied customers,35000 bus operatorns to choose from and plenty of offers on bus ticket booking.Makes road journeys super convinent for travellers.',
  archives: [
    { title: 'T&C', url: '#' },
    { title: 'Privacy Policy', url: '#' },
    { title: 'FAQ', url: '#' },
    { title: 'Blog', url: '#' },
    { title: 'Bus operator registration', url: '#' },
    { title: 'Agent registeration', url: '#' },
    { title: 'Insurance Partner', url: '#' },
    { title: 'User Agreement', url: '#' },
  ],
  social: [
    { name: 'Instagram', icon: Instagram },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
const [value, setValue] = React.useState(5)

const hello=useContext(Context);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="100%">
        <Header title="Online Bus Ticket Booking Site"  sections={sections}/>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={2} sx={{ mt: 3 }}>
          <tr>
            <td width='400px'><Main title="From the firehose" posts={posts} /></td>
            <td width='50px'></td>
            <td  width="400px">  
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /></td>
            <td width='50px'></td>
            <td width='600px' style={{paddingLeft:'5%'}}>
            <tr>
            <td width='500px'><h1 style={{fontFamily:'TimesNewRoman',color:'darkblue'}}>{hello}</h1></td>
            <td><img src="data:image/png;base64,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" width='100px' height='100px'/></td>
            </tr>

            <marquee direction='up' height='500'>
            <Grid item xs={12} md={12}  >
            <CardActionArea component="a" href="#" >
        <Card elevation={5} sx={{ display: 'flex' }} style={{backgroundColor:"light blue",backgroundColor:'whitesmoke'}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            <Avatar style={{backgroundColor:'black'}}>1</Avatar>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Kallada Travels
            </Typography>
            <Typography variant="subtitle1" paragraph>
              VE A/C Sleeper (2+1)
            </Typography>
            <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
      </Box>
            <Typography variant="subtitle1" color="primary">
            View...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="https://3.bp.blogspot.com/-33dzde7uBhU/UffoSHB4_mI/AAAAAAAAtu4/M7utR7tcaqc/s1600/IMG_9256+copy.jpg"
          />
        </Card>
      </CardActionArea>
      </Grid>
      <br/>
            <Grid item xs={12} md={12}  >
            <CardActionArea component="a" href="#" >
        <Card elevation={5} sx={{ display: 'flex' }} style={{backgroundColor:"light blue",backgroundColor:'whitesmoke'}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            <Avatar style={{backgroundColor:'black'}}>2</Avatar>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Dream Line Travels
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Bharat Benz A/C Sleeper (2+1)
            </Typography>
            <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
      </Box>
            <Typography variant="subtitle1" color="primary">
            View...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/70534/gallery_50809308928_07b7658b66_k.jpg"
          />
        </Card>
      </CardActionArea>
      </Grid>
      <br/>
            <Grid item xs={12} md={12}  >
            <CardActionArea component="a" href="#" >
        <Card elevation={5} sx={{ display: 'flex' }} style={{backgroundColor:"light blue",backgroundColor:'whitesmoke'}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            <Avatar style={{backgroundColor:'black'}}>3</Avatar>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Jihaan Luxury Travels
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Volvo Multi Axle A/C Sleeper I-Shift B11R
            </Typography>
            <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
      </Box>
            <Typography variant="subtitle1" color="primary">
              View...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="https://live.staticflickr.com/65535/48871352461_c5e89a4eff_b.jpg"
          />
        </Card>
      </CardActionArea>
      </Grid>
      <br/>
            <Grid item xs={12} md={12}  >
            <CardActionArea component="a" href="#" >
        <Card elevation={5} sx={{ display: 'flex' }} style={{backgroundColor:"light blue",backgroundColor:'whitesmoke'}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            <Avatar style={{backgroundColor:'black'}}>4</Avatar>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Green Line Travels
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Volvo Multi Axle A/C Sleeper I-Shift B11R
            </Typography>
            <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={4} readOnly />
      </Box>
            <Typography variant="subtitle1" color="primary">
              View...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="https://s3-ap-southeast-1.amazonaws.com/rbplus/BusImage/Domestic/6142_35_1.png"
          />
        </Card>
      </CardActionArea>
      </Grid>
      <br/>
            <Grid item xs={12} md={12}  >
            <CardActionArea component="a" href="#" >
        <Card elevation={5} sx={{ display: 'flex' }} style={{backgroundColor:"light blue",backgroundColor:'whitesmoke'}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            <Avatar style={{backgroundColor:'black'}}>5</Avatar>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Orange Travels
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Electric A/C Sleeper (2+1)
            </Typography>
            <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={4} readOnly />
      </Box>
            <Typography variant="subtitle1" color="primary">
              View...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="https://1.bp.blogspot.com/-Ogw8OM9XvX4/W3Q_XQPI-pI/AAAAAAABJtg/WefMkLOJxUkQSYru5EFpfhdM02ushcK-QCLcBGAs/s1600/29679671758_66491c8c6e_o.jpg"
          />
        </Card>
      </CardActionArea>
      </Grid>
      </marquee>
            </td>
            </tr>
          </Grid>
        </main>
      </Container>
      <div> 
      <center>
      <h1>Partnered with</h1>
      <tr>
      <td width="200px"><img src="https://st.redbus.in/buslogos/country/ind/logo_group/10283.png"/><h3>APSRTC</h3></td>
      <td width="200px"><img src="https://s3.rdbuz.com/web/images/homeV2/rtc/KERALA-RTC.svg"/><h3>Kerala RTC</h3></td>
      <td width="200px"><img src="https://s3.rdbuz.com/web/images/homeV2/rtc/RSRTC.svg"/><h3>RSRTC</h3></td>
      <td width="200px"><img src="https://s3.rdbuz.com/web/images/homeV2/rtc/UPSRTC.svg"/><h3>UPSRTC</h3></td>
      <td width="200px"><img src="https://s3.rdbuz.com/web/images/homeV2/rtc/GSRTC.svg"/><h3>GSRTC</h3></td>
      <td width="200px"><img src="https://st.redbus.in/buslogos/country/ind/logo_group/16426.png"/><h3>SBSTC</h3></td>
      </tr>
      </center>
      </div>
      <Footer

        description="Exclusive deals on Connect My Trip"
      />
    </ThemeProvider>
  );
}
