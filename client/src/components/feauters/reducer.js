import {createSlice} from '@reduxjs/toolkit';

export const musicSlice = createSlice({
    name:"music",
    initialState: { value: {
        id: 1,
        name: "Bad Guy",
        author: "Billie Eilish",
        path: "/static/media/Billie_Eilish_-_Bad_Guy.25213d87437fab9c5bca.mp3"
    }},
    reducers:{ 
        changeSong : (state,action)=>{ 
            state.value = action.payload
        } 
     }
});

export const  {changeSong} =  musicSlice.actions;
export default musicSlice.reducer