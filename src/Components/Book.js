import React from 'react'
import Button from './Button'
import {useFirestore} from 'reactfire';

export default function Book() {
    const [venue, setVenue] = React.useState("");
    const [Class, setClass] = React.useState("");
    const [date, setDate] = React.useState("");
    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
    const [lectureName, setLectureName] = React.useState("");
    const firestore = useFirestore();

    const DataToSend = {
        venue: venue,
        lectureName: lectureName,
        class: Class,
        from: from,
        to: to
    }

    const checkAndSubmit = async () => {
        if ( venue.length === 0 || Class.length === 0 || date.length === 0 || from.length === 0 || to.length === 0 || lectureName.length === 0 ) {
            alert("Please fill all the columns");
            console.log(venue);
            console.log(Class);
            console.log(date);
            console.log(from);
            console.log(to);
            console.log(lectureName);
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
                <select name="venue" id="venue" className="booking-input" onChange={(event) => {setVenue(event.target.value)}} >
                    <option value="AO1">AO1</option>
                    <option value="AO2">A02</option>
                    <option value="AO3">AO3</option>
                    <option value="BO1">BO1</option>
                    <option value="BO2">BO2</option>
                    <option value="BO3">BO3</option>
                    <option value="LAB">LAB</option>
                    <option value="LIBRARY">LIBRARY</option>
                </select>
                <input type="text" className="booking-input" placeholder="Class" onChange={(event) => {setClass(event.target.value)}} />
                <input type="text" className="booking-input" placeholder="Lecture Name" onChange={(event) => {setLectureName(event.target.value)}} />
                <input type="date" placeholder="dd-mm-yyyy" className="booking-input" onChange={(event) => {setDate(event.target.value)}} />
                <span style={{color: 'white', width: '100%'}}>
                    <p style={{margin: '0em 1em'}}>From -</p>
                    <input type="time" className="booking-input" onChange={(event) => {setFrom(`${date.split("-").reverse().join("-")} ${event.target.value}`)}} />
                </span>
                <span style={{color: 'white', width: '100%'}}>
                    <p style={{margin: '0em 1em'}}>To -</p>
                    <input type="time" className="booking-input" onChange={(event) => {setTo(`${date.split("-").reverse().join("-")} ${event.target.value}`)}} />
                </span>
                <Button name="Submit" click={checkAndSubmit} />
            </div>
        </div>
    )
}
