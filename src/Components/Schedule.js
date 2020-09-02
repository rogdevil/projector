import React, { useEffect } from 'react'
import ScheduleEvent from './ScheduleEvent'
import {useFirestore} from 'reactfire';

export default function Schedule() {
    const firestore = useFirestore();
    const [data, setData] = React.useState([]);
    
    useEffect(() => {
        firestore.collection('booking').get().then((data) => {setData(data.docs)});
    }, [])
    return (
        <div className="schedule-page">
            <h1>Schedule</h1>
            <div className="schedule-table-header">
                <p>Class</p>
                <p>Venue</p>
                <p>From</p>
                <p>To</p>
            </div>
            {data.map( data => <ScheduleEvent from={data.fE.kt.proto.mapValue.fields.from.stringValue} venue={data.fE.kt.proto.mapValue.fields.venue.stringValue} class={data.fE.kt.proto.mapValue.fields.class.stringValue} to={data.fE.kt.proto.mapValue.fields.to.stringValue} />)}
        </div>
    )
}
// console.log(data.fE.kt.proto.mapValue.fields.class.stringValue)