import React, { useState } from 'react';
import './Search.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(null);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());
  const firstDayOfMonth = getFirstDayOfMonth(date.getMonth(), date.getFullYear());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const prevMonth = () => {
    setDate(prevDate => {
      const prevMonthDate = new Date(prevDate);
      prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  const nextMonth = () => {
    setDate(prevDate => {
      const nextMonthDate = new Date(prevDate);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  const handleDateClick = day => {
    setSelectedDate(new Date(date.getFullYear(), date.getMonth(), day));
  };

  const renderDays = () => {
    const daysArray = [];

    // Fill in the space for the days from the previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    // Render days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(
        <div
          key={i}
          className={`day ${selectedDate && selectedDate.getDate() === i ? 'selected' : ''}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }

    return daysArray;
  };
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/FindBus');
  }
  const handleBack=()=>{
    navigate('/Home');
  }
  return (
    <>
    <div><Button onClick={handleBack}>Back</Button></div>
    <div >
    <img className='from' src='data:image/png;base64,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' alt='eror' height='150px' width='150px'/>
    <img className='b' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyzeNHrsGdJRF8IYyrQk5Dbj_RJMxDGR3aw&usqp=CAU' height='150px' width='140px' />
    </div>
    <div>
    <tr>
    <td width='400px'></td>
    <td width='550px'>
    <h3 style={{fontSize:'30px'}} >From:</h3>
    <input
    name="city" placeholder="City" type="text" autoComplete="address-level2" style={{width:250,height:25}}/><br/>
    <p style={{color:'white'}}>jf</p>
    <input
    name="state" placeholder="State" type="text" autoComplete="address-level1" style={{width:250,height:25}}/>
    </td>
    <td width='550px'>
    <h3 style={{fontSize:'30px'}} >To:</h3>
    <input
    name="city" placeholder="City" type="text" autoComplete="address-level2" style={{width:250,height:25}}/><br/>
    <p style={{color:'white'}}>jf</p>
    <input
    name="state" placeholder="State" type="text" autoComplete="address-level1" style={{width:250,height:25}}/>
    </td>
    
    </tr>
    <p style={{color:'white'}}>gsadfg</p>
    </div>
    <center>
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>Previous</button>
        <h1>{monthNames[date.getMonth()]} {date.getFullYear()}</h1>
        <button onClick={nextMonth}>Next</button>
      </div>
      <p style={{color:'white'}}>shdfjla</p>
      <div className="weekdays">
        {daysOfWeek.map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>
      <div className="days-grid">
        {renderDays()}
      </div>
      <p style={{color:'white'}}>shdfjla</p>
      <div className="selected-date" style={{color:'blue',fontSize:'25px'}}>
        Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}
      </div>
    </div>
    </center>
    <center>
    <div>
    <p style={{color:'white'}}>gsadfg</p>
    <Button type='submit' variant='contained' className='but' onClick={handleClick}>Find Bus</Button>
    <p style={{color:'white'}}>gsadfg</p>

    </div>
    </center>
    </>
  );
};

export default Calendar;