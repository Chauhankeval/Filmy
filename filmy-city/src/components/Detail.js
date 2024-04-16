import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { moviesRef, db } from '../Firebase/Firebase'
import { Oval } from 'react-loader-spinner'
import Reviews from './Reviews'

const Detail = () => {
    const { id } = useParams()
    const [data, setData] = useState({
        title: "",
        year: "",
        description: "",
        image: "",
        rating :0,
        rated : 0
    })
  
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        async function getData() {
            setLoading(true)
            const _doc = doc(db, "movies", id)
            const _data = await getDoc(_doc)
            setData(_data.data())
            setLoading(false)

        }
        getData()
    }, [])
    return (
        <div className='flex justify-center flex-col md:flex-row items-center md:items-start p-4 mt-10 w-full'>
           {
                loading ? <div className='w-full  flex justify-center items-center h-96'><Oval color='white'/></div> :
               <>
                <img className='h-96 md:sticky top-24' src={data.image} />
                <div className='md:ml-4 ml-0 w-full md:w-1/2 '>
                    <h1 class="text-gray-400 text-3xl title-font font-medium mb-1">{data.title} <span className='text-sm title-font text-gray-500 tracking-widest'>({data.year})</span></h1>
                    <ReactStars
                        count={5}
                        half={true}
                        size={20}
                        value={data.rating/data.rated}
                        edit={false}
                        color2={'#ffd700'} />
                    <p className='mt-2'>
                        {data.description}
                    </p>
                    <Reviews id={id} prevRating={data.rating} userRated={data.rated}/>
                </div>
            </>
                    }
        </div>
    )
}

export default Detail