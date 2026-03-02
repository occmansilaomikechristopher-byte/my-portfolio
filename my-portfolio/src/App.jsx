import './App.css'

function App() {
  return (
    <main className="app">
      <section className="hero">
        <p className="kicker">React Portfolio App</p>
        <h1>Mike Christopher Mansilao</h1>
        <p className="subtitle">React JS & React Native Developer</p>
        <p className="description">
          Building fast, responsive, and user-focused applications with modern
          UI, clean architecture, and API-driven features.
        </p>

        <div className="actions">
          <a className="btn btn-primary" href="/my-portfolio/" target="_blank" rel="noreferrer">
            Open Root Portfolio
          </a>
          <a className="btn btn-secondary" href="https://github.com/occmansilaomikechristopher-byte/my-portfolio" target="_blank" rel="noreferrer">
            View GitHub Repo
          </a>
        </div>
      </section>

      <section className="cards">
        <article className="card">
          <h3>Frontend Stack</h3>
          <p>React JS, React Native, JavaScript (ES6+), HTML, CSS</p>
        </article>
        <article className="card">
          <h3>Project Focus</h3>
          <p>POS & Inventory, Payroll, Dashboards, Mobile Apps</p>
        </article>
        <article className="card">
          <h3>API Skills</h3>
          <p>REST API integration, async data flow, UI state handling</p>
        </article>
      </section>
    </main>
  )
}

export default App
