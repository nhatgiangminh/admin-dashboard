import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import List from './routes/list/list.component';
import Single from './routes/single/single.component';
import New from './routes/new/new.component';
import Login from './routes/login/login.component';
import { userInputs, productInputs } from './form-source';
import './style/dark-theme.styles.scss';
import { useContext } from 'react';
import { ThemeContext } from './context/theme/theme.context';

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='users'>
            <Route index element={<List />} />
            <Route path=':userId' element={<Single />} />
            <Route
              path='new'
              element={<New inputs={userInputs} title='Add New User' />}
            />
          </Route>
          <Route path='products'>
            <Route index element={<List />} />
            <Route path=':productId' element={<Single />} />
            <Route
              path='new'
              element={<New inputs={productInputs} title='Add New Product' />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
