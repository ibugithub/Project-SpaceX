import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [], // Add your initial state here
  reducers: {
    // Define your actions and reducers here
  },
});

export const { actions, reducer } = rocketsSlice;
export default rocketsSlice.reducer;
