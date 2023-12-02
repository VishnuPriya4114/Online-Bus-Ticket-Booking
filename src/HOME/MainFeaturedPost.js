import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { motion } from "framer-motion";

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img src="" style={{ display: 'none' }}  />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor:'blue',
        }}
        style={{ backgroundImage:"url('data:image/jpeg;base64,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')",backgroundSize:"contain"}}
        />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Connect My Trip
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
             ENJOY YOUR TRIP
            </Typography>
            <Link variant="subtitle1" href="#">
              Click Here
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainFeaturedPost;