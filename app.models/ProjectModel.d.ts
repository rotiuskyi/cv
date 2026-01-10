/**
 * ProjectModel represents a project entry with its details.
 */
declare class ProjectModel {
  /** The title/name of the project */
  title: string;

  /** The company of the project */
  company: string;

  /** Description of the project */
  description: string;

  /** The role/position held during the project */
  role: string;

  /** The period of involvement (e.g., "Sept 2023 - Dec 2024 (1 year 4 months)") */
  involvedPeriod: string;

  /** List of responsibilities, either as an array of strings or a single string */
  responsibilities: string[];

  /** Optional URL to the project */
  projectUrl?: string;

  /**
   * Creates a new ProjectModel instance.
   * @param title - The title/name of the project
   * @param company - The company of the project
   * @param description - Description of the project
   * @param role - The role/position held during the project
   * @param involvedPeriod - The period of involvement
   * @param responsibilities - List of responsibilities
   * @param projectUrl - Optional URL to the project
   */
  constructor(
    title: string,
    company: string,
    description: string,
    role: string,
    involvedPeriod: string,
    responsibilities: string[],
    projectUrl?: string
  );
}

export default ProjectModel;

