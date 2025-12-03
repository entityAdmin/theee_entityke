import Background from './components/DynamicBackground'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Main from './pages/Main'
import FutureVision from './components/FutureVision'
import About from './pages/About'
import Contact from './pages/Contact'
import Solutions from './pages/Solutions'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <div className="relative z-10">
        <Main />
        <FutureVision />
        <About />
        <Solutions/>
        <Contact />
      </div>
      <Footer />
    </main>
  )
}