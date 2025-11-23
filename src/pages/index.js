import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'

export default function Home(){
  return (
    <>
      <Nav />
      <main className="hero">
        <div style={{textAlign:'center'}}>
          <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1}} style={{fontSize:64,color:'var(--primary)',fontWeight:900,margin:0}}>
            RedRecruit
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-muted mt-4">
The Ultimate Recruitment Portal 
          </motion.p>
          <div style={{marginTop:32}}>
            <Link href="/jobs" className="btn btn-primary">View Jobs</Link>
          </div>
        </div>
      </main>
    </>
  )
}
