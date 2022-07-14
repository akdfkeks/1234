import React from "react";
import Calendar from "react-calendar";
import moment from "moment";
import axios from "axios";

function ThirdCalendar(){
    return(
        <div>
            <div>3</div>
            <Calendar 
            formatDay={(locale, date) => moment(date).format("DD")}
            />
        </div>
    )
}
export default ThirdCalendar;