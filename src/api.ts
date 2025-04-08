import { remultNextApp } from "remult/remult-next";

import { Task } from "@/shared/Task";

export const api = remultNextApp({
  admin: true,
  entities: [Task],
});
