import { useEffect, useState } from 'react';
import { fetchColors } from '../api/api';
import '../App.css';

interface Color {
  name: string;
  rgb: string;
};

const CustomDropdown = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [search, setSearch] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const dropdown = document.querySelector('.dropdown-menu');
    if ((search.length > 0 && colors.length > 0) || isInputFocused) {
      dropdown?.classList.add('show');
    } else {
      dropdown?.classList.remove('show');
    }
  }, [colors.length, isInputFocused, search.length]);

  useEffect(() => {
    const getColors = async () => {
      const response = await fetchColors(search);
      setColors(response?.items || []);
    };
    search.length > 0 ? getColors() : setColors([]);
  }, [search]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

   const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="dropdown-menu">
            {search.length > 0 && colors.length > 0 && colors.map((color, index) => (
              <span key={index} className="dropdown-item" style={{ color: '#' + color.rgb }}>
                {color.name}
              </span>
            ))}
            { isInputFocused && search.length === 0 && (
              <div className="px-3 py-4">Start typing to see available options...</div>
            )}
          </div>
      </div>
      <input
        type="text"
        className="form-control"
        aria-label="Text input with segmented dropdown button"
        value={search}
        onFocus={handleInputFocus}
        onChange={handleSearchChange}
        onBlur={handleInputBlur}
      />
    </div>
  );
}

export default CustomDropdown;
