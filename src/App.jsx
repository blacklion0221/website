import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import logo from './assets/logo.svg'
import About from './pages/About'
import Projects from './pages/Projects'
import Impressum from './pages/Impressum'

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
                    <Link to="/impressum" className={linkClass('/impressum')}>Impressum</Link>
                </li>
            </ul>
        </nav>
    )
}

function App() {
    return (
        <Router>
            <header className="border-b border-gray-800 shadow-sm sticky top-0 z-10 bg-gray-950/90 backdrop-blur">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Logo" className="h-8 w-8" />
                        <span className="text-xl font-bold tracking-tight text-blue-400">Malte</span>
                    </div>
                    <Nav />
                </div>
            </header>
            <main className="container mx-auto px-4 py-10 min-h-screen">
                <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl shadow-lg p-8">
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/impressum" element={<Impressum />} />
                    </Routes>
                </div>
            </main>
        </Router>
    )
}

export default App