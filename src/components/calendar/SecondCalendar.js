import React from "react";
import Calendar from "react-calendar";
import moment from "moment";
import axios from "axios";

function SecondCalendar(){
    return(
        <div>
            <div>2</div>
            <Calendar 
            formatDay={(locale, date) => moment(date).format("DD")}
            />
        </div>
    )
}
export default SecondCalendar;