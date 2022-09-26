import './sidebar.styles.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme/theme.context';

const SideBar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const lightModeHandle = () => {
    setDarkMode(false);
  };
  const darkModeHandle = () => {
    setDarkMode(true);
  };
  return (
    <div className='sidebar-container'>
      <div className='top'>
        <Link to={'/'}>
          <span className='logo'>NhatGM</span>
        </Link>
      </div>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to={'/'}>
            <li>
              <DashboardIcon className='icon' />

              <span>Dashboard</span>
            </li>
          </Link>
          <p className='title'>LISTS</p>
          <Link to={'/users'}>
            <li>
              <PersonOutlineOutlinedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <StoreIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <BarChartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountBoxOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div onClick={lightModeHandle} className='theme-option' />
        <div onClick={darkModeHandle} className='theme-option' />
      </div>
    </div>
  );
};
export default SideBar;
