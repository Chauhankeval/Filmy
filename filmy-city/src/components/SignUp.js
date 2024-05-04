import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import Video2 from '../Video/bg-2.mp4'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import app from '../Firebase/Firebase'
import swal from 'sweetalert';
import { userRef } from '../Firebase/Firebase'
import { addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(app)
auth.settings.appVerificationDisabledForTesting = true;

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signup = async () => {
    setLoading(true);
    if (name === "" || email === "" || password === "") {
      return toast.error("All fields are required");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now()
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Signup Succesfully");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };




  return (
    <div className='w-[100%] h-[100vh] relative top-0 '>

      <video className='w-[100%] h-[100%] object-cover ' src={Video2} autoPlay loop muted ></video>
      <section className="video text-gray-40 body-font absolute top-0 w-[100%] h-[100%]">
        <div id='recaptcha-container'>




          <div className="container px-5 py-20 mx-auto flex flex-wrap items-center justify-center">


            <div className=" md:w-1/2 bg-gray-900 bg-opacity-30 rounded-lg p-8 flex flex-col justify-center mt-10 md:mt-0">
              <h2 className="text-white text-lg font-medium title-font mb-5">SignUp</h2>

              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-white">Name</label>
                <input type="text"
                  typeof='number'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-white">Mobile No</label>
                <input type="text"
                  typeof='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-white">Password</label>
                <input type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div className="p-2 w-full">
                <button onClick={signup} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  {
                    loading ? <TailSpin height={25} color='white' /> : "Request OTP"
                  }</button>
              </div>

              <p className="text-xs mt-3 ">Alredy Have Account
                <Link to={'/login'}>
                  <span className='text-blue-500 ml-2 underline'>Login</span>
                </Link>
              </p>

            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default SignUp;
