import { configureStore } from '@reduxjs/toolkit';
import UserStoreReducer from "../feature/UserStore";
export default configureStore({
  reducer: {
    User:UserStoreReducer,
  },
  
});