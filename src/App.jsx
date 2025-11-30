import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import {  Routes, Route } from 'react-router-dom';

function App() {
    const [activeTab, setActiveTab] = useState('About');

   

    return (
        <div className="container">
            <Sidebar />
            <main className="main-content">
                <Navbar/>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
               
            </main>
        </div>
    );
}

export default App;
