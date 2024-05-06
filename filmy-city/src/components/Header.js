import React, { useContext } from 'react'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { AppState } from '../App';

const Header = () => {
    const useAppState = useContext(AppState)
    return (
        <div className='flex justify-between items-center border-b-2 border-gray-300'>
            <Link to='/'>
                <p className='text-2xl text-red-600 font-bold p-3'>Filmy<span className='text-white'>City</span></p>
            </Link>

            <p className='text-white flex mr-3 item-center text-lg cursor-pointer'>



                <Link to='/addmovies'>
                    <Button className='flex items-center justify-center'>
                        <AddIcon className='mr-1 ' color='secondary' /><span className='text-white'>Add New</span>
                    </Button>

                </Link>

                <Link to='/login'>
                    <Button>
                        <span className='text-white font-medium  bg-green-500 px-4 py-2'>Login</span>
                    </Button>

                </Link>

            </p>

        </div>
    )
}

export default Header