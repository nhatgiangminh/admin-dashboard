import './data-table.styles.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { rows, columns } from '../../data-table-source';
import { Link } from 'react-router-dom';

const DataTable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='actions'>
            <button className='view-btn'>View</button>
            <button className='remove-btn'>Remove</button>
          </div>
        );
      },
    },
  ];
  return (
    <div className='data-table'>
      <div className='nav-link'>
        <Link className='add-new' to={'/users/new'}>
          Add New User
        </Link>
      </div>
      <DataGrid
        className='data-grid'
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick={true}
      />
    </div>
  );
};

export default DataTable;
