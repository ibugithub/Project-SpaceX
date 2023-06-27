import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/RocketsSlice';
import missionReducer from './missions/MissionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionReducer,
  },
});

export default store;
