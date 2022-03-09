import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AppointmentCard from './AppointmentCard';

const Appointment = () => {
    const [apointment, setApointment] = useState([]);
    const [isloading, setIsloading] = useState(false)
    useEffect(()=>{
        setIsloading(true)
        axios.get("https://ancient-earth-75371.herokuapp.com/appointment")
        .then(res => {
            console.log(res.data)
            setApointment(res.data)
        })
        .finally(()=> setIsloading(false))
        .catch(err => console.log(err))
    },[])
    //refresh button functon
     const refresh = ()=>{
        setIsloading(true)
        axios.get("https://ancient-earth-75371.herokuapp.com/appointment")
        .then(res => {
            console.log(res.data)
            setApointment(res.data)
        })
        .finally(()=> setIsloading(false))
        .catch(err => console.log(err))
     }
    const style = {
        height : "100vh",
        overflowY: "scroll"
      }
    return (
        <div style={style} className='md:ml-44 md:pl-5'>
        <div className='grid grid-cols-4 px-10 py-3 bg-primary text-white sticky top-0'>
            <p>user name</p>
            <p>user email</p>
            <p>status</p>
            <button onClick={refresh} className='text-white'><i className="fas fa-redo"></i></button>
        </div>
        {
            isloading ? <p className="text-center mt-20">Loading.....</p> 
            : 
            <div className='px-5'>
             {
                 apointment.map(app => <AppointmentCard 
                    key={app._id}
                    id ={app._id}
                    name ={app.name}
                    address={app.address}
                    discripton={app.discripton}
                    userName={app.userName}
                    userEmail={app.userEmail}
                    appointment_id={app.appointment_id}
                    status={app.status}
                    />)
             }
            </div>
        }
         </div>
    );
};

export default Appointment;