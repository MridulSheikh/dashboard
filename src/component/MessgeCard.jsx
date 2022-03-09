import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';

const MessgeCard = ({id, email, subject, text}) => {
    return (
        <Link to={`${id}`} className=''>
        <div className='text-black py-4 px-2 flex justify-between hover:bg-gray-200 cursor-pointer border-b'>
        <div>
         <p className=''>{subject}</p>
         <p className='text-xs text-gray-600'>{email}</p>
        </div>
        <i className="fas fa-chevron-right my-auto text-gray-700"></i>
        </div>
        </Link>
    );
};

export default MessgeCard;