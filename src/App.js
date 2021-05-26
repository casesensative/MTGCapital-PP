import './css/reset.css';
import './css/index.css';
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';
import Interests from './components/Interests';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
