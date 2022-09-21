import './target-item.styles.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const TargetItem = ({ type, label }) => {
  return (
    <div className='target-item'>
      <span className='label'>{label}</span>
      <div className='trending negative'>
        <KeyboardArrowDownIcon className='icon' />
        <span className='diff'>$14.8K</span>
      </div>
    </div>
  );
};

export default TargetItem;
