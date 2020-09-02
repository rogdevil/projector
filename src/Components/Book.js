import React from 'react'
import Button from './Button'
import {useFirestore} from 'reactfire';

export default function Book() {
    const [venue, setVenue] = React.useState("");
    const [Class, setClass] = React.useState("");
    const [date, setDate] = React.useState("");
    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
    const firestore = useFirestore();

    const DataToSend = {
        venue: venue,
        class: Class,
        from: from,
        to: to
    }

    const checkAndSubmit = async () => {
        if ( venue.length === 0 || Class.length === 0 || date.length === 0 || from.length === 0 || to.length === 0 ) {
            alert("Please fill all the columns");
            firestore.collection('booking').get().then((data) => {
                console.log(data.docs);
                data.docs.forEach((item) => {
                    firestore.collection('booking').doc(item.id).get().then((data) => {
                        console.log('data is', data.fE.kt.proto.mapValue.fields);
                    })
                })
                
            })           
        } else {
            alert("everything is working fine");
            firestore.collection('booking').add(DataToSend)
        }
    }

    return (
        <div className="booking-page">
            <h1>Book Your Timing</h1> 
            <div className='booking-container'>
                <input type="text" className="booking-input" placeholder="Venue" onChange={(event) => {setVenue(event.target.value)}} />
                <input type="text" className="booking-input" placeholder="Class" onChange={(event) => {setClass(event.target.value)}} />
                <input type="date" placeholder="dd-mm-yyyy" className="booking-input" onChange={(event) => {setDate(event.target.value)}} />
                <span style={{color: 'white', width: '100%'}}>
                    <p style={{margin: '0em 1em'}}>From -</p>
                    <input type="time" className="booking-input" onChange={(event) => {setFrom(`${date} ${event.target.value}`)}} />
                </span>
                <span style={{color: 'white', width: '100%'}}>
                    <p style={{margin: '0em 1em'}}>To -</p>
                    <input type="time" className="booking-input" onChange={(event) => {setTo(`${date} ${event.target.value}`)}} />
                </span>
                <Button name="Submit" click={checkAndSubmit} />
            </div>
        </div>
    )
}
