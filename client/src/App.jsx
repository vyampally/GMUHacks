import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './routes/homePage/HomePage';
import DocumentManager from './routes/documentManager/DocumentManager';
import FinanceCalculator from './routes/financeCalculator/FinanceCalculator';
import FirstTimeHomeBuyer from './routes/firstTimeHomeBuyer/FirstTimeHomeBuyer';

function App() {
  return (
    <Router>
      {/* The Navbar should only be included once here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/document-manager" element={<DocumentManager />} />
        <Route path="/finance-calculator" element={<FinanceCalculator />} />
        <Route path="/first-time-home-buyer" element={<FirstTimeHomeBuyer />} />
      </Routes>
    </Router>
  );
}

export default App;
