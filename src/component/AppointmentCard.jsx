import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';

const AppointmentCard = ({name, address, discripton, userName, userEmail, appointment_id, status, id}) => {
    const [appointment, setAppointment] = useState({});
    const [clicked, setClicked] = useState(false);
    const [loading, setLoading] = useState(false)
    const {handleSubmit, register} = useForm();
    useEffect(()=>{
         axios.get(`https://ancient-earth-75371.herokuapp.com/service/${appointment_id}`)
         .then(res => {
             setAppointment(res.data)
         })
    },[])
    const submit = data =>{
        setLoading(true)
       axios.put("https://ancient-earth-75371.herokuapp.com/appointment",{
           id : data.id,
           status : data.status
       })
       .then(res => {
          if(res.data.modifiedCount){
              alert('Aproved successfull')
          }
       })
       .finally(()=>setLoading(false));
    }
    return (
        <div className='bg-white border rounded-md shadow-md px-5 py-3 mt-3'>
            <div className='grid grid-cols-4'>
               <p>{userName}</p>
               <p>{userEmail}</p>
               <p>{status}</p>
               <button onClick={()=>setClicked(!clicked)} className='text-right'>
               {
                   clicked ?  <i className="fas fa-sort-up my-auto"></i> : <i className="fas fa-sort-down"></i>
               }
               </button>
            </div>
            {
                clicked && 
                <div className='pb-2'>
              <hr className='bg-green-500 h-1 rounded-full mt-5' />
              <div className='mt-5'>
              <p className='text-primary'><i className="fas fa-user-injured mr-2 text-primary"></i>{name}</p>
              <p className='mt-2 text-sm text-primary'><i class="fas fa-map-marker-alt mr-2 text-primary"></i>
              {address}</p>
              <p className='mt-2 text-primary'><i class="fas fa-user-md mr-2"></i>
              {appointment.doctor_name}</p>
               <h2 className='mt-5 text-xl'>About</h2>
              <p className='mt-3 text-gray-500 text-sm '>
              {discripton}</p>
              </div>
              <div className='mt-5'>
                <form onSubmit={handleSubmit(submit)}>
                <label>
                <input
                {...register("id")} 
                type="hidden" 
                value={id}
                />
                </label>
                <label>
                <select 
                      {...register("status")}
                      className="mt-3 border text-sm py-1 rounded-md outline-none focus:ring-2 ring-primary mb-4"
                      >
                      {
                          appointment?.date?.map(date => 
                            <option value={date}>{date}</option>
                            )
                      }
                      <option value="Under Revew">Under Revew</option>
                     </select>
                </label>
                <button className='bg-primary text-white px-3 py-1 ml-3 rounded-full'>submit</button>
                {
                    loading && <p className='text-green-500 mt-5'>loading.....</p>
                }
                </form>
              </div>
            </div>
            }
        </div>
    );
};

export default AppointmentCard;