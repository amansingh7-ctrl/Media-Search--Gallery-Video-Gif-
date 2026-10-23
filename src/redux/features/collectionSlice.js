import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast, Zoom } from 'react-toastify';


const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id == action.payload.id
            )

            if (!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))


            }
        },
        removeCollection: (state, action) => {

            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items))

        },
        clearCollection: (state) => {
            state.items = [];
            localStorage.removeItem('collection')
        },
        addedtoast: () => {
            toast.success('Added to Collection...✅', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removetoast: () => {
            toast.error('Remove to Collection...❌', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });

        },
        clearallcol: () => {

            toast.error('All Collection Clear...!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }

    }
})

export const { addCollection, clearallcol, removetoast, removeCollection, addedtoast, clearCollection } = collectionSlice.actions;

export default collectionSlice.reducer;