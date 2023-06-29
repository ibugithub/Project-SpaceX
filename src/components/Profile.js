import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions);

  // Filter the missions based on the `reserved` key being `true`
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div>
      <h2>Joined Missions:</h2>
      <div className="mission-list">
        {joinedMissions.length > 0 ? (
          <ul>
            {joinedMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        ) : (
          <p>No joined missions found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
