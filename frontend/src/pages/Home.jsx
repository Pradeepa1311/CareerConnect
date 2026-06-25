import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <div className="hero-banner text-white text-center mb-5">
        <div className="container py-5">
          <h1 className="page-title">Find jobs that grow your career.</h1>
          <p className="page-subtitle mt-3">
            Browse curated engineering, design, and remote opportunities from top companies.
          </p>
          <div className="mt-4">
            <Link className="btn btn-light btn-lg me-2" to="/jobs">
              Explore Jobs
            </Link>
            <Link className="btn btn-outline-light btn-lg" to="/contact">
              Talk to us
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="feature-card">
              <h3>Skills-first hiring</h3>
              <p>
                Discover opportunities matched to your professional experience and personal goals.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <h3>Remote-friendly roles</h3>
              <p>
                Search for flexible positions that support remote, hybrid, and global teams.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <h3>Career support</h3>
              <p>
                Get resources for interviews, resumes, and workplace growth.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <h2 className="section-title">Featured roles right now</h2>
            <p>
              Browse a selection of high-impact job openings from companies hiring for engineering,
              product, design, and operations roles.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="feature-card">
              <h4>Ready to apply?</h4>
              <p>
                Start with a strong profile, review employer details, and apply with confidence.
              </p>
              <Link className="btn btn-primary" to="/jobs">
                View jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
