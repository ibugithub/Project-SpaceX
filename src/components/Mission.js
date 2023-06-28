import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { storeMissions } from '../redux/missions/MissionSlice';
import '../styles/Mission.css';

function Missions() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/missions')
      .then((res) => {
        setData(res.data);
        dispatch(storeMissions(res.data));
      });
  }, [dispatch]);

  return (
    <div className="tablecontainer">
      <div className="tablechild">
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>.</th>
            </tr>
          </thead>
          <tbody>
            {data.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td><button type="button">Not a Member</button></td>
                <td><button type="button">Join Mission</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Missions;
