import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Menu from "./Menu"
import Footer from "./Footer"

function App() {
  return (
    <section className="bg-primary">
      <main>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Footer />
      </main>
    </section>
  )
}

export default App
