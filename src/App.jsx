import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import About from './pages/About'
import Projects from './pages/Projects'
import Impressum from './pages/Impressum'
import Bio from "./pages/Bio.jsx";
import CV from "./pages/CV.jsx";

function Nav() {
    const location = useLocation()
    const linkClass = (path) =>
        `px-3 py-2 rounded transition font-medium
        ${location.pathname === path
            ? 'bg-gray-800 text-blue-400 shadow'
            : 'hover:bg-gray-800 hover:text-blue-300 text-gray-300'}`
    return (
        <nav>
            <ul className="flex gap-2">
                <li>
                    <Link to="/" className={linkClass('/')}>About</Link>
                </li>
                <li>
                    <Link to="/projects" className={linkClass('/projects')}>Projects</Link>
                </li>
                <li>
                    <Link to="/bio" className={linkClass('/bio')}>Bio</Link>
                </li>
                <li>
                    <Link to="/cv" className={linkClass('/cv')}>CV</Link>
                </li>
            </ul>
        </nav>
    )
}

function Header() {
    const location = useLocation();
    const isAbout = location.pathname === "/";

    return (
        <header className="border-b border-gray-800 shadow-sm sticky top-0 z-10 bg-gray-950/90 backdrop-blur">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <div className="flex items-center min-h-[35px] gap-3">
                    {isAbout ? (
                        <div className="flex gap-4 text-3xl text-gray-200">
                            <a href="mailto:email@email.de" className="hover:text-blue-400 transition-colors">
                                <FaEnvelope />
                            </a>
                            <a href="https://github.com/blacklion0221" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                <FaLinkedin />
                            </a>
                        </div>
                    ) : (
                        <span className="text-xl font-bold tracking-tight text-blue-400 min-h-[32px] flex items-center">Malte</span>
                    )}
                </div>
                <Nav />
            </div>
        </header>
    );
}

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="w-full border-t border-gray-800 bg-gray-950/80 backdrop-blur py-4 mt-12">
            <div className="container mx-auto flex flex-col items-center gap-1 text-sm text-gray-400">
                <div>
                    made with <span className="text-red-500">♥</span> by{' '}
                    <a
                        href="https://github.com/blacklion0221"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-400 transition-colors"
                    >
                        Malte
                    </a>
                </div>
                <div>
                    &copy; {year} &middot;{' '}
                    <Link to="/impressum" className="underline hover:text-blue-400 transition-colors">Impressum</Link>
                </div>
            </div>
        </footer>
    )
}

function App() {
    return (
        <Router>
            <Header />
            <main className="container mx-auto px-4 py-10 min-h-screen">
                <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-lg p-8">
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/cv" element={<CV />} />
                        <Route path="/bio" element={<Bio />} />
                        <Route path="/impressum" element={<Impressum />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </Router>
    );
}

export default App