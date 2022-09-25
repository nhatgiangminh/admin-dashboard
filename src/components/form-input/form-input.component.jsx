import './form-input.styles.scss';

const FormInput = ({ labelText, labelFile, ...props }) => {
  return (
    <div className='user-input'>
      <label htmlFor={labelFile}>{labelText}</label>
      <input {...props}></input>
    </div>
  );
};

export default FormInput;
