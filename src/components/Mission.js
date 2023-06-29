import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { storeMissions, joinMission } from '../redux/missions/MissionSlice';
import '../styles/Mission.css';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/missions')
      .then((res) => {
        dispatch(storeMissions(res.data));
      });
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  return (
    <div className="tablecontainer">
      <div className="tablechild">
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="name">{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td className="btn">
                  <button className="not-member-btn" type="button">NOT A MEMBER</button>
                </td>
                <td>
                  <button type="button" onClick={() => handleJoinMission(mission.mission_id)}>
                    Join Mission
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Missions;
