import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchJobs } from '../services/api.js'

function Jobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchJobs()
      .then((data) => {
        setJobs(data)
        setError('')
      })
      .catch(() => {
        setError('Unable to load jobs. Please try again later.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <section>
      <div className="page-header mb-4">
        <h1 className="page-title">Open positions</h1>
        <p className="page-subtitle">
          Browse the latest roles and click through for details, qualifications, and how to apply.
        </p>
      </div>

      {loading && <p>Loading jobs…</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <div className="row row-cols-1 row-cols-md-2 g-4 job-listing">
          {jobs.map((job) => (
            <div className="col" key={job.id}>
              <article className="job-card">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h4>{job.title}</h4>
                    <p className="job-meta mb-0">{job.company} • {job.location}</p>
                  </div>
                  <span className="badge bg-primary job-badge">{job.type}</span>
                </div>
                <p>{job.summary}</p>
                <Link className="btn btn-outline-primary mt-3" to={`/jobs/${job.id}`}>
                  View details
                </Link>
              </article>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Jobs
