import Header from "./Header.js";
import Skills from "./Skills.js";
import Experience from "./Experience.js";
import ProjectList from "../app.projects/ProjectList.js";
import Certificates from "./Certificates.js";
import Education from "./Education.js";

function App() {
  return html`
    <${Header} />
    <${Skills} />
    <${Experience}>
      <${ProjectList} />
    </>
    <${Certificates} />
    <${Education} />
  `;
}

export default App;
