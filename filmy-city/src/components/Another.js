import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import Video2 from '../Video/bg-2.mp4'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth'
import app from '../Firebase/Firebase'
import swal from 'sweetalert';
const auth = getAuth(app)

const Login = () => {
  const [Form, setFrom] = useState({
    name: "",
    mobile: "",
    password: ""
  })
  const [loading, setLoading] = useState(false)
  const [sentotp, setSentOtp] = useState(false)
  const [OTP, SetOPT] = useState("")

  const generateRecaptha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'visible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);
  }

  const requestOtp = () => {
    setLoading(true);
    generateRecaptha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+91${Form.mobile}`, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        swal({
          text: "OTP Sent",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        setSentOtp(true)
        setLoading(false);
      }).catch((error) => {
        console.log(error)
      })
  
  }

  return (
    <div className='w-[100%] h-[100vh] relative top-0 '>

      <video className='w-[100%] h-[100%] object-cover ' src={Video2} autoPlay loop muted ></video>
      <section class="video text-gray-40 body-font absolute top-0 w-[100%] h-[100%]">




        <div class="container px-5 py-20 mx-auto flex flex-wrap items-center justify-center">
          {sentotp ?
            <>
              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-white">Enter OTP</label>
                <input type="text"
                  typeof='number'
                  value={OTP}
                  onChange={(e) => SetOPT(e.target.value)}
                  id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{
                  loading ? <TailSpin height={25} color='white' /> : "Confirm OTP"
                }</button>
              </div>

            </>
            :

            <div class=" md:w-1/2 bg-gray-900 bg-opacity-30 rounded-lg p-8 flex flex-col justify-center mt-10 md:mt-0">
              <h2 class="text-white text-lg font-medium title-font mb-5">SignUp</h2>

              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-white">Name</label>
                <input type="text"
                  typeof='number'
                  value={Form.name}
                  onChange={(e) => setFrom({ ...Form, name: e.target.value })}
                  id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-white">Mobile No</label>
                <input type="text"
                  typeof='number'
                  value={Form.mobile}
                  onChange={(e) => setFrom({ ...Form, mobile: e.target.value })}
                  id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-white">Password</label>
                <input type="password"
                  value={Form.password}
                  onChange={(e) => setFrom({ ...Form, password: e.target.value })}
                  id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div class="p-2 w-full">
                <button onClick={requestOtp} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  {
                  loading ? <TailSpin height={25} color='white' /> : "Request OTP"
                }</button>
              </div>

              <p class="text-xs mt-3 ">Alredy Have Account
                <Link to={'/login'}>
                  <span className='text-blue-500 ml-2 underline'>Login</span>
                </Link>
              </p>

            </div>
          }
        </div>
        <div id='recaptcha-container'>

        </div>
      </section>
    </div>
  )
}

export default Login