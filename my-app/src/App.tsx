// App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Test1 from './components/pages/test1';
import Test2 from './components/pages/test2';
function App() {
  return (
    <Router>
      <div className='css-10qbdmk'>
      <Header />
      <Routes>
        <Route path="/alloc" element={<Main><Test1 /></Main>} />
        <Route path="/others" element={<Main><Test2 /></Main>} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
