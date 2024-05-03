import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cart } = useSelector((state) => state)
  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    settotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className='flex items-center justify-center flex-col space-y-3'>
      <div className='text-3xl font-bold underline'>Your Orders</div>
      {
        cart.length > 0 ?
          (
            <div className='flex items-center justify-center flex-col mx-14 my-5'>
              <div className='grid grid-cols-2 gap-4 my-2 border-b border-black w-12/12'>
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>
              <div className='flex items-start w-full  justify-center flex-col space-y-7 my-3'>
                <div className=''>
                  <div className='text-4xl font-semibold font-serif tracking-wider'>Summary</div>
                  <div>
                    <span className='text-lg font-bold'>Tatal Items : {cart.length}</span>
                  </div>
                </div>
                <div className='space-y-3'>
                  <p className='text-xl font-bold'>Total Amount : <span className='text-green-600'>$ {totalAmount}</span></p>
                  <button className='bg-white shadow-lg border border-black px-3 py-1 rounded-lg'>Place Order</button>
                </div>
              </div>
            </div>
          )
          :
          (
            <div className='w-full h-full flex items-center justify-center flex-col space-y-3 text-center'>
              <h1 className='text-2xl text-center'>Your Cart is Empty !</h1>
              <Link to='/'>
                <button className='bg-green-400 text-lg px-3 py-1 rounded-md text-center shadow-lg '>
                  Shop Now
                </button>
              </Link>
            </div>
          )
      }
    </div>
  )
}

export default Cart
