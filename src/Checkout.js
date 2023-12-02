import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import { Avatar } from '@mui/material';
import img1 from './HOME/Image/logo.jpeg'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Contact details', 'Payment details'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const navigate=useNavigate();
  const handleHome=()=>{
    navigate('/Home');
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
        <center>
        <tr>
        <td width='100px' style={{paddingTop:'6%'}}><Avatar alt="company" src={img1} /></td>
          <td style={{textAlign:'center',paddingBottom:'10%'}}><Typography variant="h6" color="inherit" noWrap>
           <b> "Connect My Trip" </b>
           </Typography></td>
           </tr>
           </center>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
            <center>
                <Typography variant="h5" gutterBottom>
                Ticket Confirmed
              </Typography>
              <img src='data:image/png;base64,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' />
              </center>
              <Typography variant="subtitle1">
               Your Bus Booking has been Confirmed. For any quries contact <b>Conncet My Trip</b><br/>
              </Typography>
              <center><button onClick={handleHome}>Back to Home</button></center>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Pay Now' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}