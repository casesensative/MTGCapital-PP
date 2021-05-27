import './css/reset.css';
import './css/index.css';
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';
import Interests from './components/Interests';
import CardSearch from './components/CardSearch';
import SearchBar from './components/SearchBar';
import SiteHeader from './components/SiteHeader';




function App() {
  return (
    <div className="App">
      <SiteHeader />
      {/* <Login /> */}
      <SearchBar />
      <CardSearch />
      <Footer />
    </div>
  );
}

export default App;
