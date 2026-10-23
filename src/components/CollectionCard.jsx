import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removetoast } from '../redux/features/collectionSlice';

const CollectionCard = ({item}) => {
    const dispatch = useDispatch()

    const removeFromCollection = (item)=>{
        dispatch(removeCollection(item.id))
        dispatch(removetoast())
    }

  return (
    <div>
        <div className='w-[17vw] relative h-70  bg-white rounded-xl overflow-hidden '>
            <a target='_blank' className='h-full' href={item.url}>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
                {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} /> : ''}
            </a>
            <div id='bottom' className='flex justify-between gap-4 items-center w-full py-6 px-3 absolute bottom-0 text-white'>
                <h2 className='text-sm font-semibold capitalize h-10 mt-4 overflow-hidden'>{item.title}</h2>
                <button
                    onClick={() => {
                        removeFromCollection(item)
                        
                    }}
                    className='bg-indigo-600 active:scale-90 cursor-pointer text-white rounded px-2 py-1 text-sm font-medium'
                >
                    Remove
                </button>
            </div>
        </div>
    </div>
  )
}

export default CollectionCard