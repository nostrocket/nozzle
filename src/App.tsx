import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './components/layout/MainLayout'
import RecentRocketsPage from './pages/recent-rockets/RecentRocketsPage'
import IdentityTreePage from './pages/identity-tree/IdentityTreePage'
import ProblemTrackerPage from './pages/problem-tracker/ProblemTrackerPage'
import LaunchNewRocketPage from './pages/launch-new-rocket/LaunchNewRocketPage'
import ClaimPermanymPage from './pages/claim-permanym/ClaimPermanymPage'

function App() {
  return (
    <MainLayout>
       <Routes>
          <Route path="/" element={<RecentRocketsPage />} />
          <Route path="/launch-rocket" element={<LaunchNewRocketPage />} />
          <Route path="/claim-permanym" element={<ClaimPermanymPage />} />
          <Route path="/identity-tree" element={<IdentityTreePage />} />
          <Route path="/problem-tracker" element={<ProblemTrackerPage />} />
       </Routes>
    </MainLayout>
  )
}

export default App
