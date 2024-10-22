import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutApp from './AboutApp';

export default function NewApp() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<AboutApp />} />
      </Routes>
    </Router>
  );
}