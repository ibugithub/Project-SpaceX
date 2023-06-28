/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Missions() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/missions')
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="tablecontainer">
      <div className="tablechild">
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
            data.map((missions, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={index}>
                <td>{missions.mission_name}</td>
                <td>{missions.description}</td>
                <td>{missions.mission_id}</td>
              </tr>
            ))
          }
          </tbody>
        </table>

      </div>
    </div>
  );
}
export default Missions;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMissions } from '../actions/missionsActions';

// function Missions() {
//   const dispatch = useDispatch();
//   const missions = useSelector((state) => state.missions.missions);

//   useEffect(() => {
//     dispatch(fetchMissions());
//   }, [dispatch]);

//   return (
//     <div className="tablecontainer">
//       <div className="tablechild">
//         <table>
//           <thead>
//             <tr>
//               <th>Mission</th>
//               <th>Description</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               data.map((missions, index) => (
//                 // eslint-disable-next-line react/no-array-index-key
//                 <tr key={index}>
//                   <td>{missions.mission_name}</td>
//                   <td>{missions.description}</td>
//                   <td>{missions.mission_id}</td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>

//       </div>
//     </div>
//   );
// }

// export default Missions;
