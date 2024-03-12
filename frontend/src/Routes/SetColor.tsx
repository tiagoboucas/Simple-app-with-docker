import '../App.css';
import CustomDropdown from '../components/CustomDropdown';

interface SetColorProps {
  number: number;
}

const SetColor: React.FC<SetColorProps> = ({ number }) => {
  return (
    <div className='d-flex'>
      <div className='m-auto dropdown-size'>
        <CustomDropdown number={number} />
      </div>
    </div>
  );
}

export default SetColor;
