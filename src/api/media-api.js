import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PIXABAY_KEY = import.meta.env.VITE_PEXABAY_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;


export async function fetchphotos(query, page = 1, per_page = 20) {
    const res = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
            params: {
                query,
                page,
                per_page,
            },
            headers: {
                Authorization: `Client-ID ${UNSPLASH_KEY}`,
            },
        }
    );

    
    return res.data.results;
}



export const fetchVideos = async (query) => {
    const response = await fetch(
        `https://pixabay.com/api/videos/?key=${PIXABAY_KEY}&q=${encodeURIComponent(query)}&per_page=20`
    )

    if (!response.ok) {
        throw new Error('Video API failed')
    }

    const data = await response.json()

    return data.hits
}




export async function fetchGIF(query,limit=20) {
    const res = await axios.get(
        "https://api.giphy.com/v1/gifs/search",
        {
            params: {q: query, api_key: GIPHY_KEY, limit:limit},
            
        }
    );

    
    return res.data.data;
}




