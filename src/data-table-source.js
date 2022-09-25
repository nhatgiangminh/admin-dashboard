export const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='user-image'>
          <img src={params.row.img} alt='avatar' />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`status ${params.row.status}`}>{params.row.status}</div>
      );
    },
  },
];

export const rows = [
  {
    id: 1,
    username: 'Snow',
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    age: 35,
    email: 'example1@gmail.com',
    status: 'active',
  },
  {
    id: 2,
    username: 'Jane',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    age: 42,
    email: 'example2@gmail.com',
    status: 'active',
  },
  {
    id: 3,
    username: 'Lannister',
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    age: 45,
    email: 'example3@gmail.com',
    status: 'offline',
  },
  {
    id: 4,
    username: 'Stark',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    age: 16,
    email: 'example4@gmail.com',
    status: 'active',
  },
  {
    id: 5,
    username: 'Targaryen',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
    age: null,
    email: 'example5@gmail.com',
    status: 'active',
  },
  {
    id: 6,
    username: 'Melisandre',
    img: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    age: 150,
    email: 'example6@gmail.com',
    status: 'offline',
  },
  {
    id: 7,
    username: 'Clifford',
    img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    age: 44,
    email: 'example7@gmail.com',
    status: 'offline',
  },
  {
    id: 8,
    username: 'Frances',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    age: 36,
    email: 'example9@gmail.com',
    status: 'active',
  },
  {
    id: 9,
    username: 'Roxie',
    img: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80',
    age: 65,
    email: 'example10@gmail.com',
    status: 'active',
  },
];
