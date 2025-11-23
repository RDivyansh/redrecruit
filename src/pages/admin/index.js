import Nav from '../../components/Nav'
export default function Admin(){
  return (
    <>
      <Nav />
      <main style={{paddingTop:90}} className="container">
        <h1>Admin Panel</h1>
        <p className="text-muted">Demo admin UI</p>
        <div className="card mt-6">
          <h2>All Applications</h2>
          <p className="text-muted">Manage statuses, view resumes (demo)</p>
        </div>
      </main>
    </>
  )
}
