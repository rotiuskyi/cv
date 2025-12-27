function Experience({ children }) {
  return html`
    <div class="experience">
      <h3 class="experience__title left">
        Experience
      </h3>

      <div class="experience__content">
        ${children}
      </div>
    </div>
  `;
}

export default Experience;
