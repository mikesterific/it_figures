import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './assets/less/index.less';
import TopMenu from './components/TopMenu';

function App() {
  return (
    <div className="app-container">
      <TopMenu />

      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here */}
          </Routes>
        </main>
      </Router>

      <footer>
        {/* Add your footer content here */}
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
