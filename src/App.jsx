import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Club from './pages/Club';
import Equipe from './pages/Equipe';
import Actualites from './pages/Actualites';
import ActualiteDetail from './pages/ActualiteDetail';
// import Resultats from './pages/Resultats';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import PresidentBio from './pages/PresidentBio'
import ArticleDetail from './pages/ArticleDetail';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/club" element={<Club />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/actualites/:id" element={<ActualiteDetail />} />
            {/* <Route path="/resultats" element={<Resultats />} /> */}
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/presidentbio" element={<PresidentBio />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;