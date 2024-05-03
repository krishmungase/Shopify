import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice'
import { toast } from 'react-hot-toast'

const Product = ({ post }) => {
    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item Added");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast("Item Removed");
    }
    return (
        <div className='flex items-center w-[370px] h-[470px] justify-center space-y-5 my-3 p-5 flex-col text-gray-700  bg-white border border-gray-200 rounded-lg shadow '>
            <div>
                <p className='text-lg font-bold'>{post.title.substring(0, 20) + "..."}</p>
            </div>
            <div>
                <p className='text-justify text-md'>{post.description.substring(0, 120) + "..."}</p>
            </div>
            <div>
                <img src={post.image} alt="" className='h-[200px] object-cover px-3' />
            </div>
            <div className='flex items-center justify-between gap-x-32'>
                <div className='text-green-700 font-bold text-lg'>
                    ${post.price}
                </div>
                {
                    cart.some((p) => p.id == post.id) ?
                        (
                            <button onClick={removeFromCart} className='text-sm font-semibold border border-black shadow-lg rounded-3xl px-3 py-1'>

                                Remove Item
                            </button>
                        ) :
                        (
                            <button onClick={addToCart} className='text-sm font-semibold border shadow-lg border-black rounded-3xl px-3 py-1'>
                                Add Item
                            </button>
                        )
                }
            </div>
        </div>
    )
}

export default Product
