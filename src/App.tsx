import './App.css'
import Header from './components/header/Header'
import ProblemTracker from './pages/problem-tracker/ProblemTracker'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <ProblemTracker></ProblemTracker>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
