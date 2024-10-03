import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails'
import OurServices from './pages/OurServices';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Chat from './assets/images/chat.png'

const App = () => {
  return (
    <div className='bg-white relative'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route exact path="/courses/details/:id" element={<CourseDetails />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
        <div className="absolute bottom-8 right-8 cursor-pointer">
          <img src={Chat} className="w-10 h-10" alt="chat" />
        </div>
      </Router>
    </div>
  )
}

export default App