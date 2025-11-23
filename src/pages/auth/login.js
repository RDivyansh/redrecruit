import { useState } from 'react'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav'

export default function Login(){
  const router = useRouter()
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  function submit(e){e.preventDefault(); localStorage.setItem('user','demo'); router.push('/dashboard')}
  return (
    <>
      <Nav />
      <main style={{paddingTop:90}} className="container">
        <div style={{maxWidth:520,margin:'0 auto'}}>
          <div className="card">
            <h1 style={{margin:0}}>Sign In</h1>
            <p className="text-muted">Demo login — no backend</p>
            <form onSubmit={submit}>
              <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
              <input className="input" placeholder="Password" type="password" style={{marginTop:12}} value={pass} onChange={e=>setPass(e.target.value)} />
              <button className="btn btn-primary" style={{marginTop:12,width:'100%'}}>Sign in</button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
