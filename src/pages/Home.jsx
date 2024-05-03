import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product'

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setloading] = useState(false);
    const [posts, setposts] = useState([]);

    async function fetchProductData() {
        setloading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setposts(data);
        } catch (error) {
            console.log("Error Aagya Jiii")
            setposts([]);
        }
        setloading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, [])
    return (
        <div className='w-screen h-screen '>
            {
                loading ? <Spinner /> :
                    posts.length > 0 ?
                        (
                            <div className='grid grid-cols-3 px-40 py-10 gap-x-10 gap-y-5 container mx-auto ml-28'>
                                {
                                    posts.map((post) => (
                                        <Product post={post} key={post.id} />
                                    ))
                                }
                            </div>

                        ) :
                        <div>
                            No Data Found
                        </div>
            }
        </div>
    )
}

export default Home