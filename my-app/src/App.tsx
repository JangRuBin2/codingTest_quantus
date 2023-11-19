// App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Test1 from './test1';
import Test2 from './test2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
