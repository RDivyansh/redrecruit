import Link from 'next/link'
export default function Nav(){
  return (
    <header className="header">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{display:'flex',alignItems:'center',gap:20}}>
          <div className="brand">RedRecruit</div>
          <nav className="nav-links" style={{display:'flex',alignItems:'center'}}>
            <Link href="/jobs" className="nav-link">Jobs</Link>
            <Link href="/dashboard" className="nav-link">My Submissions</Link>
            <Link href="/admin" className="nav-link">Admin</Link>
          </nav>
        </div>
        <div>
          <Link href="/auth/login" className="btn" style={{border:'1px solid var(--card-border)'}}>Sign in</Link>
        </div>
      </div>
    </header>
  )
}
