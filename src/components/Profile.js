import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions);

  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div>
      <h2>My Missions</h2>
      <table>
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
