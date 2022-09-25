import './info-detail.styles.scss';

const InfoDetail = ({ keyInfo, value }) => {
  return (
    <div className='info-detail'>
      <span className='info-key'>{keyInfo}:</span>
      <span className='info-value'>{value}</span>
    </div>
  );
};
export default InfoDetail;
