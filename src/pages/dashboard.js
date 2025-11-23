import Nav from '../components/Nav'
export default function Dashboard(){
  const apps=[{job:'Senior Frontend Engineer',status:'Applied'},{job:'Backend Engineer',status:'Under Review'}]
  return (
    <>
      <Nav />
      <main style={{paddingTop:90}} className="container">
        <h1>My Applications</h1>
        <div className="grid mt-6">
          {apps.map((a,i)=>(
            <div key={i} className="card">
              <h2 style={{margin:0}}>{a.job}</h2>
              <div className="text-muted" style={{marginTop:6}}>{a.status}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
