import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    // actions and reducers
  },
});

export const { actions, reducer } = missionSlice;
export default missionSlice.reducer;
