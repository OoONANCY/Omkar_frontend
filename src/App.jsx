import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Customers from './components/Customers'
import Deploy from './components/Deploy'
import Footer from './components/Footer'
import Chat from './components/Chat'
import Articles from './components/Articles'

function HomePage() {
  return (
    <>
      <Hero />
      <Customers />
      <Features />
      <Deploy />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App