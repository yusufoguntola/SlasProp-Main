import { createBuilder } from "@ibnlanre/builder";

import { properties } from "./property";
import { user } from "./user";

export const builder = createBuilder({
  user,
  properties,
});
