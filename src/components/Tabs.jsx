import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs =['PHOTOS', 'VIDEOS', 'GIF']

    const dispatch = useDispatch()

    const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-10 bg-sky-900 p-2 justify-around'>
            {tabs.map(function(elem,idx){
                return ( <button className={`${activeTab ==  elem ? 'bg-sky-600 font-medium' : 'bg-gray-800'} transition cursor-pointer p-1.5 rounded text-lg active:scale-90`} 
                key={idx}
                onClick={()=>{
                    dispatch(setActiveTab(elem))
                }}
                >
                    {elem}
                    </button>
                    )
            })
        }
    </div>
  )
}

export default Tabs