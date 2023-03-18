import React from "react";

export default function ShowTime(props) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[ props.currentDate.getDay()]
    let hour = props.currentDate.getHours();
    if (hour< 10) {
        hour = `0${hour}`
    }

    let minute = props.currentDate.getMinutes()
    if (minute< 10) {
        minute= `0${minute}`;
      }
    return (
     <div className="ShowTime">{day} {hour}:{minute}</div>
    )
}