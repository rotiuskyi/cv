class ProjectModel {
  constructor(
    title,
    company,
    description,
    role,
    involvedPeriod,
    responsibilities,
    projectUrl,
  ) {
    this.title = title;
    this.company = company;
    this.description = description;
    this.role = role;
    this.involvedPeriod = involvedPeriod;
    this.responsibilities = responsibilities;
    this.projectUrl = projectUrl;
  }
}

export default ProjectModel;
