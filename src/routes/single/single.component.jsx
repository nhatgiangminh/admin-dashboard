import './single.styles.scss';
import SideBar from '../../components/sidebar/sidebar.component';
import NavBar from '../../components/navbar/navbar.component';
import InfoDetail from '../../components/info-detail/info-detail.component';
import Chart from '../../components/chart/chart.component';
import CustomTable from '../../components/custom-table/custom-table.component';

const Single = () => {
  return (
    <div className='single'>
      <SideBar />
      <div className='single-container'>
        <NavBar />
        <div className='top'>
          <div className='left'>
            <h3>Information</h3>
            <div className='item'>
              <img
                src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                alt='avatar'
              />
              <div className='item-detail'>
                <h2>Snow</h2>
                <InfoDetail keyInfo='Email' value='example1@gmail.com' />
                <InfoDetail keyInfo='Phone' value='+8401239012' />
                <InfoDetail keyInfo='Address' value='HCM city' />
                <InfoDetail keyInfo='Country' value='VN' />
              </div>
            </div>
            <button className='edit-btn'>Edit</button>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title={'User Spending (Last 6 months)'} />
          </div>
        </div>
        <div className='bottom'>
          <CustomTable />
        </div>
      </div>
    </div>
  );
};
export default Single;
