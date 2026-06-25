function About() {
  return (
    <section>
      <div className="page-header mb-4">
        <h1 className="page-title">About CareerConnect</h1>
        <p className="page-subtitle">
          We help professionals discover meaningful work and help teams hire talent faster.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="feature-card">
            <h2>Our mission</h2>
            <p>
              CareerConnect is built for people who want clarity, support, and better outcomes in their job search.
              We curate roles, highlight career pathways, and provide resources for every step of the hiring process.
            </p>
            <h3 className="mt-4">What we value</h3>
            <ul>
              <li>Transparency in role details and employer expectations.</li>
              <li>Supportive communities for early-career and experienced professionals.</li>
              <li>Practical skills development and interview readiness.</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="contact-card">
            <h4>Join our network</h4>
            <p>Subscribe to updates for fresh roles, interview tips, and career coaching content.</p>
            <a className="btn btn-primary" href="mailto:hello@careerconnect.com">
              Reach out
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
