import type { VNode } from "../unpkg/preact";

/**
 * Props for the Project component
 */
export interface ProjectProps {
  /** The title/name of the project */
  title: string;

  /** The company name */
  company: string;
  
  /** Description of the project */
  description: string;
  
  /** The role/position held during the project */
  role: string;
  
  /** The period of involvement */
  involvedPeriod: string;
  
  /** List of responsibilities */
  responsibilities: string[];
  
  /** Technologies used in the project */
  usedTechnologies?: string;
  
  /** Optional URL to the project */
  projectUrl?: string;
}

/**
 * Project component that renders project information
 */
declare function Project(props: ProjectProps): VNode<any>;

export default Project;
