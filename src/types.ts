interface ApiResponse<T> {
  currentPage: number;
  lastPage: number;
  total: number;
  nextPageUrl: string | null;
  prevPageUrl: string | null;
  data: T;
}
