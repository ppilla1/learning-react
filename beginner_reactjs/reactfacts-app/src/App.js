import './style/App.css';

import Navbar from './component/Navbar';
import Maincontent from './component/Maincontent';
import Footer from './component/Footer';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Maincontent/>
      <Footer/>
    </div>
  );
}

export default App;
