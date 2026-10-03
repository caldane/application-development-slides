import { Routes, Route, Navigate } from 'react-router-dom';
import SlideDeck from './components/slide-deck';

const App = () => {
  return (
    <Routes>
      <Route path="/:slide" element={<SlideDeck />} />
      <Route path="/" element={<Navigate to="/1" replace />} />
    </Routes>
  );
};

export default App;
