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
  reportingOfficerType: string | null;
  reportingOfficerId: number | null;
  locationId: number | null;
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

interface AdminUser {
  id: number;
  username: string;
  firstName: number;
  lastName: string;
  email: string;
  phoneNumber: string;
  imageUrl: string | null;
  isActive: boolean;
  lastLogin: Date | null;
  userType: string;
  reportingOfficerType: Date | null;
  failedLoginAttemptCount: number;
  deactivationReason: string | null;
  activatedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  createdById: PermId | null;
  updatedById: PermId | null;
  reportingOfficerId: PermId | null;
  roleId: PermId | null;
  locationId: PermId | null;
  assigneeId: PermId | null;
  role: Role | null;
  location: ILocation | null;
}

interface Role {
  id: PermId;
  name: string;
  isDefault: boolean;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  createdById: PermId | null;
  permissions: PermId[];
}

interface ILocation {
  id: PermId;
  name: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
  createdById: PermId | null;
  updatedById: PermId | null;
}
