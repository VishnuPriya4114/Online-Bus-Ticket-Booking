import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Avatar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SimplePaper() {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/Home')
    }

  return (
    <>
    <tr>
    <td width='30px'></td>
    <td width='700px'><button onClick={handleClick}>Back</button></td>
    <td><h2>PERSONAL DETAILS</h2></td>
    </tr>
    <center>
        <Box
      sx={{
        backgroundColor:'skyblue',
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 650,
          height: 400,
          marginLeft:60
        },
      }}
    >
      <Paper elevation={10}>
      <img src='data:image/png;base64,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'/>
      <form>
      <Typography>Name: <input type="text" placeholder='XXX'></input></Typography>
      <Typography>Age:  <input type="text" placeholder='18'></input></Typography>
      <tr>
      <td><Typography><input type="radio"  name="age" id="Male" value="se" />
      <label for="Male">Male</label></Typography></td>
      <td><Typography><input type="radio" name="age" id="Female" value="se" checked='True'/>
      <label for="Female">Female</label></Typography></td>
      </tr>
      <Typography>
      <label for="phone">Enter a phone number:</label>
     <input type="tel" id="phone" name="phone"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required placeholder='8637672006'></input></Typography>
      <p></p>
     <center><a href='#'>Edit</a></center>
     </form>
      </Paper>
    </Box>
    </center>
    <h2 style={{textAlign:'center'}}>My Booking</h2>
    <tr style={{backgroundColor:'skyblue'}}>
    
    <td width='600px'><Paper elevation={5} >
    <b><p style={{textAlign:'center'}}>14 Nov Tuesday<br/></p></b>
    <h3 style={{textAlign:'center'}}>Gandhipuram------Krishnagiri</h3>
    <b><p style={{textAlign:'center'}}>12:30 AM - 05:00PM</p></b>
    <p style={{textAlign:'center'}}>Duration:05:00
       A1 Travels<br/>
       A/C Sleeper(2+1)</p>
       </Paper>
       </td>
      
    <br/>
   
    <td width='600px'>
    <Paper elevation={5} >
    <b><p style={{textAlign:'center'}}>27 Aug Tuesday<br/></p></b>
    <h3 style={{textAlign:'center'}}>Gandhipuram------Kanyakummari</h3>
    <b><p style={{textAlign:'center'}}>09:30 PM - 05:00AM</p></b>
    <p style={{textAlign:'center'}}>Duration:06:00
       GreenLine Travels<br/>
       A/C Sleeper(2+1)</p>
       </Paper>
       </td>
       
       <td width='600px'>
    <Paper elevation={5} >
    <b><p style={{textAlign:'center'}}>14 Dec Monday<br/></p></b>
    <h3 style={{textAlign:'center'}}>Vellore------Krishnagiri</h3>
    <b><p style={{textAlign:'center'}}>11:30 AM - 05:00PM</p></b>
    <p style={{textAlign:'center'}}>Duration:04:00
       Royal Travels<br/>
       A/C Sleeper(2+1)</p>
       </Paper>
       </td>
    </tr>
    <tr style={{backgroundColor:'skyblue'}}>
    
    <td width='600px'><Paper elevation={5} >
    <b><p style={{textAlign:'center'}}>4 Jan Friday<br/></p></b>
    <h3 style={{textAlign:'center'}}>Tiruvarur------Krishnagiri</h3>
    <b><p style={{textAlign:'center'}}>4:30 AM - 1:00PM</p></b>
    <p style={{textAlign:'center'}}>Duration:06:00
        City Travels<br/>
       A/C Sleeper(2+1)</p>
       </Paper>
       </td>
      
    <br/>
   
    <td width='450px'>
    <Paper elevation={5} >
    <b><p style={{textAlign:'center'}}>12 Mar Wednesday<br/></p></b>
    <h3 style={{textAlign:'center'}}>Vellore------Viluppuram</h3>
    <b><p style={{textAlign:'center'}}>01:30 PM - 08:00AM</p></b>
    <p style={{textAlign:'center'}}>Duration:04:00
       Air India Travels<br/>
       A/C Sleeper(2+1)</p>
       </Paper>
       </td>
       
       <td width='450px'>
    <Paper elevation={5} >
    <b><p style={{textAlign:'center'}}>24 Apl Monday<br/></p></b>
    <h3 style={{textAlign:'center'}}>Vellore------Krishnagiri</h3>
    <b><p style={{textAlign:'center'}}>11:30 AM - 05:00PM</p></b>
    <p style={{textAlign:'center'}}>Duration:04:00
       Royal Travels<br/>
       A/C Sleeper(2+1)</p>
       </Paper>
       </td>
    </tr>
    <div style={{textAlign:'center', backgroundColor:'skyblue'}} >
    <h1>FeedBack</h1>
    <paper elevation={10}>    
    <div class="mb-4 small">
Please provide your feedback in the form below
</div><br/>
<form name="feedback_form" id="feedback_form" method="post">
<label>How do you rate your overall experience?</label>
<div class="mb-3 d-flex flex-row py-1">
  <div class="form-check mr-3"><br/>
  <input class="form-check-input" type="radio" name="rating" id="rating_bad" value="bad"></input>
  <label class="form-check-label" for="rating_bad">
    Bad
  </label>
  </div>
  <div class="form-check mx-3">
  <input class="form-check-input" type="radio" name="rating" id="rating_good" value="good"></input>
  <label class="form-check-label" for="rating_good">
    Good
  </label>
  </div>
  
  <div class="form-check mx-3">
  <input class="form-check-input"  type="radio" name="rating" id="rating_excellent" value="excellent"></input>
  <label class="form-check-label" for="rating_excellent">
    Excellent!
  </label>
  </div>
</div>
<div class="mb-4">
  <label class="form-label"  for="feedback_comments">Comments:</label>
  <textarea class="form-control" required rows="6" name="comments" id="feedback_comments" width="200px" height="300px"></textarea>
</div><br/>
<div class="row">
  <div class="col">
    <label class="form-label" for="feedback_name">Your Name:</label>
    <input type="text" required name="name" class="form-control" id="feedback_name"/>
  </div>
  <br/>
  <div class="col mb-4">
    <label class="form-label" for="feedback_email">Email:</label>
    <input type="email" name="email" required class="form-control" id="feedback_email"/>
  </div>
</div>
<br/>
<button type="submit" class="btn btn-success btn-lg" >Post</button>
</form>
</paper>
    </div>
    </>
  );
}