import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../style/Header.css";
const Header = () => {
    return (
        <header className='bg-primary fixed top-0 left-0 h-screen'>
            <div className='py-5 border-b border-white px-5'>
             <h1 className='text-gray-100 text-xl font-semibold'><i className="fas fa-chart-line mr-2"></i>Creative Team</h1>
            </div>
            <div className='text-white my-5'>
            <Link to="massage"><p className='text-gray-300 hover:bg-seccondary py-2 px-5'><i className="fas fa-envelope mr-3 text-gray-200"></i> Massage</p>
            </Link>
            <Link to="apointment"><p className='text-gray-300 hover:bg-seccondary py-2 px-5'><i className="fas fa-calendar-check mr-4 text-gray-200"></i>Apointment</p>
            </Link>
            <Link to="addAdmin"><p className='text-gray-300 hover:bg-seccondary py-2 px-5'><i className="fas fa-user-plus mr-3 text-gray-200"></i>Add admin</p>
            </Link>
            <Link to="manageAdmin"><p className='text-gray-300 hover:bg-seccondary py-2 px-5'><i class="fas fa-user-shield mr-3 text-gray-200"></i>Manage admin</p>
            </Link>
            </div>
        </header>
    );
};

export default Header;