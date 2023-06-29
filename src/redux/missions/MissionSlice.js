import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    storeMissions: (state, action) => action.payload,
    joinMission: (state, action) => {
      const missionId = action.payload;
      return state.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: true } : mission));
    },
    // other actions...
  },
});

const { reducer: missionReducer, actions: { storeMissions, joinMission } } = missionSlice;

export { storeMissions, joinMission };
export default missionReducer;
