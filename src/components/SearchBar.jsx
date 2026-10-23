import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault(),

        dispatch(setQuery(text))

        setText('')
        
    }

  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)}} className='flex bg-(--c2) gap-4 py-5.5 px-7'>
            
                <input
                value={text} onChange={(e)=>setText(e.target.value)}
                 required type="text" placeholder='Search Anything...'
                  className='bg-(--c2) text-white border outline-none rounded   w-[90%] p-3 m-2' />
                  
                <button className=' rounded cursor-pointer bg-(--c2) border  p-1 mt-3 h-10 text-xl w-[10%] hover:bg-(--c1) active:scale-95'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar