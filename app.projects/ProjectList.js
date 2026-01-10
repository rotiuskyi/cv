import projects from "../app.projects.state/projects.js";
import Project from "./Project.js";

/**
 * 
 * @returns {import("../unpkg/preact").VNode}
 */
function ProjectList() {
  return html`
    <ul>
      ${projects.projectList.value.map(project => {
        return html`
          <li key=${project.title}>
            <${Project}
              title=${project.title}
              company=${project.company}
              description=${project.description}
              role=${project.role}
              involvedPeriod=${project.involvedPeriod}
              responsibilities=${project.responsibilities}
              projectUrl=${project.projectUrl}
            />
          </li>`
        })}
    </ul>`;
}

export default ProjectList;
