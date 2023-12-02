import React, { Component } from 'react'
import { Button, Card, CardActions, CardContent, Grid, TextField,Typography,FormControlLabel,Checkbox } from '@mui/material';
export default class SimpleForm extends Component {
 constructor(props) {
 super(props);
 this.state = {
 fullName: '',
 fullNameError: false,
 fullNameHelperText: '',
 email: '',
 emailError: false,
 emailHelperText: '',
 password: '',
 passwordError: false,
 passwordHelperText: '',
 confirmPassword: '',
 confirmError: false,
 confirmHelperText: '',
 };
 }
 handleFullname = (e) => {
 this.setState({
 fullName: e.target.value,
 fullNameError: false,
 fullNameHelperText: ''
 });
 }
 handleEmail = (e) => {
 this.setState({
 email: e.target.value,
 emailError: false,
 emailHelperText: ''
 });
 }
 handlePassword = (e) => {
 this.setState({
 password: e.target.value,
 passwordError: false,
 passwordHelperText: ''
 });
 }
 handleConfirm = (e) => {
 this.setState({
 confirmPassword: e.target.value,
 confirmError: false,
 confirmHelperText: ''
 });
 }
 handleSubmit = (e) => {
 e.preventDefault();
 if (this.state.fullName === '') {
 this.setState({
 fullNameError: true,
 fullNameHelperText: 'You must fill in your full name'
 });
 }
 
 if(this.state.email === ''){
 this.setState({
 emailError: true,
 emailHelperText: 'You must fill in your email address'
 });
 }
 if(this.state.password === ''){
 this.setState({
 passwordError: true,
 passwordHelperText: 'You must fill in your password'
 });
 }
 if(this.state.confirmPassword === ''){
 this.setState({
 confirmError: true,
 confirmHelperText: 'You must fill in your confirm password'
 });
 }
 if(this.state.password !== this.state.confirmPassword){
 this.setState({
 confirmError: true,
 confirmHelperText: 'Incorrect confirm password'
 });
 }
 if (this.state.fullName !== '' && this.state.emai !== '' && this.state.password !== '' && 
this.state.confirmPassword !== '' && this.state.password === this.state.confirmPassword) {
 alert('Form Submitted Successfully');
 }
 }
 render() {
 return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
 <form onSubmit={this.handleSubmit}>
 <Grid container spacing={3}>
 <Grid item md={6} xs={12}>
 <TextField
 required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
 value={this.state.fullName}
 onChange={this.handleFullname}
 error={this.state.fullNameError}
 helperText={this.state.fullNameHelperText}
 />
 </Grid>
 <Grid item md={6} xs={12}>
 <TextField
 required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
 value={this.state.email}
 onChange={this.handleEmail}
 error={this.state.emailError}
 helperText={this.state.emailHelperText}/>
 </Grid>
 <Grid item md={6} xs={12}>
 <TextField
 required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
 value={this.state.password}
 onChange={this.handlePassword}
 error={this.state.passwordError}
 helperText={this.state.passwordHelperText}/>
 </Grid>
 <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
</Grid>
<CardActions>
 <Button type="submit" size="small">Submit</Button>
 </CardActions>
</form>
</React.Fragment>
 )
 }
}