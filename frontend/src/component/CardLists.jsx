import React from 'react';
import { Link } from 'react-router-dom';

function CardLists({ cards }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-4xl mx-auto " >
            {
                cards.map((card, i) => (
                    <Link to={"/card/" + card.title} key={i} className="max-w-sm rounded-lg border border-gray-200 bg-gray-50  shadow-sm">
                        <>
                            <div className='border-b-2 p-4'>
                                <h2 className="text-lg font-semibold text-gray-900">{card.title}</h2>
                            </div>
                            <p className="mt-2 text-gray-600 p-4">
                                {card.description}
                            </p>
                        </>
                    </Link  >
                ))
            }
        </div >
    );
}

export default CardLists;
