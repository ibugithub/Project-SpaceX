import { configureStore } from '@reduxjs/toolkit';
import MissionReducer from './missions/MissionSlice';

const store = configureStore({
  reducer: {
    missions: MissionReducer,
    // other reducers...
  },
});

export default store;
