import './navbar.styles.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import avatar from '../../assets/avatar.jpeg';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme/theme.context';

const NavBar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='navbar-container'>
      <div className='wrapper'>
        <div className='search-bar'>
          <input type='text' placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon' />
            <span>English</span>
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon' onClick={handleChange} />
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <img src={avatar} alt='avatar' className='avatar' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
