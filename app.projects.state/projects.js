import { signal } from "@preact/signals";
import ProjectModel from "../app.models/ProjectModel.js";

function Projects() {
  const projectList = signal([
    new ProjectModel(
      "Navigation, Flight Planning and Flight Control Software",
      "Aircraft/UAV designer and manufacturer",
      ".NET, C#, Windows Forms, TypeScript, JavaScript, Preact, Preact Signals, Python, FastAPI, Docker, Postgres, Postgis, Gitlab CI/CD, Vitest, GCP, Azure",
      "Lead Software Engineer",
      "Jul 2024 - Present",
      [
        "Working on design documents and technical requirements",
        "Leading a team focused on designing and developing software for navigation, flight planning, flight control, hardware device integration, and integration with external systems"
      ]
    ),
    new ProjectModel(
      "єЧерга - Fast border crossing",
      "Digital City",
      "TypeScript, Nuxt/Vue.js, Pinia, Tanstack/Vue Query, Tailwind CSS, Vitest, Playwright",
      "Lead Software Engineer",
      "Sept 2023 - Jul 2024 (10 months)",
      [
        "Ensured a feature-rich and user-friendly experience under tight deadlines, avoiding shortcuts that would compromise functionality",
        "Led the implementation of the new transport queue type (bus) flow",
        "Led the implementation of multi-type carrier accounts",
        "Led the releases of new functionalities to production servers"
      ],
      "https://echerha.gov.ua/"
    ),
    new ProjectModel(
      "Workspace Management System (WeWork)",
      "SoftServe",
      "TypeScript, React, Monorepo (Lerna), Microfrontend (Single-spa), WebGL/Three.js, Tailwind CSS",
      "Technical Leader",
      "Jun 2021 - Jan 2023",
      [
        "Led the improvement of existing workspace management tools",
        "Solved issues related to space visualization (WebGL/Three.js)",
        "Led the development of a new, advanced location management tool",
        "Led the implementation of microfrontend architecture",
        "Led the implementation of a React-based design system"
      ]
    ),
    new ProjectModel(
      "AdTech Platform with AI Video Analysis (Qortex AI)",
      "",
      "TypeScript, C#, .NET, Node.js, Express.js, OpenAPI, React, MobX, Firebase, AWS S3, GCP",
      "Technical Leader",
      "Sep 2020 - Jun 2021",
      [
        "Bootstrapped 2 medium-sized projects for programmatic advertising and video content management across multiple social networks",
        "Collaborated with the client to clarify requirements, define project scope, and deliver software features on time",
        "Led the technical direction of the development team in the implementation, ensuring alignment with project goals and best practices",
        "Designed and implemented core software modules",
        "Conducted code reviews to ensure adherence to coding standards, software design principles, and overall code quality"
      ]
    ),
    new ProjectModel(
      "Customer engagement & marketing automation tools (Acoustic)",
      "",
      "TypeScript, React, Redux, redux-observable, RxJS, Sass, React Testing Library",
      "Senior Software Engineer",
      "Jun 2020 - Sep 2020",
      [
        "Contributed to the migration from AngularJS to React with feature improvements and bug fixes",
        "Extracted business logic from legacy code and refactored it for the new React-based implementation",
        "Collaborated with different development teams to solve feature-component dependency issues in the context of migration",
        "Designed, implemented, and applied React-driven analytics charts",
        "Wrote unit tests to ensure correctness of the new implementation"
      ]
    ),
    new ProjectModel(
      "Digital Analytics Platform (TripAdvisor)",
      "",
      "Java, Spring Boot, PostgreSQL, JavaScript, React, Redux, Semantic UI React, CSS modules",
      "Senior Software Engineer",
      "Sep 2019 - Jun 2020",
      [
        "Collaborated with stakeholders to define and clarify business requirements and technical solutions",
        "Developed web-client, backend services, APIs, database schemas and migrations to deliver the product",
        "Conducted code reviews and testing",
        "Prepared isolated feature-branch environments for testing and presentations"
      ]
    ),
    new ProjectModel(
      "Management Consulting Web Solutions (Deloitte)",
      "Trinetix",
      "TypeScript, JavaScript, Angular, React, SVG, D3.js, jQuery, Vue.js, Canvas, Lottie animations, Bootstrap, BEM",
      "Technical Leader",
      "Jan 2018 - Sep 2019 (1 yr 9 months)",
      [
        "Led the implementation of the main Deloitte design system used across projects built on top of Angular framework",
        "Led the implementation and integration of advanced CSS, JavaScript, jQuery, Three.js, Lottie animations, and HTML5 game development techniques across projects (e.g., \"Space Invaders\", \"Gravity Particles\")",
        "Led the development of small to medium-sized applications (e.g., interactive/digital kiosks, engagement maps, analytics dashboards)"
      ]
    ),
    new ProjectModel(
      "Network Management & Monitoring Platform (SolarWinds)",
      "SoftServe",
      "TypeScript, JavaScript, Angular.js, Angular, Bootstrap, TeamCity, Jasmine, Karma, Protractor",
      "Software Engineer",
      "Nov 2016 - Jan 2018 (1 yr 3 months)",
      [
        "Contributed to work planning, goals, and priority discussions",
        "Regularly presented finished work to the stakeholders during the demo sessions",
        "Migrated the core components from Angular.js to Angular 2 with improvements",
        "Contributed to the Angular-based design system widely used across the platform",
        "Designed and implemented e2e, unit, UI, and performance tests",
        "Implemented and maintained CI pipelines (TeamCity)"
      ]
    ),
    new ProjectModel(
      "Advertising CRM",
      "SvitSoft",
      "JavaScript, HTML, CSS, Angular.js, jQuery, TeamCity",
      "Junior Software Engineer",
      "June 2015 - Nov 2016 (7 months)",
      []
    ),
    new ProjectModel(
      "Real Estate Management System / Human Resources Management System",
      "Glorium Technologies",
      ".NET, C#, JavaScript, Angular.js, TeamCity, Jenkins, NUnit, Selenium WebDriver",
      "Junior QA Automation Engineer / Junior Software Engineer",
      "Dec 2014 - June 2015 (1 yr 6 months)",
      []
    )
  ]);

  return new class ProjectsExports {
    projectList = projectList;
  };
}

const projects = Projects();

export default projects;
