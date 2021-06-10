import './css/reset.css';
import './css/index.css';
import {useLocation} from 'react-router-dom';
import Footer from './components/Footer';
import SiteHeader from './components/SiteHeader';
import Header from './components/Header';
import Routes from './routes';
import {useMediaQuery} from 'react-responsive';





function App(props) {

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })

  return (
    <div className="App">
      {isDesktop ? <Header /> : <SiteHeader />}
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
