import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets/';
const initialState = {
  rockets: [],
};

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books', error);
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const allRockets = action.payload;
      const cleanedData = allRockets.map((rocket) => (
        {
          id: rocket.id,
          name: rocket.rocket_name,
          type: rocket.rocket_type,
          image: rocket.flickr_images[0],
          description: rocket.description,
        }
      ));
      state.rockets = cleanedData;
    });
  },
});

export default rocketsSlice.reducer;
export const { updateName } = rocketsSlice.actions;
export { fetchRockets };
