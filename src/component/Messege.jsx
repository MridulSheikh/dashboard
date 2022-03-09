import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';
import useData from '../hooks/useData';
import MessegBody from './MessegBody';
import MessgeCard from './MessgeCard';

const Messege = () => {
    const {messege} = useData();
    const style = {
        height : "100vh",
        overflowY: "scroll"
      }
    return (
        <div className='md:ml-44 md:pl-5  grid md:grid-cols-2 h-screen'>
        <div style={style} className='border-r-2'>
            {
                messege?.map(massage => <MessgeCard 
                    key={massage._id}
                    email={massage.email}
                    subject={massage.subject}
                    id={massage._id}
                    />)
            }
        </div>
        <div className="bg-white">
          <Outlet />
        </div>
        </div>
    );
};

export default Messege;