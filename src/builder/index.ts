import { createBuilder } from "@ibnlanre/builder";

import { notification } from "./notification";
import { properties } from "./property";
import { user } from "./user";

export const builder = createBuilder({
  user,
  properties,
  notification,
});
