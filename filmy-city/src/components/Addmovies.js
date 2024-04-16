import React, { useState } from 'react'
import Video from '../Video/bg-mp4.mp4'
import { TailSpin } from 'react-loader-spinner'
import { addDoc } from 'firebase/firestore'
import { moviesRef, db } from '../Firebase/Firebase'
import swal from 'sweetalert'


const Addmovies = () => {

    const [form, setFrom] = useState({
        title: "",
        year: "",
        description: "",
        image: "",
        rated : 0,
        rating :0

    })

    const [loading, setLoading] = useState(false)

    const AddMovie = async () => {
        setLoading(true)
        try {
            await addDoc(moviesRef, form)
            swal({
                title: "Successfully Added",
                icon: "success",
                buttons: "Aww yaa!!",
                timer: 3000
            })
            setFrom({
                title: "",
                year: "",
                description: "",
                image: ""
            })

        } catch (err) {
            swal({
                title: "error",
                icon: "error",
                buttons: "Aww yaa!!",
                timer: 3000
            })
        }
        setLoading(false)

    }
    return (
        <div className='w-[100%] h-[100vh] relative top-0'>
            <video className='w-[100%] h-[100%] object-cover ' src={Video} autoPlay loop muted ></video>
            <section class="text-gray-600 body-font absolute top-0 w-[100%] h-[100%] flex flex-col justify-center items-center">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-col text-center w-full mb-5">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add Movies</h1>

                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-white">Title</label>
                                    <input
                                        value={form.title}
                                        onChange={(e) => setFrom({ ...form, title: e.target.value })}
                                        type="text" id="name" name="name" class="w-full text-black bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="number" class="leading-7 text-sm text-white">Year</label>
                                    <input
                                        value={form.year}
                                        onChange={(e) => setFrom({ ...form, year: e.target.value })}
                                        type="email" id="email" name="email" class="w-full text-black bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>


                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm text-white">Image Link</label>
                                    <input
                                        value={form.image}
                                        onChange={(e) => setFrom({ ...form, image: e.target.value })}
                                        id="message" name="message" class="w-full text-black bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm text-white">Description</label>
                                    <textarea
                                        value={form.description}
                                        onChange={(e) => setFrom({ ...form, description: e.target.value })}
                                        id="message" name="message" class="w-full text-black bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>

                            <div class="p-2 w-full">
                                <button onClick={AddMovie} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{
                                    loading ? <TailSpin height={25} color='white' /> : "Submit"
                                }</button>
                            </div>
                            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">





                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Addmovies