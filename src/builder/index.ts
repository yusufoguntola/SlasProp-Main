import { createBuilder } from "@ibnlanre/builder";

import { admin } from "./admin";
import { properties } from "./property";
import { user } from "./user";

export const builder = createBuilder({
  user,
  properties,
  admin,
});
