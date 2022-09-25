import './new.styles.scss';
import SideBar from '../../components/sidebar/sidebar.component';
import NavBar from '../../components/navbar/navbar.component';
import FormInput from '../../components/form-input/form-input.component';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';

const New = ({ inputs, title }) => {
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const [file, setFile] = useState('');
  return (
    <div className='new'>
      <SideBar />
      <div className='new-container'>
        <NavBar />
        <div className='title'>
          <h2>{title}</h2>
        </div>
        <div className='center'>
          <div className='form-container'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://kkkdistributors.com/wp-content/uploads/2021/06/image.jpg'
              }
              alt='avatar-image'
            />
            <div className='form-data'>
              <form>
                <FormInput
                  labelText={<DriveFolderUploadIcon />}
                  labelFile={'file'}
                  type={'file'}
                  id={'file'}
                  onChange={handleChange}
                />
                {inputs.map((item) => {
                  return (
                    <FormInput
                      labelText={item.label}
                      type={item.type}
                      placeholder={item.placeholder}
                      key={item.id}
                    />
                  );
                })}
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New;
