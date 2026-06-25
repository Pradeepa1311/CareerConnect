import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api',
})

export const fetchJobs = () => api.get('/jobs').then((response) => response.data)
export const fetchJob = (jobId) => api.get(`/jobs/${jobId}`).then((response) => response.data)
export const submitContact = (contactData) =>
  api.post('/contact', contactData).then((response) => response.data)
