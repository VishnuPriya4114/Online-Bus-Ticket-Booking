import React, { Component } from 'react'
import { ReactDOM } from 'react';
import './Seatbooking.css';
import { useNavigate } from 'react-router-dom';
import TempButton from './TempButton'

export default class App extends React.Component {
  componentDidUpdate(){
    alert(`${this.state.seatReserved} ${this.state.seatReserved2} Selected`);
  }
  
    constructor() {
      super();
        this.state = {
        seat: [
          'U1','U2','U3',
          'U4','U5','U6','U7','U8',
          ,'U9','U10','U11','U12',
        ],
        seatAvailable: [
          'U1','U2','U3',
          'U4','U5','U6','U7','U8',
          ,'U9','U10','U11','U12',
        ],
        seatReserved: [],
        seat2: [
          'L1','L2','L3',
          'L4','L5','L6',
          'L7','L8','L9',
          'L10','L11','L12',
          
        ],
        seatAvailable2: [
          'L1','L2','L3',
          'L4','L5','L6',
          'L7','L8','L9',
          'L10','L11','L12',
        ],
        seatReserved2: []
      }
    }
    
    onClickData(seat) {
      if(this.state.seatReserved.indexOf(seat) > -1 ) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(res => res != seat)
        })
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        })
      }
    }
    onClickDatas(seat) {
      if(this.state.seatReserved2.indexOf(seat) > -1 ) {
        this.setState({
          seatAvailable2: this.state.seatAvailable2.concat(seat),
          seatReserved2: this.state.seatReserved2.filter(res => res != seat)
        })
      } else {
        this.setState({
          seatReserved2: this.state.seatReserved2.concat(seat),
          seatAvailable2: this.state.seatAvailable2.filter(res => res != seat)
        })
      }
    }
   
   
    render() {
      return (
        <>
        <div>
          <center><h1 style={{color:'blue',fontStyle:'italic'}}>Seat Reservation System</h1></center>
          <tr>
          <td width='400px'><h2></h2></td>
          <td width='550px'><h2 style={{color:'blue',fontStyle:'italic'}}>Upper Berth</h2></td>
          <td width='700px'><h2 style={{color:'blue',fontStyle:'italic'}}>Lower Berth</h2></td>
          </tr>
          <center>
          <tr>
          <td>
          <DrawGrid 
            seat = { this.state.seat }
            available = { this.state.seatAvailable }
            reserved = { this.state.seatReserved }
            onClickData = { this.onClickData.bind(this) }
            />
            </td>

            <td>
          <DrawGrid2
            seat2 = { this.state.seat2 }
            available2 = { this.state.seatAvailable2 }
            reserved2 = { this.state.seatReserved2 }
            onClickData2 = { this.onClickDatas.bind(this) }
            />
            </td>
            </tr>
            </center>
            <TempButton/>
        </div>
        </>
      )
    }
  }

  class DrawGrid extends React.Component {
    render() {
      return (
         <div className="container" >
          <h2></h2>
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seat.map( row =>
                    <td 
                      className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                      key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          
          <AvailableList available = { this.props.available } />
          <ReservedList reserved = { this.props.reserved } />
         </div>
         
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }
  class DrawGrid2 extends React.Component {
    render() {
      return (
         <div className="container" >
          <h2></h2>
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seat2.map( row =>
                    <td 
                      className={this.props.reserved2.indexOf(row) > -1? 'reserved': 'available'}
                      key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          
          <AvailableList available = { this.props.available2 } />
          <ReservedList reserved = { this.props.reserved2 } />
         </div>
         
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData2(seat);
    }
  }
  
  class AvailableList extends React.Component {
    render() {
      const seatCount = this.props.available.length;
      return(
        <div className="left">
          <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
          <ul>
            {this.props.available.map( res => <li key={res} >{res}</li> )}
          </ul>
        </div>
      )
    }
  }
  
  class ReservedList extends React.Component {
    render() {
      return(
        <div className="right">
          <h4>Reserved Seats: ({this.props.reserved.length})</h4>
          <ul>
            { this.props.reserved.map(res => <li key={res} >{res}</li>) }
          </ul>
        </div>
      )
    }
  }