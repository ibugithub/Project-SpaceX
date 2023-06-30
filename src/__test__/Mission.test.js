import missionReducer, {
  storeMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/MissionSlice';

describe('missionSlice', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      const initialState = [];
      const nextState = missionReducer(undefined, {});
      expect(nextState).toEqual(initialState);
    });

    it('should handle storeMissions', () => {
      const missions = [{ mission_id: 1, reserved: false }, { mission_id: 2, reserved: false }];
      const nextState = missionReducer([], storeMissions(missions));
      expect(nextState).toEqual(missions);
    });

    it('should handle joinMission', () => {
      const missions = [
        { mission_id: 1, reserved: false },
        { mission_id: 2, reserved: false },
      ];
      const missionId = 1;
      const nextState = missionReducer(missions, joinMission(missionId));
      expect(nextState).toEqual([
        { mission_id: 1, reserved: true },
        { mission_id: 2, reserved: false },
      ]);
    });

    it('should handle leaveMission', () => {
      const missions = [
        { mission_id: 1, reserved: true },
        { mission_id: 2, reserved: false },
      ];
      const missionId = 1;
      const nextState = missionReducer(missions, leaveMission(missionId));
      expect(nextState).toEqual([
        { mission_id: 1, reserved: false },
        { mission_id: 2, reserved: false },
      ]);
    });
  });
});
