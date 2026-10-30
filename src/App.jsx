import Aboutme from "./components/Aboutme"
import Bookingprocess from "./components/Bookingprocess"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Whyus from "./components/Whyus"

const App = () => {
  return (
    <main id="app" className="flex flex-col w-full">
      <Hero />
      <Aboutme />
      <Whyus />
      <Bookingprocess />
      <Footer />
    </main>
  )
}

export default App