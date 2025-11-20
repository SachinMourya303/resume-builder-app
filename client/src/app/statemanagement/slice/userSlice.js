import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   userData: "",
}

const userSlice = createSlice({
   name: 'userAuth',
   initialState,
   reducers: {
      logIn: (state, action) => {
         state.userData = action.payload
      },

      logOut: (state) => {
         localStorage.removeItem('userData');
         state.userData = "";
      },
   }
})

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;