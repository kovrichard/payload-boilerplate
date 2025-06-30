import * as migration_20250630_145036 from "./20250630_145036";

export const migrations = [
  {
    up: migration_20250630_145036.up,
    down: migration_20250630_145036.down,
    name: "20250630_145036",
  },
];
