import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom'

import styled from 'styled-components'
import { AuthProvider, useAuth } from './context/AuthContext'

// Layout 
import Header from './layout/header/header'
import Footer from './layout/footer/Footer'

// Pages
import Home from './pages/Home'
import NewProject from './pages/NewProject'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetail'
import About from './pages/About'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: calc(100vh - 440px); 
`;


function App() {

  return (
    <AuthProvider>
      <Router>
        <Header />
        <PageContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/new" element={<NewProject />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            {/* <Route path="/projects/edit/:id" element={<EditProject />} /> */}
          </Routes>
        </PageContainer>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
