import { useEffect, useState, useRef } from "react";
import { fetchColors } from "../api/api";
import { observer } from 'mobx-react';
import colorStore from '../stores/ColorStore';
import "../App.css";

interface Color {
    name: string;
    rgb: string;
}

const CustomDropdown = observer(() => {
    const [colors, setColors] = useState<Color[]>([]);
    const [search, setSearch] = useState("");
    const [placeholder, setPlaceholder] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [isInputFocused, setIsInputFocused] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getColors = async () => {
            const response = await fetchColors(search);
            setColors(response?.items || []);
        };
        search.length > 0 ? getColors() : setColors([]);
    }, [search]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
                clearSearch();
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const dropdown = document.querySelector(".dropdown-menu") as HTMLDivElement;
        dropdown?.classList.toggle("show", (search.length > 0 && colors.length > 0 && selectedColor === "") || isInputFocused);
    }, [colors, isInputFocused, search, selectedColor]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleChangeColor = (color: string) => {
        setSelectedColor(color);
        colorStore.setBackgroundColor(color);
    };

    const handleInputFocus = () => {
        setIsInputFocused(true);
        setSearch("");
    };

    const handleClickColor = (color: Color) => {
        handleChangeColor(color.rgb);
        setPlaceholder(color.name);
        clearSearch();
    };

    const clearSearch = () => {
        setSearch("");
        setIsInputFocused(false);
    };

    return (
        <div className='input-group mb-3' ref={dropdownRef}>
            <input
                type='text'
                className='form-control input-color'
                value={search}
                placeholder={placeholder}
                onFocus={handleInputFocus}
                onChange={handleSearchChange}
                aria-label='Search for colors'
            />
            <div className='dropdown-menu w-100' role='menu'>
                {search.length > 0 && colors.length > 0 ? (
                    <ul className='list-unstyled mb-0'>
                        {colors.map((color, index) => (
                            <li
                                key={index}
                                className='dropdown-item'
                                onClick={() => handleClickColor(color)}
                                role='menuitem'
                                tabIndex={0}
                            >
                                {color.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className='px-3 py-4' role='status'>
                        {search.length === 0 ? 'Start typing to see available options...' : 'No results found...'}
                    </div>
                )}
            </div>
        </div>
    );
});

export default CustomDropdown;
