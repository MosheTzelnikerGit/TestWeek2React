import roles from "../data/roles.json";


interface IRole {
  role: string;
}

interface IuseActivityParams {
  activity: string;
  role: string | IRole; 
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const roleValue = typeof role === 'object' && role !== null ? role.role : role;

  const activityIndex = activities.indexOf(activity);
  if (activityIndex === -1) {
    return false;
  }
  const roleIndex = roles.indexOf(roleValue);
  if (roleIndex === -1) {
    return false;
  }

  return roleIndex >= activityIndex;
};

export default useIsVerified;
