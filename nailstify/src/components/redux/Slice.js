import { createSlice } from "@reduxjs/toolkit";

export const UserSlice= createSlice({
    name:'user',
    initialState:{
        data:[]
    },
    reducers:{addUser(state,action){
state.data.data(action.payload)
    }
}
})

export const { addUser} = UserSlice.reducer
export default UserSlice.reducer