interface RoleCreationPayload {
  name: string;
  description: string;
  permissionIds: PermId[];
}

type PermId = number;

interface UserCreationPayload {
  email: string;
  username: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  imageUrl: string;
  roleId: number;
  reportingOfficerType: string;
  reportingOfficerId: number;
  locationId: number;
}

interface UserStatusPayload {
  username: string;
  isActive: boolean;
}

interface ToolCreationPayload {
  name: string;
  categoryId: number;
  locationId: number;
}
