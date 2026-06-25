const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const jobs = require('./jobs')

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'CareerConnect backend is running.' })
})

app.get('/api/jobs', (req, res) => {
  res.json(jobs)
})

app.get('/api/jobs/:jobId', (req, res) => {
  const job = jobs.find((item) => item.id === req.params.jobId)

  if (!job) {
    return res.status(404).json({ error: 'Job not found' })
  }

  res.json(job)
})

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' })
  }

  console.log('Contact request received:', { name, email, message })
  res.json({ success: true, message: 'Your message has been received. We will contact you soon.' })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
