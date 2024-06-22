// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Tresure from './components/treasure';
import Sidebar from './components/sidebar';
import Cards from './components/cards';
import Lists from './components/list';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Tresure />
      <Lists />
      <Sidebar />
      <Cards />
    </div>
  );
}

export default App;
