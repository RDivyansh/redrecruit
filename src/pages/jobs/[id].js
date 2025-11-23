import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import { jobs } from '../../data/jobs'

export default function Job(){
  const r = useRouter()
  const job = jobs.find(x=>x.id===r.query.id)
  if(!job) return <div className="container" style={{paddingTop:90}}>Loading...</div>
  return (
    <>
      <Nav />
      <main style={{paddingTop:90}} className="container">
        <div className="card">
          <h1 style={{margin:0}}>{job.title}</h1>
          <div className="text-muted" style={{marginTop:6}}>{job.company} • {job.location}</div>
          <p style={{marginTop:12}}>{job.description}</p>
          <div style={{marginTop:18}}>
            <button className="btn btn-primary">Apply</button>
          </div>
        </div>
      </main>
    </>
  )
}
