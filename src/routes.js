import {Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Interests from './components/Interests';
// import InterestsMobile from './components/InterestsMobile';
import CardSearch from './components/CardSearch';
import Margins from './components/Margins';
// import {useEffect, useState} from 'react';


export default function Routes()  {

  // const [isDesktop, setDesktop] = useState(false);

  // const mediaQuery = () => {
  //   setDesktop(window.innerWidth > 800)
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', mediaQuery);
  //   return () => window.removeEventListener('resize', mediaQuery);
  // });

  return (
    <Switch>
      <Route exact path='/' component={Login} />
      {/* {isDesktop ? <Route path='/interests' component={Interests} /> : <Route path='/interests' component={InterestsMobile} />} */}
      <Route path='/interests' component={Interests} />
      <Route path='/search' component={CardSearch} />
      <Route path='/margins' component={Margins} />
    </Switch>
  )
}