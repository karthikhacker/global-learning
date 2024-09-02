import { useState } from "react"
import { testimonialData } from "../data"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const length = testimonialData.length;

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)

    }
    return (
        <div className="md:h-[500px] py-6 bg-slate-100 px-2">
            <div className='md:flex gap-x-4'>
                <div className='md:w-[680px] bg-white shadow-xl h-[460px] px-4 py-4 md:basis-[60%]'>
                    {
                        testimonialData.map((item, index) => index === current && (
                            <div key={item.id} className="relative">
                                <div>
                                    <p className="text-sm leading-6 font-poppins mb-4 font-medium text-gry-500">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <img src={item.img} className="w-28 h-28 rounded-full bg-contain" />
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                </div>
                                <div className="absolute right-4 mt-7">
                                    <div className="flex  gap-x-4">
                                        <IoIosArrowBack size={4} className="w-8  h-8 bg-primary justify-center items-center text-white rounded-full cursor-pointer transition ease-out duration-500 hover:bg-blue-900" onClick={prev} />
                                        <IoIosArrowForward size={4} className="w-8  h-8 bg-primary justify-center items-center text-white rounded-full cursor-pointer" onClick={next} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="md:basis-[40%]">
                    <div className="text-center">
                        <h1 className=" text-primary my-4 ">Testimonials</h1>
                        <h2 className="font-semibold font-poppins my-4 text-lg">STUDENTS FEEDBACK</h2>
                        <p className="text-gray-400 text-sm font-poppins my-4">Happy Clients Makes us Happier</p>
                        <h1 className="my-6 text-xl font-poppins font-semibold">People Love To Learn With Us</h1>
                    </div>
                    <div className="md:w-[400px] mx-auto flex gap-x-4 ">
                        <div className="text-center md:basis-[50%]">
                            <h1 className="text-3xl font-poppins">90%</h1>
                            <p className="font-poppins text-md text-gray-600">Students complete</p>
                            <p className="font-poppins text-md text-gray-600">course successfully.</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl font-poppins"> 9/10</h1>
                            <p className="font-poppins text-md text-gray-600">User reported better</p>
                            <p className="font-poppins text-md text-gray-600"> learning outcomes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials