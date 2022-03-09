import axios from 'axios';
import React, {useState, useEffect} from 'react';

const ManageUser = () => {
    const [admin, setAdmin] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        axios.get('https://ancient-earth-75371.herokuapp.com/admin')
        .then(res => {
            setAdmin(res.data)
        })
        .finally(()=>setLoading(false));
    },[])
    const deleteAdmin = email =>{
        const confirm = window.confirm("if you delete this account you are can't add this account again !")
        if(confirm){
            setLoading(true)
            axios.delete(`https://ancient-earth-75371.herokuapp.com/admin/${email}`)
            .then(res => {
                if(res.data.deletedCount){
                    const remaining = admin.filter(ad => ad.email !== email);
                    setAdmin(remaining);
                    alert("delete successfull");
                }
            })
            .finally(()=>setLoading(false));
        }
    }
    const style = {
        overflowY: "scroll"
      }
    return (
        <div className='m:pl-44'>
            <div className='w-3/12 mx-auto mt-10'>
            <form className='flex px-4 py-2 bg-white shadow-md rounded-full'>
              <input type="text" placeholder='srearch' className='outline-none w-full' />
              <button><i className="fas fa-search"></i></button>
            </form>
            </div>
            <div style={style} className='w-5/12 mx-auto bg-white border shadow-md p-5 rounded-md mt-5 h-96'>
                {
                  admin.map(admin => <div className='py-3 border-b flex justify-between'>
                    <p>{admin.email}</p>
                     <button onClick={()=>deleteAdmin(admin.email)} className='border border-red-500 text-red-500 px-2 py-1 rounded-full hover:bg-red-500 hover:text-white'><i className="fas fa-trash"></i></button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageUser;