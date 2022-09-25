import './custom-table.styles.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {
    id: 1143155,
    product: 'Black Converse',
    img: 'https://i.ibb.co/bPmVXyP/black-converse.png',
    customer: 'John Smith',
    date: '1 March',
    amount: 110,
    method: 'Cash on Delivery',
    status: 'Approved',
  },
  {
    id: 2235235,
    product: 'Black Jean Shearling',
    img: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
    customer: 'Michael Doe',
    date: '1 March',
    amount: 250,
    method: 'Online Payment',
    status: 'Pending',
  },
  {
    id: 2342353,
    product: 'Floral Dress',
    img: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
    customer: 'John Smith',
    date: '1 March',
    amount: 80,
    method: 'Cash on Delivery',
    status: 'Pending',
  },
  {
    id: 2357741,
    product: 'Camo Down Vest',
    img: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
    customer: 'Jane Smith',
    date: '1 March',
    amount: 325,
    method: 'Online',
    status: 'Approved',
  },
  {
    id: 2342355,
    product: 'Blue Tanktop',
    img: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
    customer: 'Harold Carol',
    date: '1 March',
    amount: 25,
    method: 'Online',
    status: 'Pending',
  },
];
const CustomTable = () => {
  return (
    <div className='table'>
      <h3 className='title'>Lastest Transaction</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell className='table-cell'>ID</TableCell>
              <TableCell className='table-cell'>Product</TableCell>
              <TableCell className='table-cell'>Customer</TableCell>
              <TableCell className='table-cell'>Date</TableCell>
              <TableCell className='table-cell'>Amount</TableCell>
              <TableCell className='table-cell'>Method</TableCell>
              <TableCell className='table-cell'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className='table-cell'>{row.id}</TableCell>
                <TableCell className='table-cell'>
                  <div className='product-img'>
                    <img src={row.img} alt='' />
                  </div>
                </TableCell>
                <TableCell className='table-cell'>{row.customer}</TableCell>
                <TableCell className='table-cell'>{row.date}</TableCell>
                <TableCell className='table-cell'>{row.amount}$</TableCell>
                <TableCell className='table-cell'>{row.method}</TableCell>
                <TableCell className='table-cell'>
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
