import { createSlice } from '@reduxjs/toolkit';

const browseUserSlice = createSlice({
  name: 'browseUser',
  initialState: {
    currentUser: {currentUser: {}},
    userId: 1,
    loading: false
    },
    reducers: {
        fetchUser: (state, action) => {
            state.loading = true;
            state.currentUser = action.payload.currentUser; 
        },
        prevUser: (state) => {
            if (state.userId < 1) {
                return
            }
            state.userId -= 1;
        },
        nextUser: (state) => {
            state.userId += 1;
        },
        }
    });
export const { fetchUser, prevUser, nextUser} = browseUserSlice.actions;
export default browseUserSlice.reducer;