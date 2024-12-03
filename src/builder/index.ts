import { createBuilder } from "@ibnlanre/builder";

import { property } from "./property";
import { user } from "./user";

export const builder = createBuilder({
  user,
  property,
});
