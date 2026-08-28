import Header from './components/layout/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/auth/CreateAccount';

function App() {
  return (
    <div className="h-screen overflow-hidden bg-[#090909] text-white font-sans">
      <Header />
      <main className="pt-[47px] lg:pt-[66px] flex flex-col items-center justify-center h-full w-full">
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/register" element={<CreateAccount />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
