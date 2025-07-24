import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomePage from '@/components/pages/HomePage'
import EmergencyPipeRepairPage from '@/components/pages/EmergencyPipeRepairPage'
import CompleteRepipingPage from '@/components/pages/CompleteRepipingPage'
import LeakDetectionPage from '@/components/pages/LeakDetectionPage'
import PipeLiningPage from '@/components/pages/PipeLiningPage'
import WaterLineRepairPage from '@/components/pages/WaterLineRepairPage'
import SewerLineServicesPage from '@/components/pages/SewerLineServicesPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/emergency-pipe-repair" element={<EmergencyPipeRepairPage />} />
        <Route path="/services/complete-repiping" element={<CompleteRepipingPage />} />
        <Route path="/services/leak-detection" element={<LeakDetectionPage />} />
        <Route path="/services/pipe-lining" element={<PipeLiningPage />} />
        <Route path="/services/water-line-repair" element={<WaterLineRepairPage />} />
        <Route path="/services/sewer-line-services" element={<SewerLineServicesPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ zIndex: 9999 }}
      />
    </div>
  );
}

export default App;