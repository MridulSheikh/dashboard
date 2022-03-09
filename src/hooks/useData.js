import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const useData = () => {
    const [messege, setMessege] = useState([]);
    const [body, setBody] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
       axios.get("https://ancient-earth-75371.herokuapp.com/contect")
       .then(res => {
           setMessege(res.data)
       })
    },[messege])
    const reset = () =>{
        axios.get("https://ancient-earth-75371.herokuapp.com/contect")
       .then(res => {
           setMessege(res.data)
       })
    }
    const deletehandle = id =>{
        const confirm = window.confirm("are you sure to delete this massege");
        if(confirm){
            setLoading(true)
            axios.delete(`https://ancient-earth-75371.herokuapp.com/contect/${id}`)
            .then(res =>{
               if(res.data.deletedCount){
                  navigate('/massage')
                  alert("delete successfully")
               }
            })
            .finally(()=>setLoading(false))
        } 
        
    }
    const showBody = id =>{
        axios.get(`https://ancient-earth-75371.herokuapp.com/contect/${id}`)
        .then(res => {
            setBody(res.data)
        })
    }
    return {
        messege,
        deletehandle,
        showBody,
        body,
        loading,
        setLoading
    };
};

export default useData;