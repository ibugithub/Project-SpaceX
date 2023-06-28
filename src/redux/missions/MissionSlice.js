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

// import { FETCH_MISSIONS_SUCCESS } from '../actions/missionsActions';

// const initialState = {
//   missions: [],
// };

// const missionsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_MISSIONS_SUCCESS:
//       return {
//         ...state,
//         missions: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default missionsReducer;
