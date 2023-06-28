import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    storeMissions: (state, action) => action.payload,
    // other actions...
  },
});

const { reducer: missionReducer, actions: { storeMissions } } = missionSlice;

export { storeMissions };
export default missionReducer;
