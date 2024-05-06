import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../Firebase/Firebase';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Video from '../Video/bg-2.mp4'

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async () => {
    setLoading(true);
    if (name === '' || email === '' || password === '') {
      toast.error('All fields are required');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = {
        name: name,
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        time: Timestamp.now()
      };

      const userRef = collection(db, 'user');
      await addDoc(userRef, newUser);

      toast.success('Signup successful');
      setName('');
      setEmail('');
      setPassword('');
      window.location.href = '/login'
    } catch (error) {
      console.error('Error signing up:', error.message);
      toast.error('Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-screen relative top-0'>
      <video className='w-[100%] h-[100%] object-cover ' src={Video} autoPlay loop muted ></video>
      <section className="video text-gray-40 body-font absolute top-0 w-full h-full">
        <div id='recaptcha-container'>
          <div className="container px-5 py-20 mx-auto flex flex-wrap items-center justify-center">
            <div className="md:w-1/2 bg-gray-900 bg-opacity-30 rounded-lg p-8 flex flex-col justify-center mt-10 md:mt-0">
              <h2 className="text-white text-lg font-medium title-font mb-5">SignUp</h2>

              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-white">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="full-name"
                  name="full-name"
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-white">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-orange-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="p-2 w-full">
                <button
                  onClick={signup}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  disabled={loading}
                >
                  {loading ? <span>Loading...</span> : <span>Submit</span>}
                </button>
              </div>

              <p className="text-xs mt-3">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 ml-2 underline">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
