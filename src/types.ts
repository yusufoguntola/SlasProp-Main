interface ApiResponse<T> {
  currentPage: number;
  lastPage: number;
  total: number;
  nextPageUrl: string | null;
  prevPageUrl: string | null;
  data: T;
}

interface User {
  username: string;
  role?: {
    id: number;
    name: string;
    permissions: string[];
  };
  name: string;
}

interface PostResponse<T> {
  data: T;
  message: string;
}

interface RTask {
  id: PermId;
  taskId: string;
  type: string;
  status: "Pending" | "Submitted" | (string & {});
  stage: string;
  coordinates: Array<{ latitude: number; longitude: number }> | null;
  photographUrl: string | null;
  idCardUrl: string | null;
  proofOfOwnershipUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  createdById: PermId;
  propertyRequestId: PermId;
  demarcationOfficerId: PermId | null;
  recordingOfficerId: PermId | null;
  fieldAssistantId: PermId | null;
  propertyQueryId: PermId;
  propertyQuery: PropertyQuery | null;
}
