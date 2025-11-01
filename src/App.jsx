import './App.css'

function App() {
  return (
    <div
      className="container"
      style={{
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Netlify Assessment</h1>

      <section>
        <h2>1. How I Made My Site</h2>
        <p>
          I created this site using <strong>Vite</strong> and <strong>React</strong> because they’re lightweight and fast to set up.
          I chose these tools since Vite provides instant development previews and optimized builds.
          The most challenging part was fixing the “Site not found” error on Netlify.
          I solved it by adding a <code>_redirects</code> file inside the public folder with the rule <code>/* /index.html 200</code>.
        </p>
      </section>

      <section>
        <h2>2. My Thoughts on the Service</h2>
        <p>
          Netlify makes deployment smooth and easy. I was impressed by the automatic detection of my framework
          and the ability to deploy directly from GitHub. One improvement I’d suggest is clearer error messages
          when the build fails — that would help beginners troubleshoot faster.
        </p>
      </section>

      <section>
        <h2>3. Favorite & Least Favorite Activities</h2>
        <p><strong>My Top 5 Favorite Activities:</strong></p>
        <ul>
          <li>Solving customer problems through troubleshooting</li>
          <li>Learning new technologies</li>
          <li>Automating tasks with scripts or tools</li>
          <li>Collaborating with a team to fix issues</li>
          <li>Writing technical documentation</li>
        </ul>

        <p><strong>My 5 Least Favorite Activities:</strong></p>
        <ul>
          <li>Doing repetitive manual work</li>
          <li>Unclear bug reports with no logs</li>
          <li>Waiting for DNS propagation</li>
          <li>Handling unrelated administrative tasks</li>
          <li>Reading extremely long policy documents</li>
        </ul>
      </section>

      <section>
        <h2>4. Example of Great Documentation</h2>
        <p>
          I think the <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN Web Docs</a> are one of the best examples of developer documentation.
          They provide detailed explanations, practical code examples, and consistent structure, making it easy for developers of any skill level to understand.
        </p>
      </section>

      <section>
        <h2>5. DNS Challenges for Less-Technical Users</h2>
        <p>
          Two common challenges are understanding DNS record types and propagation delays.
          Many users struggle to differentiate between A, CNAME, and TXT records, or don’t know how to verify propagation after changes.
          Additionally, the waiting time for DNS updates to take effect can cause confusion when setting up domains or SSL certificates.
        </p>
      </section>

      <section>
        <h2>6. Troubleshooting “Site Won’t Build” (Exit Code 2)</h2>
        <p>
          When a build fails with “exit code 2,” I’d start by checking the full build logs to identify where it failed — often due to syntax errors, missing dependencies, or incorrect scripts.
          Since I can’t access the private repository, I’d ask the customer to share their build command, package.json, and framework.
        </p>
        <p>
          <strong>Sample first response to the customer:</strong><br />
          “Hi there! I noticed your site build failed with exit code 2. Could you please share your build command
          and framework details? I’ll review the logs and help you get it building again as soon as possible.”
        </p>
      </section>

      <section>
        <h2>7. Redirect Setup</h2>
        <p><strong>301 Redirect:</strong></p>
        <pre>/netlify/:anything  https://www.google.com/search?q=:anything  301</pre>

        <p><strong>Proxy Redirect:</strong></p>
        <pre>/api/*  https://example.com/:splat  200</pre>
      </section>

      <section>
        <h2>8. Deploy Function Experience</h2>
        <p>
          I tried deploying a simple “Hello World” function in the <code>netlify/functions</code> folder.
          The process was straightforward once I followed the documentation, but I initially ran into a path issue.
          I resolved it by checking the Netlify deploy logs and adjusting my function directory structure.
        </p>
      </section>

      <section>
        <h2>9. Handling a Severe Security Report</h2>
        <p>
          If I received a report about a severe security issue on Netlify’s main site, I’d immediately acknowledge the report,
          thank the reporter, and inform them that our team is investigating. Even if not yet confirmed,
          I’d reassure them that security is a top priority and we value responsible disclosure.
        </p>
        <p>
          I’d then collect logs, attempt to reproduce the issue safely, and escalate it to the internal
          security or engineering teams for validation and resolution.
        </p>
      </section>
    </div>
  )
}

export default App
