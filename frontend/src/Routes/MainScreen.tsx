import { observer } from 'mobx-react';
import '../App.css';
import { useLocation } from 'react-router-dom';
import colorStore from '../stores/ColorStore';

const MainScreen = observer(() => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const themeParam = searchParams.get('theme');

  if (themeParam) {
    colorStore.setBackgroundColor(`#${themeParam}`);
  }

  return (
    <div className='d-flex mb-5'>
      <h1 className='welcome-message text-center m-auto'>Welcome to the theme picker application</h1>
    </div>
  );
});

export default MainScreen;
