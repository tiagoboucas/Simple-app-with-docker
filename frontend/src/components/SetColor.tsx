import '../App.css';
import CustomDropdown from './CustomDropdown';

interface SetColorProps {
  number: number;
}

const SetColor: React.FC<SetColorProps> = ({ number }) => {
  return (
    <div className='d-flex'>
      <div className='m-auto dropdown-size'>
        <CustomDropdown />
      </div>
    </div>
  );
}

export default SetColor;
