// import axios from 'axios';

// export const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';

// export const fetchMissionsSuccess = (missions) => ({
//   type: FETCH_MISSIONS_SUCCESS,
//   payload: missions,
// });

// export const fetchMissions = () => (dispatch) => {
//   axios.get('https://api.spacexdata.com/v3/missions')
//     .then((res) => {
//       dispatch(fetchMissionsSuccess(res.data));
//     })
//     .catch((error) => {
//       // Handle error if needed
//       console.error('Error fetching missions:', error);
//     });
// };
