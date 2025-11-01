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
            faced was configuring the correct{" "}
            <code className="code-block">publish directory</code> for Netlify,
            but I fixed it by pointing to the <code className="code-block">dist</code>{" "}
            folder in the site settings.
          </p>
        </section>

        <section>
          <h2>2. Feedback about the service</h2>
          <p>
            The auto-deployment from GitHub commits and transparent build logs
            are two features that I found appealing about Netlify’s developer
            experience. The building procedure seems straightforward and
            accessible to novices.
          </p>
        </section>

        <section>
          <h2>3. Favorite and least favorite activities</h2>
          <p>
            <strong>Favorites:</strong> Debugging and troubleshooting technical
            issues, writing documentation, helping customers understand
            technical concepts, and improving internal processes.
          </p>
          <p>
            <strong>Least favorites:</strong> Debugging builds in frameworks
            I’ve never used before or managing live customer issues during a
            service outage.
          </p>
        </section>
      </main>

      <footer className="footer">
        © 2025 Prince Leonard Maala
      </footer>
    </div>
  );
}

export default App;
