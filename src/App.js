import './App.css';
import Navbar from './components/Navbar';
import Tresure from './components/treasure';
import Sidebar from './components/sidebar';

import Lists from './components/list';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Tresure />
      <Lists />
      <Sidebar />
      
    </div>
  );
}

export default App;
