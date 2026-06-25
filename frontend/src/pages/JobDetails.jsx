import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchJob } from '../services/api.js'

function JobDetails() {
  const { jobId } = useParams()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchJob(jobId)
      .then((data) => {
        setJob(data)
        setError('')
      })
      .catch(() => {
        setError('Job not found or unable to load this role.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [jobId])

  if (loading) {
    return (
      <section>
        <div className="page-header mb-4">
          <h1 className="page-title">Loading role…</h1>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section>
        <div className="page-header mb-4">
          <h1 className="page-title">Job not found</h1>
          <p className="page-subtitle">{error}</p>
          <Link className="btn btn-primary" to="/jobs">
            Back to jobs
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className="page-header mb-4">
        <h1 className="page-title">{job.title}</h1>
        <p className="page-subtitle">
          {job.company} — {job.location} • {job.type}
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="job-card">
            <p>{job.summary}</p>
            <h3 className="mt-4">What you’ll do</h3>
            <ul>
              {job.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="mt-4">Qualifications</h3>
            <ul>
              {job.qualifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="btn btn-primary mt-4" to="/contact">
              Apply now
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="contact-card">
            <h4>Need help?</h4>
            <p>Contact our team for application guidance and role matching support.</p>
            <a className="btn btn-outline-secondary" href="mailto:hello@careerconnect.com">
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobDetails
