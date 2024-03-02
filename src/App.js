import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Accueil from './components/accueil/accueil'
import UnLieu from './components/un-lieu/un-lieu'
import UnMoment from './components/un-moment/un-moment'
import NousTrouver from './components/nous-trouver/nous-trouver'

const App = () => {
  return (
    <Router>
        <div>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route exact path="/Un-lieu" element={<UnLieu />} />
            <Route exact path="/Un-moment" element={<UnMoment />} />
            <Route exact path="/Nous-trouver" element={<NousTrouver />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;