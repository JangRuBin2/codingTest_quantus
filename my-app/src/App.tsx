// App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import LicensePurchase from './components/pages/LicensePurchase';
import PortfolioExtraction from './components/pages/PortfolioExtraction';
import RealInvestment from './components/pages/RealInvestment';
import StrategyExample from './components/pages/StrategyExample';
import AssetAllocation from './components/pages/assetAllocation';
import BackTest from './components/pages/backTest';
import PartnerShip from './components/pages/partnerShip';
function App() {
  return (
    <Router>
      <div className='css-10qbdmk'>
      <Header />
      <Routes>
        <Route path="/backtest" element={<Main><BackTest /></Main>} />
        <Route path="/alloc" element={<Main><AssetAllocation /></Main>} />
        <Route path="/port" element={<Main><PortfolioExtraction /></Main>} />
        <Route path="/invest" element={<Main><RealInvestment /></Main>} />
        <Route path="/strategy" element={<Main><StrategyExample /></Main>} />
        <Route path="/products" element={<Main><LicensePurchase /></Main>} />
        <Route path="/partnership" element={<Main><PartnerShip /></Main>} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
