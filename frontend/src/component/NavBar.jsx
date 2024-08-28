import React, { useState } from 'react';
import Form from './Form';

function NavBar() {

    const [modal, setModal] = useState(false)
    return (
        <header className="bg-black text-white p-4 flex md:flex-row flex-col gap-2 justify-between items-center">
            <div className="font-bold text-xl">Abstract | Help Center</div>
            <button onClick={() => setModal(true)} className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">
                Submit a request
            </button>

            {
                modal && <Form setModal={setModal} />
            }
        </header >
    );
}

export default NavBar;
