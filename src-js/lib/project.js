import path from "node:path";
import { ROOT, readJson } from "./io.js";

export function loadProject() {
  const manifest = readJson(path.join(ROOT, "maaw.project.json"));
  const resolve = (relative) => path.join(ROOT, relative);
  return {
    manifest,
    root: ROOT,
    paths: Object.fromEntries(
      Object.entries(manifest.canonicalPaths).map(([key, value]) => [key, resolve(value)])
    )
  };
}
