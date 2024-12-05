import { createBuilder } from "@ibnlanre/builder";

import { admin } from "./admin";
import { notification } from "./notification";
import { properties } from "./property";
import { user } from "./user";

export const builder = createBuilder({
  user,
  properties,
  admin,
  notification,
});
