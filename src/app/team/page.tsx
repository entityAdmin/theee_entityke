import Background from '../components/DynamicBackground'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Team from '../pages/Team'

export default function TeamPage() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <div className="relative z-10">
        <Team />
      </div>
      <Footer />
    </main>
  )
}