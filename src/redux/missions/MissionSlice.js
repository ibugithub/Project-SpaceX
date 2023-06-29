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
    leaveMission: (state, action) => {
      const missionId = action.payload;
      return state.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: false } : mission));
    },
  },
});

const { reducer: missionReducer, actions } = missionSlice;
export const { storeMissions, joinMission, leaveMission } = actions;
export default missionReducer;
