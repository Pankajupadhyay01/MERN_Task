import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaShare } from "react-icons/fa";

const DetailCard = () => {
    const base = import.meta.env.VITE_API
    const title = useParams().data
    const [data, setData] = useState()

    const detailData = async () => {
        try {
            const result = await axios.get(`${base}/cards/${title}`)
            setData(result.data.data)
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                return toast.error(error.response.data.error);
            } else {
                return toast.error(error.message);
            }
        }
    }
    useEffect(() => {
        detailData()
    }, [])



    return (
        <div className="grid grid-cols-1 gap-4 p-4 w-full  h-[100vh]  mx-auto " >
            <div>

                {data ?
                    <div className=" w-[50%] rounded-lg border border-black bg-gray-200 h-auto  shadow-sm">

                        <div className='border-b-2 border-black p-4'>
                            <h2 className="text-lg font-semibold text-gray-900">{data.title}</h2>
                        </div>
                        <div className='flex justify-between m-auto items-center'>

                            <p className="mt-2 text-black p-4">
                                {data.description}
                            </p>
                            <Link className="mt-2 text-blue-600 text-2xl p-4" to={data.link}>
                                <FaShare />

                            </Link>
                        </div>
                    </div  > : <div className='flex justify-center items-center m-auto'>loading...</div>}
            </div >
        </div>
    )
}

export default DetailCard