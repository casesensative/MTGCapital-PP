import './css/reset.css';
import './css/index.css';
import {useLocation} from 'react-router-dom';
import Footer from './components/Footer';
import SiteHeader from './components/SiteHeader';
import Routes from './routes';




function App(props) {



  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <SiteHeader />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
