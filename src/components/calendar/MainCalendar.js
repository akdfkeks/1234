import '../../App.css';
import React, {useState} from 'react';
import Calendar from 'react-calendar';
//import AddToDo from '../todolist/addToDo';
//import moment from 'moment';
// import axios from 'axios';
// import { array } from 'prop-types';
// import moment from 'moment';
// import axios from 'axios';

function MainCalendar() {

  const [value, onChange] = useState(new Date());
  //  const [schedule, setSchedule] = useState("");

  //하이라이트가 들어갈 날짜를 배열로 작성
  // const marks = [1
  //   "2022-05-15",
  //   "2022-05-03",
  //   "2022-05-07",
  //   "2022-05-12",
  // ]; 

  const onActiveStartDateChange = ({ action, activeStartDate, value, view }) => {
  // alert('Changed view to: ', activeStartDate, view)
    document.getElementById("amu").textContent = activeStartDate
  };
  
  // const onClickDay = (value, event) => {
  //   document.getElementById("amu").textContent = value
  // };

    
  return (
    <div>
      
      <Calendar

        onChange={onChange}
        // onClickMonth={onClickMonth}
        onActiveStartDateChange={onActiveStartDateChange}
        maxDetail="month"
        // onClickDay={onClickDay}
        // onClickMonth={onClickMonth}
        value={value}/>
        
        <h1 id="amu">

        </h1>
      
    </div>
    
  );

}

export default MainCalendar;

// axios({
  //   method:'post',
  //   url:'172.30.17.114:3001/todo',
  //   data: {
  //     targetYearMonth: schedule, // 202206

  //     // 특정날짜 선택 시, 그 날짜에 대한 데이터를 요청하는 코드가 들어가야함
  //   },
  // }).then(res => {
  //   const myData = res.data;
  //   const monthSchedule = myData.data;
  //   const daySchedule = monthSchedule.schedules //스케쥴 배열

  //   console.log(daySchedule.split("T")[0].slice(-2));

  //   let calendar = [];

  //   for (var i = 0; i<31; i++){
  //     calendar.concat(new array());
  //   }

  //   daySchedule.forEach((schedule)=>{
  //     calendar[schedule.targetDate.split("T")[0].slice(-2)-1].concat(schedule);
  //   })
  // })