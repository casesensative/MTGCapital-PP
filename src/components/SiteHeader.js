import {useState} from 'react';
import SearchBar from '../components/SearchBar';

const SiteHeader = () => {

 const [menu, setMenu] = useState(false);
 const [searchbar, setSearchbar] = useState(false);

  return (
    <header>
      {searchbar ? <SearchBar /> : null}
      <div className="siteheader">
        <div className="hamburger-container" onClick={() => setMenu(!menu)}>
          <div className="topbun"></div>
          <div className="burger"></div>
          <div className="botbun"></div>
        </div>
        <h1>MTGCapital</h1>
        <div className="searchicon" onClick={() => setSearchbar(!searchbar)}>
          <div className="searchicon1"></div>
          <div className="searchicon2"></div>
        </div>
      </div>
      <div className="line"></div>
      <div className={`dropdown-menu ${menu ? 'dropdown-menu-active' : ''}`} >
        <ul>
          <li>Profile</li>
          <li>Interests</li>
          <li>Card Search</li>
          <li>Margins</li>
        </ul>
      </div>
    </header>


  )
}

export default SiteHeader;