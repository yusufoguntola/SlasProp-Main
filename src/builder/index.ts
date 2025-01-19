import { createBuilder } from "@ibnlanre/builder";

import { admin } from "./admin";
import { messaging } from "./messages";
import { notification } from "./notification";
import { payments } from "./payments";
import { properties } from "./property";
import { user } from "./user";

export const builder = createBuilder({
  user,
  properties,
  admin,
  notification,
  payments,
  messaging,
});
