import type { AxiosError } from "axios";

import { showToast } from "./toast";

export function onError(err: unknown) {
  const error = err as AxiosError<{ error: string; message: string }>;

  console.error(error.response?.data.error);
  return showToast("error", error.response?.data.error);
}