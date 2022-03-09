import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams, useRoutes } from 'react-router-dom';
import useData from '../hooks/useData';

const MessegBody = () => {
    const [messege, setMessege] = useState({});
    const [isloading ,setIsloading] = useState(true)
    const route = useParams();
    const {deletehandle, loading} = useData();
    const {id} = route;
    useEffect(()=>{
       axios.get(`https://ancient-earth-75371.herokuapp.com/contect/${id}`)
       .then(res => {
           setMessege(res.data)
       })
    },[route])
    //handle messege delete
    const style = {
        height : "100vh",
        overflowY: "scroll"
      }
    return (
        <div>
        {
           loading ? <p>loading......</p>
            :
            <div style={style}>
            <div className='m-5'>
                <h1 className='text-2xl text-gray-700 font-semibold'>{messege.subject}</h1>
                <p className='text-light text-xs mt-2 text-primary'>{messege.email}</p>
                <p className='mt-5 text-gray-700'>{messege.text}</p>
            </div>
            <div className='absolute bottom-0 w-5/12 py-2 px-5 bg-gray-100'>
            {
                loading ? 
                <p className='text-green-500'>loading...</p>
                :
                <button onClick={()=>deletehandle(id)} className='text-red-500 hover:bg-gray-200 p-3 rounded-md'><i className="fas fa-trash mr-3"></i>Trash</button>
            }
            </div>
            </div>

        }
       
    </div>
    );
};

export default MessegBody;