import Link from 'next/link'
import Nav from '../../components/Nav'
import { jobs } from '../../data/jobs'

export default function Jobs(){
  return (
    <>
      <Nav />
      <main style={{paddingTop:90}} className="container">
        <header style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h1 style={{fontSize:28,margin:0}}>Job Listings</h1>
          <div className="text-muted">Showing {jobs.length} roles</div>
        </header>

        <div className="grid grid-2 mt-6">
          {jobs.map(j=>(
            <article key={j.id} className="card">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'start'}}>
                <div>
                  <h2 style={{margin:0}}>{j.title}</h2>
                  <div className="text-muted" style={{marginTop:6}}>{j.company} • {j.location}</div>
                </div>
                <div style={{color:'var(--primary)',fontWeight:700}}>{j.type || 'Full-time'}</div>
              </div>
              <p className="text-muted" style={{marginTop:12}}>{j.summary}</p>
              <div style={{marginTop:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{display:'flex',gap:8}}>
                  {(j.tags||[]).map(t=> <span key={t} style={{background:'#090909',padding:'4px 8px',borderRadius:8,fontSize:13}}>{t}</span>)}
                </div>
                <Link href={`/jobs/${j.id}`} className="btn btn-primary">View</Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
