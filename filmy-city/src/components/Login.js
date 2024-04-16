import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import Video2 from '../Video/bg-2.mp4'

const Login = () => {
    const [Form, setFrom] = useState({
        mobile: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)





    return (
        <div className='w-[100%] h-[100vh] relative top-0'>
            <video className='w-[100%] h-[100%] object-cover ' src={Video2} autoPlay loop muted ></video>
            <section class="text-gray-40 body-font video text-gray-40 body-font absolute top-0 w-[100%] h-[100%]">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">

                    {/* text side  */}
                    <div class="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl text-white">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
                        <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div>

                    {/* login side  */}
                    <div class="lg:w-3/6 md:w-1/2 bg-gray-900 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-white text-lg font-medium title-font mb-5">Login</h2>
                        <div class="relative mb-4">
                            <label for="full-name" class="leading-7 text-sm text-gray-400">Mobile No</label>
                            <input type="text"
                                typeof='number'
                                value={Form.mobile}
                                onChange={(e) => setFrom({ ...Form, mobile: e.target.value })}
                                id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div class="relative mb-4">
                            <label for="full-name" class="leading-7 text-sm text-gray-400">Password</label>
                            <input type="password"
                                value={Form.password}
                                onChange={(e) => setFrom({ ...Form, password: e.target.value })}
                                id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div class="p-2 w-full">
                            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                {
                                loading ? <TailSpin height={25} color='white' /> : "Submit"
                            }</button>
                        </div>
                        <p class="text-xs mt-3 ">don't have a Account?
                            <Link to={'/singup'}>
                                <span className='text-blue-500 ml-2 underline'>Sing Up</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login