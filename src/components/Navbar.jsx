import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const { cart } = useSelector((state) => state)
    return (

        <div className='w-full px-10 py-4 bg-slate-900 h-16 fixed'>
            <div className='flex justify-between items-center px-40'>
                <NavLink to="/">
                    <img src="/logo.png" alt="" className='w-[120px]' />
                </NavLink>
                <div className='flex items-center justify-center gap-x-5 text-center relative'>
                    <NavLink to="/">
                        <h1 className='text-white text-xl'>Home</h1>
                    </NavLink>
                    <NavLink to="/cart" className='flex items-center justify-center space-x-3'>
                        <CiShoppingCart className='size-10 text-white' />
                    </NavLink>
                    <NavLink to="/cart" className='mx-[-42px] mt-1 text-white rounded-full text-sm text-center'>
                        {cart.length}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
