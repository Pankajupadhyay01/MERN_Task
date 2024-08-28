import React, { useState } from 'react'
import * as Yup from 'yup'
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from 'axios';
import { toast } from 'react-toastify';

const Form = ({ setModal }) => {
    const base = import.meta.env.VITE_API
    const [formdata, setformdata] = useState({
        title: '',
        description: '',
        link: ''
    })
    const [err, seterr] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        setformdata({ ...formdata, [name]: value })
    }

    const validationSchema = Yup.object({
        title: Yup.string().min(1, "Enter Your title").matches(/^[A-Za-z\s]+$/, 'Please an valid title'),
        description: Yup.string().min(1, "Enter Your description").matches(/^[A-Za-z\s]+$/, 'Please an valid Description'),
        link: Yup.string().min(1, "Enter Your link"),
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            seterr(null)
            await validationSchema.validate(formdata, { abortEarly: false })
            const result = await axios.post(`${base}/addRequest`, formdata)
            toast.success("Added Sucessfully")
        } catch (error) {
            console.log(error);

            if (axios.isAxiosError(error)) {
                if (error.response && error.response.data && error.response.data.error) {
                    const apiErrorMessage = error.response.data.error;
                    const formattedErrorMessage = apiErrorMessage.split(':').slice(1).join(': ');
                    return toast.error(formattedErrorMessage);
                } else {
                    return toast.error(error.response.data.message);
                }
            } else if (error.name === "ValidationError") {
                const newError = {};
                error.inner.forEach((elem) => {
                    newError[elem.path] = elem.message;
                });
                seterr(newError);
            }
        }
    }


    return (
        <div className='p-4 rounded-lg gap-8 flex flex-col w-full fixed top-0 left-0 right-0 bottom-0 bg-[#ffffffa3] justify-center z-[999] max-w-[12000px]'>
            <form onSubmit={handleSubmit} className='flex flex-col relative justify-center m-auto w-full  rounded-lg md:w-[70%] gap-4 bg-white p-10'>

                <button onClick={() => setModal(false)} className='absolute top-2 right-5 text-xl text-black'>
                    <IoMdCloseCircleOutline />
                </button>

                <div className='flex md:flex-row flex-col gap-3 md:gap-10 '>
                    <div className='flex flex-col w-full gap-3'>
                        <label htmlFor="">Title</label>
                        <input type="text"
                            className='bg-[#eee] p-3 w-full rounded-lg text-blue-500 border-2  outline-none'
                            name='title'
                            value={formdata.title}
                            onChange={handleChange}
                            placeholder='Title *' />

                        {err && <p className=" text-red-500">{err.title}</p>}
                    </div>
                </div>

                <div className='flex flex-col w-full gap-3'>
                    <label htmlFor="">Link</label>
                    <input type="text"
                        className='bg-[#eee] p-3 w-full rounded-lg text-blue-500 border-2  outline-none'
                        name='link'
                        value={formdata.link}
                        onChange={handleChange}
                        placeholder='Link *' />

                    {err && <p className=" text-red-500">{err.link}</p>}
                </div>

                <div className='flex flex-col w-full gap-3'>
                    <label htmlFor="">Description</label>
                    <input type="text"
                        className='bg-[#eee] p-3 w-full rounded-lg text-blue-500 border-2  outline-none'
                        name='description'
                        value={formdata.description}
                        onChange={handleChange}
                        placeholder='Description *' />

                    {err && <p className=' text-red-500'>{err.description}</p>}
                </div>

                <button type='submit' className='border-2 p-4 rounded-full bg-[#262525] text-white text-xl font-bold'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form