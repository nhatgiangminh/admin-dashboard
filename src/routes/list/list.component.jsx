import SideBar from '../../components/sidebar/sidebar.component';
import NavBar from '../../components/navbar/navbar.component';
import DataTable from '../../components/data-table/data-table.component';
import './list.styles.scss';

const List = () => {
  return (
    <div className='list'>
      <SideBar />
      <div className='list-container'>
        <NavBar />
        <DataTable />
      </div>
    </div>
  );
};
export default List;
