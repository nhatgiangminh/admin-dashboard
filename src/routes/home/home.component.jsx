import SideBar from '../../components/sidebar/sidebar.component';
import NavBar from '../../components/navbar/navbar.component';
import Widget, { WIDGET_TYPES } from '../../components/widget/widget.component';
import './home.styles.scss';

const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className='home-container'>
        <NavBar />
        <div className='widgets'>
          <Widget type={WIDGET_TYPES.user} />
          <Widget type={WIDGET_TYPES.order} />
          <Widget type={WIDGET_TYPES.earning} />
          <Widget type={WIDGET_TYPES.balance} />
        </div>
      </div>
    </div>
  );
};
export default Home;
