/**
 * 
 * @param {import("./Project.js").ProjectProps} props
 * @returns {import("../unpkg/preact").VNode}
 */
function Project(props) {
  const {
    title,
    company,
    description,
    role,
    involvedPeriod,
    responsibilities,
    usedTechnologies,
    projectUrl,
  } = props;

  const titleElement = projectUrl
    ? html`<strong>${title} (<a href="${projectUrl}">${projectUrl}</a>)</strong>`
    : html`<strong>${title}</strong>`;

  return html`
    <div class="project">
      <div class="row">
        <h5 class="col left">
          Project
        </h5>
        <div class="col">
          ${titleElement}
        </div>
      </div>

      ${company && html`
      <div class="row">
        <h5 class="col left">
          Company
        </h5>
        <div class="col">
            ${company}
          </div>
        </div>
      `}

      <div class="row">
        <h5 class="col left">Involvement period</h5>
        <p class="col">${involvedPeriod}</p>
      </div>

      <div class="row">
        <h5 class="col left">Role</h5>
        <p class="col">${role}</p>
      </div>

      <div class="row">
        <h5 class="col left">Responsibilities</h5>
        <ul class="col">
          ${responsibilities.map(r => {
            return html`
              <li key=${r}>${r}</li>
            `;
          })}
        </ul>
      </div>

      <div class="row">
        <h5 class="col left">Used technologies</h5>
        <p class="col">
          TypeScript, Nuxt/Vue.js, Pinia, @tanstack/vue-query, Tailwind CSS, Playwright
        </p>
      </div>
    </div>
  `
}

export default Project;
