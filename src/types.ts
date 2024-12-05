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
