import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchData = async () => {
    const response = await fetch(url)
    const newJob = await response.json()
    setJobs(newJob)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading)
    return (
      <section className='section loading'>
        <h2>Loading...</h2>
      </section>
    )

  const { title, dates, duties, company } = jobs[value]

  return (
    <div className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>

      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                key='index'
                className={`job-btn ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty) => {
            return (
              <div className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </div>
  )
}

export default App
