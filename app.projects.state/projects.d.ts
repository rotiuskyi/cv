import type { Signal } from "../unpkg/signals-core.d.ts";
import type ProjectModel from "../app.models/ProjectModel.js";

/**
 * ProjectsExports class that contains the project list signal
 */
declare class ProjectsExports {
  /** Signal containing an array of ProjectModel instances */
  projectList: Signal<ProjectModel[]>;
}

/**
 * Projects module that provides access to the project list
 */
declare const projects: ProjectsExports;

export default projects;
