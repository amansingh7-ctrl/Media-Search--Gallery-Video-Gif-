import { useDispatch, useSelector } from 'react-redux'
import { fetchphotos, fetchVideos, fetchGIF } from '../api/media-api'
import {  setLoading, setError, setResults, } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'



const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)


    useEffect(function () {
        if (!query) return 
        const getData = async () => {

            try {
                dispatch(setLoading())

                let data = []

                if (activeTab === 'PHOTOS') {
                    data = await fetchphotos(query)
                    data = data.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html
                    }))

                }
                if (activeTab === 'VIDEOS') {
                    data = await fetchVideos(query)
                    data = data.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user || 'video',
                        thumbnail: item.videos?.medium?.thumbnail || item.videos?.small?.thumbnail,
                        src: item.videos?.medium?.url || item.videos?.small?.url,
                        url:item.pageURL

                    }))
                }
                if (activeTab === 'GIF') {
                    data = await fetchGIF(query)
                    data = data.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        title: item.title || 'GIF',
                        thumbnail: item.images?.fixed_width?.url,
                        src: item.images?.original?.url,
                        url:item.url
                    }))
                }
                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message))
            }

        }
        getData()
    }, [query, activeTab,dispatch])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>


    return (
        <div className='flex justify-center bg-gray-900 w-full flex-wrap gap-6 overflow-auto py-5 px-10'>
            {results.map((item, idx) => {
                return  <div key={idx}>
                 <ResultCard item={item} /> 
                </div>
        })}
        </div>
    )
}

export default ResultGrid