import '../App.css';

interface SetColorProps {
  number: number;
}

const SetColor: React.FC<SetColorProps> = ({ number }) => {
  return (
    <div>
     Set Color #{ number }
    </div>
  );
}

export default SetColor;
