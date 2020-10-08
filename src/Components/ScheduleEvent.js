import React from 'react'

export default function ScheduleEvent(props) {
    return (
        <div className="schedule-table-results">
            <p>{props.class}</p>
            <p>{props.venue}</p>
            <p>{props.lecture}</p>
            <p>{props.from}</p>
            <p>{props.to}</p>
        </div>
    )
}
