import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoListCircleOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <IoIosAddCircleOutline className='icon'/>
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <IoListCircleOutline className='icon' />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <BsBoxSeam className='icon-new'/>
                <p> Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar