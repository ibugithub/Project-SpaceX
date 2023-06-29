import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions);

  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="Table2-Container">
      <h2>My Missions</h2>
      <table className="List-missions">
        {joinedMissions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Profile;
