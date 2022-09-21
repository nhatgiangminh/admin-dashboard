import './featured.styles.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TargetItem from '../../components/target-item/target-item.component';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h3 className='title'>Total Revenue</h3>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featured-chart'>
          <CircularProgressbar value={50} text='50%' />
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>420$</p>
        <p className='desc'>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
        </p>
        <div className='targets'>
          <TargetItem label={'Target'} />
          <TargetItem label={'Last Week'} />
          <TargetItem label={'Last Month'} />
        </div>
      </div>
    </div>
  );
};
export default Featured;
