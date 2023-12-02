import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import logo from './Image/logo.jpeg';

function Header(props) {
  const { sections, title } = props;
  const navigate=useNavigate();
  const handleBack=()=>{
    navigate('/Signin');
  }
  const handleClick=()=>{
    navigate('/Search')
  }
  const handleAccount=()=>{
    navigate('/MyAccount');
  }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Avatar src="https://cdn-icons-png.flaticon.com/128/3448/3448339.png"/>
        <Button size="small" onClick={handleBack}>Back</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon onClick={handleClick}/>
          <p style={{color:'white'}}>a</p>
          <p> search your destiny</p>
        </IconButton>
        <p style={{color:'white'}}>ab</p>
        <Button variant="outlined" size="small" onClick={handleAccount}>
          Account
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;