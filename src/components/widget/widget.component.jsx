import './widget.styles.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

export const WIDGET_TYPES = {
  user: {
    title: 'USERS',
    isMoney: false,
    link: 'See all users',
    icon: <PersonOutlineOutlinedIcon className='widget-icon user-icon' />,
  },
  order: {
    title: 'ORDERS',
    isMoney: false,
    link: 'View all orders',
    icon: <ShoppingCartOutlinedIcon className='widget-icon order-icon' />,
  },
  earning: {
    title: 'EARNING',
    isMoney: true,
    link: 'View net earnings',
    icon: <MonetizationOnOutlinedIcon className='widget-icon earning-icon' />,
  },
  balance: {
    title: 'BALANCE',
    isMoney: true,
    link: 'See details',
    icon: <AccountBalanceOutlinedIcon className='widget-icon balance-icon' />,
  },
};

const Widget = ({ type }) => {
  const { title, isMoney, link, icon } = type;

  //temporary
  const diff = 20;
  const amount = 100;
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{title}</span>
        <span className='counter'>
          {isMoney && '$'} {amount}
        </span>
        <span className='link'>{link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {icon}
      </div>
    </div>
  );
};

export default Widget;
