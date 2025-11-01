import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Netlify Assessment</h1>
        <p className="subtitle">By Prince Leonard Maala</p>
      </header>

      <main className="content">
        <section>
          <h2>1. How I made my site</h2>
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
          <h2>2. Feedback about the service</h2>
          <p>
            The auto-deployment from GitHub commits and transparent build logs are two features that I found appealing about Netlify's developer experience. The building procedure seems straightforward and accessible to novices.
          </p>
        </section>

        <section>
          <h2>3. Favorite and least favorite activities</h2>
          <p>
            <strong>Favorites:</strong> Debugging and troubleshooting technical issues, Writing clear, helpful documentation,
              Helping customers understand technical concepts, Learning new technologies and tools, 5.	Improving internal support processes.
          </p>
          <p>
            <strong>Least favorites:</strong> Debug a customer's build using a programming language and framework that you've never seen before,
            Manage a Support team,Help manage communications during a service outage, Respond to Netlify customers on Twitter , and Work with prospective customers to explain our service and the pricing model.
          </p>
        </section>

        <section>
          <h2>4. Great documentation example</h2>
          <p>
            I think the{" "}
            <a
              href="https://developer.mozilla.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN Web Docs
            </a>{" "}
            are excellent — they provide clear explanations, example code, and
            real-world use cases for developers of all levels.
          </p>
        </section>

        <section>
          <h2>5. DNS challenges for less-technical users</h2>
          <p>
            The first challenge is understanding DNS record types such as A,
            CNAME, and TXT — they can be confusing to configure. The second
            challenge is DNS propagation delays, which can cause uncertainty
            since changes take time to take effect globally.
          </p>
        </section>

        <section>
          <h2>6. Troubleshooting “site won’t build”</h2>
          <p>
            I would start by reviewing the build logs for details and checking
            for missing dependencies or incorrect build commands. I would reply
            to the customer by acknowledging the issue, explaining that I’ll
            investigate, and requesting their latest commit or configuration
            details if needed.
          </p>
        </section>

        <section>
          <h2>7. HTTP 301 redirect rule</h2>
          <pre className="code-block">
            /netlify/anything https://www.google.com/search?q=anything 301!
          </pre>
          <p>
            This rule redirects any path under <code>/netlify/</code> to Google
            Search with the query parameter.
          </p>
        </section>

        <section>
          <h2>8. Function deployment</h2>
          <p>
            I deployed a simple “Hello World” function to test Netlify
            Functions. It worked locally, and if it failed on deploy, I would
            check build logs and Netlify’s function logs to diagnose the issue.
          </p>
        </section>

        <section>
          <h2>9. Security issue report scenario</h2>
          <p>
            I would first acknowledge and thank the reporter for their
            responsible disclosure. I’d attempt to verify the issue internally
            and escalate it to the engineering and security teams. My response
            would assure them that Netlify takes all reports seriously and will
            follow up once it’s confirmed or mitigated.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Prince Leonard Maala | Created for the Netlify Assessment</p>
      </footer>
    </div>
  );
}

export default App;
