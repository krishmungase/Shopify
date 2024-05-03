import React from 'react'
import { ImBin } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/slices/CartSlice'

const CartItem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast("Item Removed")
    }
    return (
        <div className='w-[380px] min-h-[400px] border px-8 py-5 rounded-lg shadow-lg mb-4'>
            <div className='flex items-center flex-col justify-between h-full space-y-2'>
                <div>
                    <img src={item.image} className='h-[250px] object-cover px-3 py-4' />
                </div>
                <div className='space-y-2 flex flex-col justify-between h-full'>
                    <h1 className='text-lg font-bold'>
                        {
                            item.title
                        }
                    </h1>
                    <div className='text-justify text-sm'>
                        {item.description.substring(0, 200) + "..."}
                    </div>
                    <div className='flex items-center justify-between pr-10 h-18'>
                        <p className='text-green-600 font-bold'>$ {item.price}</p>
                        <div className='flex items-center space-x-1 bg-red-300 px-3 py-1 rounded-md text-center cursor-pointer' onClick={removeFromCart}>
                            <ImBin className='size-3' />
                            <p className='text-sm'>Remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
