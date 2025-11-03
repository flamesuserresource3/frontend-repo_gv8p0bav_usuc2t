import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import RoutesView from './components/RoutesView';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-white">
      <BrowserRouter>
        <Navbar />
        <RoutesView />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
