import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 phone:""
}

const UserStore = createSlice({
  name: "UserStore",
  initialState,
  reducers: {
    setPhone:(state,action)=>{
  state.phone=action.payload.phone
    }
  }
});

export const {
  setPhone
} = UserStore.actions
export const selectPhone=(state)=>state.User.phone
export default UserStore.reducer