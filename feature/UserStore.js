import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 token:"",
 departure:"",
 destination:""
}

const UserStore = createSlice({
  name: "UserStore",
  initialState,
  reducers: {
    setToken:(state,action)=>{
  state.token=action.payload.token
    }
  },
  setDeparture:(state,action)=>{
    state.departure=action.payload.departure
      },
      setDestination:(state,action)=>{
        state.destination=action.payload.destination
          },

});

export const {
  setToken,
  setDestination,
  setDeparture
} = UserStore.actions
export const selectToken=(state)=>state.User.phone
export const selectDeparture=(state)=>state.User.departure
export const selectDestination=(state)=>state.User.destination

export default UserStore.reducer