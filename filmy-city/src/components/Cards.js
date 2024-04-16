import React, { useEffect, useState } from 'react'
import {InfinitySpin } from 'react-loader-spinner'
import ReactStars from 'react-stars'
import { getDocs } from 'firebase/firestore'
import { moviesRef, db } from '../Firebase/Firebase'
import { Link } from 'react-router-dom'

const Cards = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function getData() {
            setLoading(true)
            const _data = await getDocs(moviesRef)
            _data.forEach((doc)=>{
                    setData((prv)=> [...prv, {...(doc.data()), id: doc.id}])
            })
            setLoading(false)
        }
        getData()
    }, [])
    return (
        <div className='flex justify-between flex-wrap mt-3 p-3 mx-3' >
            {loading ? <div className='w-full flex justify-center items-center h-96'><InfinitySpin
                visible={true}
                width="200"
                color="white"
                ariaLabel="infinity-spin-loading"
            /></div> :


                data.map((ele, i) => {
                    return (

                        <Link to={`/detail/${ele.id}`}><div key={i} className='card p-2 shadow-lg hover:-translate-y-2 cursor-pointer  font-medium mt-6 transition-all duration-500 rounded-sm'>
                            <img className='h-60 md:h-72' src={ele.image} />
                            <h1><span className='text-blue-500'>Name</span> : {ele.title}</h1>
                            <h1 className='flex items-center gap-1'><span className='text-blue-500 '>Rating</span> :
                                <ReactStars
                                    count={5}
                                    half={true}
                                    size={24}
                                    edit={false}
                                    value={ele.rating/ele.rated}
                                    color2={'#ffd700'} />
                            </h1>
                            <h1><span className='text-blue-500'>Year</span> : {ele.year}2020</h1>
                        </div>
                        </Link>
                    )
                })


            }

        </div>
    )
}

export default Cards