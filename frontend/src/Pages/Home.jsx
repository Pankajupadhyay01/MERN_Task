import React, { useState, useEffect } from 'react';
import SearchBar from '../component/SearchBar';
import CardLists from '../component/CardLists';
import axios from 'axios';
import { toast } from 'react-toastify';

const Home = () => {
    const base = import.meta.env.VITE_API;
    const [searchVal, setSearchVal] = useState("");
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`${base}/getCards`);
                setCards(data.data);
            } catch (error) {
                toast.error("Something Went Wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredCards = searchVal.trim() === "" ? cards : cards.filter((card) =>
        card.title.toLowerCase().includes(searchVal.toLowerCase())
    );

    return (
        <main className="flex-grow">
            <div className="bg-purple-100 py-12">
                <h1 className="text-center text-3xl font-bold mb-4">How can we help?</h1>
                <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
            </div>

            {!loading ? (
                filteredCards.length > 0 ? (
                    <CardLists cards={filteredCards} />
                ) : (
                    <div className='flex w-full justify-center items-center m-auto text-2xl text-blue-900 font-bold'>
                        No Data
                    </div>
                )
            ) : (
                <div className='flex justify-center items-center m-auto my-5 text-4xl animate-bounce'>
                    Loading...
                </div>
            )}
        </main>
    );
};

export default Home;
