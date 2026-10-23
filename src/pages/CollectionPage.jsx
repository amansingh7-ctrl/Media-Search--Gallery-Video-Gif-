import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import CollectionCard from '../components/CollectionCard';
import { clearallcol, clearCollection } from '../redux/features/collectionSlice';

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)

  const dispatch = useDispatch()

  const clearAll =()=>{
    dispatch(clearCollection())
    dispatch(clearallcol())
  }

  return (
    <div className='overflow-auto'>
      <div className='flex justify-between bg-(--c2) py-4 px-5 items-center'>
        <h2 className='text-2xl font-semibold px-5 hover:underline'>
          {collection.length>0?'Your Collection':'Collection Empty'}
        </h2>

        {collection.length>0?<button
        onClick={()=>{
          clearAll()
        }}
         className='text-lg  bg-red-600 text-white font-semibold hover:bg-red-700 transition cursor-pointer rounded px-3 active:scale-90 py-1.5' 
         >
          Clear Collection </button>:''}

      </div>
      {collection.length>0?<div className='flex bg-gray-900 w-full flex-wrap gap-6 py-6 px-5'>
      {collection.map((item,idx)=>{
        return <div key={idx}>
          <CollectionCard item={item} />
        </div>
      })}
    </div>:<div>
      <h2 className='flex items-center mt-[2em] font-semibold hover:underline justify-center text-9xl'>Collection Empty..</h2>
      </div>}
    </div>
  )
}

export default CollectionPage