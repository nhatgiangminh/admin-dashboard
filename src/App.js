import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import List from './routes/list/list.component';
import Single from './routes/single/single.component';
import New from './routes/new/new.component';
import Login from './routes/login/login.component';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='users'>
            <Route index element={<List />} />
            <Route path=':userId' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
          <Route path='products'>
            <Route index element={<List />} />
            <Route path=':productId' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
