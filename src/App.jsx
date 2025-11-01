import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
       <header className="header">
  <h1>Netlify Assessment</h1>
  <p className="subtitle">
    This website offers my completed evaluation for the <strong>Web Development Tech Support</strong> position. 
    Below are my replies to all assessment questions, as well as technical samples of redirection and serverless operations.
  </p>
  <p className="author">By Prince Leonard Maala</p>
</header>


      <main className="content">
        <section>
          <h2>1. <b>How I made my site</b></h2>
          <p>
            I built this site using <strong>Vite + React</strong> for fast and
            modern development. It’s deployed on <strong>Netlify</strong> for
            automatic builds and easy continuous deployment. One challenge I
            faced was configuring the correct <code>publish directory</code> for
            Netlify, but I fixed it by pointing to the <code>dist</code> folder
            in the site settings.
          </p>
        </section>

        <section>
          <h2>2. <b>Feedback about the service</b></h2>
          <p>
            The auto-deployment from GitHub commits and transparent build logs
            are two features that I found appealing about Netlify’s developer
            experience. The building procedure seems straightforward and
            accessible to novices.
          </p>
        </section>

        <section>
          <h2>3. <b>Favorite and least favorite activities</b></h2>

          <p><strong>Favorites:</strong></p>
          <ul>
            <li>Debugging and troubleshooting technical issues</li>
            <li>Writing clear, helpful documentation</li>
            <li>Helping customers understand technical concepts</li>
            <li>Learning new technologies and tools</li>
            <li>Improving internal support processes</li>
          </ul>

          <p><strong>Least favorites:</strong></p>
          <ul>
            <li>Debugging builds in unfamiliar frameworks</li>
            <li>Managing live customer issues during a service outage</li>
            <li>Repetitive manual testing tasks</li>
            <li>Unclear bug reports without details</li>
            <li>Administrative tasks unrelated to engineering</li>
          </ul>
        </section>

        <section>
          <h2>4. <b>Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.</b></h2>
          <p>
            The documentation for <strong>Stripe's API</strong> is very well made.
            It offers real-time code samples in several languages, is interactive,
            and is simple to use. The documentation lowers the learning curve for
            developers and sets a high standard for clarity, organization, and examples.
          </p>
        </section>

        <section>
          <h2>5. <b>Explain two major challenges around DNS configuration for less-technical customers hosting websites.</b></h2>
          <p>
            The intricacy of DNS terminology is a common issue; many users are not
            familiar with terms like A record, CNAME, TTL, or propagation. Users
            frequently use the wrong record type or assume changes take effect instantly,
            which leads to misconfigurations.
          </p>
        </section>

        <section>
          <h2>6. <b>Customer issue: “Site won’t build” (exit code 2) — Troubleshooting steps and customer response</b></h2>

          <ul>
            <li>Review the build logs for missing dependencies, syntax errors, or incorrect build commands.</li>
            <li>Check the build command set in Netlify (e.g., <code>npm run build</code>) and confirm it matches the project’s configuration.</li>
            <li>Verify that the correct Node version or environment variables are set.</li>
            <li>Ask the customer for their <code>package.json</code> or the framework used to narrow down possible causes.</li>
            <li>If still unclear, suggest reproducing the issue locally using <code>netlify build</code> or running the same build command locally.</li>
          </ul>

          <p><strong>Customer-facing first response:</strong></p>
          <p>
            Hello there 👋<br />
            I appreciate you getting in touch! Your site construction appears to have failed
            with a “non-zero exit code: 2.” This usually indicates that something went wrong
            (such as a missing dependency or incorrect command) during the build process.<br />
            Would you kindly validate your build command in
            <em> Site Settings → Build & Deploy</em> and let us know which framework you are using?
            Once I have that, I can assist in identifying the problem and restarting the build.
          </p>
        </section>

        <section>
          <h2>7. <b>301 and proxy redirect setup</b></h2>
          <p><strong>301 Redirect:</strong></p>
          <pre className="code-block">
            /netlify/:anything https://www.google.com/search?q=:anything 301
          </pre>
          <p><strong>Proxy Redirect:</strong></p>
          <pre className="code-block">
            /netlify/:anything https://www.google.com/search?q=:anything 200
          </pre>
        </section>

        <section>
          <h2>8. <b>Deploying a function</b></h2>
          <p>
            I created a simple function named <code>hello.js</code> inside
            <code>netlify/functions/</code>:
          </p>
          <pre className="code-block">
{`export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" }),
  };
}`}
          </pre>
          <p>
            This worked locally and demonstrated how easy it is to deploy a
            serverless function on Netlify.
          </p>
        </section>

        <section>
          <h2>9. <b>Responding to a severe security report</b></h2>
          <p>
            If I received a report about a severe security issue on www.netlify.com
            that I couldn’t immediately verify, my first steps would be to acknowledge
            the report, thank the reporter, and request additional details such as
            reproduction steps or affected endpoints.
          </p>
          <p>
            I would escalate the issue to the internal security and engineering teams
            using the official escalation channels and treat it as high priority.
            Information would be restricted to essential personnel until verified.
          </p>
          <p><strong>Sample Response to Reporter:</strong></p>
          <p>
            Hello [Name],<br />
            We appreciate your responsible reporting of this potential issue. Security
            is a top priority for our team, and we are currently examining your report
            to confirm and evaluate the impact. As soon as we have more information,
            we’ll update you.<br />
            Thank you for helping keep our platform secure.
          </p>
        </section>
      </main>

      <footer className="footer">
        © 2025 Prince Leonard Maala | Netlify Assessment
      </footer>
    </div>
  );
}

export default App;
