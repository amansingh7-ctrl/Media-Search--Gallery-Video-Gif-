import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className=' flex justify-between items-center  py-5 px-10 bg-(--c1) '>
            <h2 className='font-semibold text-2xl'>Media Seacrh</h2>
            <div className='flex gap-9  items-center'>
            <Link className='text-lg font-medium bg-sky-700 text-white hover:bg-sky-900 rounded px-3 active:scale-90 py-1.5' to='/'> Search</Link>
            <Link className='text-lg font-medium bg-sky-700 text-white hover:bg-sky-900 rounded px-3 active:scale-90 py-1.5' to='/collection'> Collection</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar