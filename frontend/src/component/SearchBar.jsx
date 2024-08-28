import React from 'react';

function SearchBar({ searchVal, setSearchVal }) {
    const handleChange = (e) => {
        setSearchVal(e.target.value)
    }
    return (
        <div className="flex justify-center">
            <input
                onChange={handleChange}
                value={searchVal}
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-md p-2  md:w-1/3"
            />
        </div>
    );
}

export default SearchBar;
